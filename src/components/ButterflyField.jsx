import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { memo, useEffect, useMemo, useRef, useState } from "react";

const BUTTERFLY_COUNT = 42;
const INTERACTION_RADIUS = 118;

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
      size: 7 + random() * 6,
      opacity: 0.18 + random() * 0.24,
      flapDuration: 1.9 + random() * 2.2,
      flapDelay: random() * 1.8,
      driftDuration: 3.8 + random() * 3.1,
      floatRange: 4 + random() * 8,
      floatSpeedX: 0.22 + random() * 0.3,
      floatSpeedY: 0.18 + random() * 0.28,
      floatPhaseX: random() * Math.PI * 2,
      floatPhaseY: random() * Math.PI * 2,
      radius: INTERACTION_RADIUS,
      escapeForce: 12 + random() * 18,
      rotateOffset: -8 + random() * 16,
      bodyRotation: -6 + random() * 12,
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
    stiffness: 120,
    damping: 20,
    mass: 0.95,
  });
  const springY = useSpring(targetY, {
    stiffness: 120,
    damping: 20,
    mass: 0.95,
  });

  const tilt = useTransform(springX, [-28, 0, 28], [-8, 0, 8]);
  const combinedX = useTransform([driftX, springX], ([idle, avoid]) => idle + avoid);
  const combinedY = useTransform([driftY, springY], ([idle, avoid]) => idle + avoid);

  useAnimationFrame((time) => {
    const t = time / 1000;
    const nextX =
      Math.sin(t * butterfly.floatSpeedX + butterfly.floatPhaseX) *
      butterfly.floatRange;
    const nextY =
      Math.cos(t * butterfly.floatSpeedY + butterfly.floatPhaseY) *
      (butterfly.floatRange * 0.48);

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
        rotate: useTransform(tilt, (value) => value + butterfly.bodyRotation),
        opacity: butterfly.opacity,
      }}
    >
      <motion.div
        animate={{
          y: [0, -1.2, 0, 0.4, 0],
          scale: [1, 1.02, 0.99, 1.01, 1],
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
            filter: "drop-shadow(0 0 6px rgba(139,92,246,0.42))",
          }}
        >
          <motion.g
            animate={{
              rotate: [10, -8, 10],
              scaleY: [1, 0.9, 1],
              x: [0, -0.4, 0],
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
              d="M24 16C20 7.5 12 5.8 7.2 9.4c-2.8 2.2-2.3 6.5.8 8.4 4.5 2.8 10.3 2 16-1.8Z"
              fill="rgba(233, 221, 255, 0.68)"
              stroke="rgba(196, 181, 253, 0.18)"
              strokeWidth="0.65"
            />
            <path
              d="M23.7 17.1c-4.1 1.3-7.4 4.4-8.3 8-.4 1.7.9 2.9 2.5 2.5 2.8-.7 5.3-3.3 7.2-7.6Z"
              fill="rgba(167, 139, 250, 0.42)"
              stroke="rgba(196, 181, 253, 0.14)"
              strokeWidth="0.65"
            />
          </motion.g>

          <motion.g
            animate={{
              rotate: [-10, 8, -10],
              scaleY: [1, 0.9, 1],
              x: [0, 0.4, 0],
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
              d="M24 16C28 7.5 36 5.8 40.8 9.4c2.8 2.2 2.3 6.5-.8 8.4-4.5 2.8-10.3 2-16-1.8Z"
              fill="rgba(233, 221, 255, 0.68)"
              stroke="rgba(196, 181, 253, 0.18)"
              strokeWidth="0.65"
            />
            <path
              d="M24.3 17.1c4.1 1.3 7.4 4.4 8.3 8 .4 1.7-.9 2.9-2.5 2.5-2.8-.7-5.3-3.3-7.2-7.6Z"
              fill="rgba(167, 139, 250, 0.42)"
              stroke="rgba(196, 181, 253, 0.14)"
              strokeWidth="0.65"
            />
          </motion.g>

          <path
            d="M24 9.2c1.1 0 1.9.8 1.9 1.9v9.9c0 2.1-.9 4-1.9 4s-1.9-1.9-1.9-4v-9.9c0-1.1.8-1.9 1.9-1.9Z"
            fill="rgba(248, 245, 255, 0.72)"
          />
          <path
            d="M23.8 9.3 21.5 5.9M24.2 9.3l2.3-3.4"
            stroke="rgba(245, 243, 255, 0.52)"
            strokeWidth="0.8"
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
