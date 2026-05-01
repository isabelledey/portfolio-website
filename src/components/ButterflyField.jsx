import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { memo, useEffect, useMemo, useRef, useState } from "react";

const BUTTERFLY_COUNT = 46;
const INTERACTION_RADIUS = 150;

const createSeededRandom = (seed) => {
  let current = seed;

  return () => {
    current = (current * 1664525 + 1013904223) % 4294967296;
    return current / 4294967296;
  };
};

const createButterflySwarm = (count) => {
  const random = createSeededRandom(42);

  return Array.from({ length: count }, (_, index) => {
    let x = 0;
    let y = 0;

    // Keep the center a bit cleaner so the heading remains dominant.
    for (let attempt = 0; attempt < 6; attempt += 1) {
      x = 4 + random() * 92;
      y = 6 + random() * 88;

      const insideHeadlineZone = x > 28 && x < 72 && y > 24 && y < 72;
      if (!insideHeadlineZone || attempt === 5) {
        break;
      }
    }

    return {
      id: `butterfly-${index}`,
      xPct: x,
      yPct: y,
      size: 8 + random() * 8,
      opacity: 0.32 + random() * 0.42,
      flapDuration: 1.35 + random() * 1.9,
      flapDelay: random() * 1.8,
      driftDuration: 2.8 + random() * 2.4,
      floatRange: 8 + random() * 16,
      floatSpeedX: 0.5 + random() * 0.7,
      floatSpeedY: 0.45 + random() * 0.8,
      floatPhaseX: random() * Math.PI * 2,
      floatPhaseY: random() * Math.PI * 2,
      radius: INTERACTION_RADIUS,
      escapeForce: 34 + random() * 48,
      rotateOffset: -12 + random() * 24,
    };
  });
};

const ButterflyParticle = memo(function ButterflyParticle({
  butterfly,
  bounds,
  pointer,
}) {
  const idleX = useMotionValue(0);
  const idleY = useMotionValue(0);
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const driftX = useSpring(idleX, {
    stiffness: 55,
    damping: 20,
    mass: 1,
  });
  const driftY = useSpring(idleY, {
    stiffness: 55,
    damping: 20,
    mass: 1,
  });
  const springX = useSpring(targetX, {
    stiffness: 175,
    damping: 18,
    mass: 0.78,
  });
  const springY = useSpring(targetY, {
    stiffness: 175,
    damping: 18,
    mass: 0.78,
  });

  const tilt = useTransform(springX, [-55, 0, 55], [-16, 0, 16]);
  const combinedX = useTransform([driftX, springX], ([idle, avoid]) => idle + avoid);
  const combinedY = useTransform([driftY, springY], ([idle, avoid]) => idle + avoid);

  useAnimationFrame((time) => {
    const t = time / 1000;
    const nextX =
      Math.sin(t * butterfly.floatSpeedX + butterfly.floatPhaseX) *
      butterfly.floatRange;
    const nextY =
      Math.cos(t * butterfly.floatSpeedY + butterfly.floatPhaseY) *
      (butterfly.floatRange * 0.65);

    idleX.set(nextX);
    idleY.set(nextY);
  });

  useEffect(() => {
    if (!bounds.width || !bounds.height || !pointer) {
      targetX.set(0);
      targetY.set(0);
      return;
    }

    const homeX = (bounds.width * butterfly.xPct) / 100;
    const homeY = (bounds.height * butterfly.yPct) / 100;
    const deltaX = homeX - pointer.x;
    const deltaY = homeY - pointer.y;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance >= butterfly.radius) {
      targetX.set(0);
      targetY.set(0);
      return;
    }

    const influence = 1 - distance / butterfly.radius;
    const waveStrength = influence * influence * butterfly.escapeForce;
    const normalizedX =
      distance > 0 ? deltaX / distance : Math.cos(butterfly.rotateOffset);
    const normalizedY =
      distance > 0 ? deltaY / distance : Math.sin(butterfly.rotateOffset);

    targetX.set(normalizedX * waveStrength);
    targetY.set(normalizedY * waveStrength);
  }, [bounds, butterfly, pointer, targetX, targetY]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${butterfly.xPct}%`,
        top: `${butterfly.yPct}%`,
        width: butterfly.size * 2.4,
        height: butterfly.size * 1.7,
        marginLeft: -(butterfly.size * 1.2),
        marginTop: -(butterfly.size * 0.85),
        x: combinedX,
        y: combinedY,
        rotate: tilt,
        opacity: butterfly.opacity,
      }}
    >
      <motion.div
        animate={{
          y: [0, -2.5, 0, 1, 0],
          scale: [1, 1.05, 0.97, 1.03, 1],
        }}
        transition={{
          duration: butterfly.driftDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: butterfly.flapDelay,
        }}
        className="relative h-full w-full"
      >
        <svg
          viewBox="0 0 48 32"
          className="h-full w-full overflow-visible"
          style={{
            filter: "drop-shadow(0 0 8px #8B5CF6)",
          }}
        >
          <motion.g
            animate={{
              rotate: [18, -16, 18],
              scaleY: [1, 0.78, 1],
              x: [0, -0.8, 0],
            }}
            transition={{
              duration: butterfly.flapDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: butterfly.flapDelay,
            }}
            style={{ originX: "24px", originY: "16px" }}
          >
            <path
              d="M24 16C18 5 8 4 3 10c-2 3-1 8 3 10 5 3 12 2 18-4Z"
              fill="rgba(221, 214, 254, 0.92)"
              stroke="rgba(196, 181, 253, 0.35)"
              strokeWidth="0.8"
            />
            <path
              d="M23.5 17C18.5 18 14 22 12.8 27c-.5 2 1.1 3.6 3.1 3.2 3.4-.7 6.8-3.8 8.7-8.9Z"
              fill="rgba(167, 139, 250, 0.72)"
              stroke="rgba(196, 181, 253, 0.26)"
              strokeWidth="0.8"
            />
          </motion.g>

          <motion.g
            animate={{
              rotate: [-18, 16, -18],
              scaleY: [1, 0.78, 1],
              x: [0, 0.8, 0],
            }}
            transition={{
              duration: butterfly.flapDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: butterfly.flapDelay,
            }}
            style={{ originX: "24px", originY: "16px" }}
          >
            <path
              d="M24 16C30 5 40 4 45 10c2 3 1 8-3 10-5 3-12 2-18-4Z"
              fill="rgba(221, 214, 254, 0.92)"
              stroke="rgba(196, 181, 253, 0.35)"
              strokeWidth="0.8"
            />
            <path
              d="M24.5 17C29.5 18 34 22 35.2 27c.5 2-1.1 3.6-3.1 3.2-3.4-.7-6.8-3.8-8.7-8.9Z"
              fill="rgba(167, 139, 250, 0.72)"
              stroke="rgba(196, 181, 253, 0.26)"
              strokeWidth="0.8"
            />
          </motion.g>

          <path
            d="M24 8.3c1.4 0 2.4 1.1 2.4 2.4v10.6c0 2.3-1.1 4.4-2.4 4.4s-2.4-2.1-2.4-4.4V10.7c0-1.3 1-2.4 2.4-2.4Z"
            fill="rgba(245, 243, 255, 0.95)"
          />
          <path
            d="M23.7 8.2 20.5 4.3M24.3 8.2l3.2-3.9"
            stroke="rgba(245, 243, 255, 0.8)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
});

const ButterflyField = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(0);
  const [bounds, setBounds] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const [pointer, setPointer] = useState(null);

  const butterflies = useMemo(
    () => createButterflySwarm(BUTTERFLY_COUNT),
    [],
  );

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return undefined;
    }

    const updateBounds = () => {
      const rect = element.getBoundingClientRect();
      setBounds({
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top,
      });
    };

    updateBounds();

    const resizeObserver = new ResizeObserver(updateBounds);
    resizeObserver.observe(element);

    window.addEventListener("resize", updateBounds);
    window.addEventListener("scroll", updateBounds, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        if (!bounds.width || !bounds.height) {
          return;
        }

        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const margin = INTERACTION_RADIUS;

        if (
          x < -margin ||
          y < -margin ||
          x > bounds.width + margin ||
          y > bounds.height + margin
        ) {
          setPointer(null);
          return;
        }

        setPointer({ x, y });
      });
    };

    const clearPointer = () => {
      cancelAnimationFrame(frameRef.current);
      setPointer(null);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", clearPointer);
    window.addEventListener("blur", clearPointer);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", clearPointer);
      window.removeEventListener("blur", clearPointer);
    };
  }, [bounds]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {butterflies.map((butterfly) => (
        <ButterflyParticle
          key={butterfly.id}
          butterfly={butterfly}
          bounds={bounds}
          pointer={pointer}
        />
      ))}
    </div>
  );
};

export default ButterflyField;
