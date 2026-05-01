import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  glow: number;
};

const NODE_COUNT = 92;
const NODE_RADIUS = 1.5;
const LINK_DISTANCE = 150;
const MOUSE_RADIUS = 200;
const BASE_COLOR = "#a78bfa";

const randomVelocity = () => {
  const speed = 0.2 + Math.random() * 0.3;
  const angle = Math.random() * Math.PI * 2;

  return {
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
  };
};

const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

const hexToRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
};

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const boundsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const rgb = hexToRgb(BASE_COLOR);

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      boundsRef.current = {
        width: rect.width,
        height: rect.height,
      };

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodesRef.current.length === 0) {
        nodesRef.current = Array.from({ length: NODE_COUNT }, () => {
          const velocity = randomVelocity();

          return {
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            vx: velocity.vx,
            vy: velocity.vy,
            glow: 0,
          };
        });
        return;
      }

      nodesRef.current = nodesRef.current.map((node) => ({
        ...node,
        x: Math.min(node.x, rect.width),
        y: Math.min(node.y, rect.height),
      }));
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        mouseRef.current.active = false;
        return;
      }

      mouseRef.current = { x, y, active: true };
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    const updateNodes = () => {
      const { width, height } = boundsRef.current;
      const { x: mouseX, y: mouseY, active } = mouseRef.current;

      for (const node of nodesRef.current) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= NODE_RADIUS || node.x >= width - NODE_RADIUS) {
          node.vx *= -1;
          node.x = Math.max(NODE_RADIUS, Math.min(node.x, width - NODE_RADIUS));
        }

        if (node.y <= NODE_RADIUS || node.y >= height - NODE_RADIUS) {
          node.vy *= -1;
          node.y = Math.max(NODE_RADIUS, Math.min(node.y, height - NODE_RADIUS));
        }

        if (active) {
          const dx = node.x - mouseX;
          const dy = node.y - mouseY;
          const distance = Math.hypot(dx, dy);

          if (distance < MOUSE_RADIUS) {
            const targetGlow = 1 - distance / MOUSE_RADIUS;
            node.glow = lerp(node.glow, targetGlow, 0.18);
          } else {
            node.glow *= 0.95;
          }
        } else {
          node.glow *= 0.95;
        }
      }
    };

    const drawFrame = () => {
      const { width, height } = boundsRef.current;

      context.clearRect(0, 0, width, height);
      updateNodes();

      for (let i = 0; i < nodesRef.current.length; i += 1) {
        const source = nodesRef.current[i];

        for (let j = i + 1; j < nodesRef.current.length; j += 1) {
          const target = nodesRef.current[j];
          const dx = source.x - target.x;
          const dy = source.y - target.y;
          const distance = Math.hypot(dx, dy);

          if (distance > LINK_DISTANCE) {
            continue;
          }

          const opacity = (1 - distance / LINK_DISTANCE) * 0.22;
          context.beginPath();
          context.moveTo(source.x, source.y);
          context.lineTo(target.x, target.y);
          context.lineWidth = 0.7;
          context.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
          context.shadowBlur = 0;
          context.stroke();
        }
      }

      for (const node of nodesRef.current) {
        const glowStrength = Math.max(0, Math.min(node.glow, 1));
        const radius = NODE_RADIUS + glowStrength * 1.2;

        context.beginPath();
        context.arc(node.x, node.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.35 + glowStrength * 0.55})`;
        context.shadowColor = BASE_COLOR;
        context.shadowBlur = glowStrength > 0.02 ? 6 + glowStrength * 18 : 0;
        context.fill();
      }

      frameRef.current = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();
    drawFrame();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
};

export default PlexusBackground;
