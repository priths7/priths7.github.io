import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const TAIL_COLORS = [
  "#ffffff", // Head (bright white)
  "#33ff66", // Bright green
  "#2ce05a",
  "#24c24d",
  "#1ca341",
  "#158534",
  "#0f6628",
  "#09471b",
  "#05290f",
  "#020a04", // Fades to nearly black
];

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.dispatchEvent(new Event("resume-matrix"));
  }, [pathname]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let animationFrameId: number;

    // --- The Pure RAF Clock ---
    let lastTime = 0; 
    let timeAccumulator = 0;

    const NORMAL_FPS = 24;
    const HOVER_FPS = 12;
    let currentFPS = NORMAL_FPS;

    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    
    let canvasWidth = 0;
    let canvasHeight = 0;

    const initDrops = () => {
      columns = Math.floor(canvasWidth / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops.push(Math.floor(Math.random() * -(canvasHeight / fontSize)));
      }
    };

    const resizeCanvas = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(canvasWidth * pixelRatio);
      canvas.height = Math.floor(canvasHeight * pixelRatio);
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      initDrops();
    };

    resizeCanvas();

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);
      
      if (!lastTime) lastTime = timestamp;

      let dt = timestamp - lastTime;
      lastTime = timestamp;

      const frameInterval = 1000 / currentFPS;

      // --- THE DYNAMIC CLAMP FIX ---
      // We no longer rely on an arbitrary 200ms threshold.
      // If dt is EVER larger than exactly one frame interval (due to a rapid 
      // tab switch, a heavy 3D card flip, or a lag spike), we clamp it.
      // This completely prevents chaotic remainders from entering the accumulator!
      if (dt > frameInterval) {
        dt = frameInterval;
      }

      timeAccumulator += dt;

      if (timeAccumulator >= frameInterval) {
        timeAccumulator = timeAccumulator % frameInterval;

        // Solid clear
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.font = `${fontSize}px monospace`;

        // Color batching
        for (let t = 0; t < TAIL_COLORS.length; t++) {
          ctx.fillStyle = TAIL_COLORS[t];

          for (let i = 0; i < drops.length; i++) {
            const dropY = drops[i] - t;

            if (dropY < 0 || dropY * fontSize > canvasHeight) continue;

            const text =
              t === 0
                ? CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
                : CHARACTERS[(i * 123 + dropY * 321) % CHARACTERS.length];

            ctx.fillText(text, i * fontSize, dropY * fontSize);
          }
        }

        // Move drops
        for (let i = 0; i < drops.length; i++) {
          if (drops[i] * fontSize > canvasHeight && Math.random() > 0.975) {
            drops[i] = 0;
          } else {
            drops[i]++;
          }
        }
      }
    };

    const handlePause = () => { currentFPS = HOVER_FPS; };
    const handleResume = () => { currentFPS = NORMAL_FPS; };
    const handleResize = () => { resizeCanvas(); };

    window.addEventListener("pause-matrix", handlePause);
    window.addEventListener("resume-matrix", handleResume);
    window.addEventListener("resize", handleResize);

    // Kick off
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pause-matrix", handlePause);
      window.removeEventListener("resume-matrix", handleResume);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 z-0 h-screen w-screen"
    ></canvas>
  );
};