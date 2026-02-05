"use client"

import React, { useEffect, useRef } from 'react';
import './Room.css';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const columns = Math.floor(width / 20) + 1;
    const yPositions: number[] = Array(columns).fill(0);

    const matrixRain = () => {
      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#0f0';
      ctx.font = '15pt monospace';

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    const interval = setInterval(matrixRain, 50);
    return () => clearInterval(interval);
  }, []);

  if(typeof window !== undefined)
  {
    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="matrix-rain"></canvas>;
  }

};

const Room: React.FC = () => {
  return (
    <div className="room">
      <div className="face top"><MatrixRain /></div>
      <div className="face bottom"><MatrixRain /></div>
      <div className="face left"><MatrixRain /></div>
      <div className="face right"><MatrixRain /></div>
    </div>
  );
};

export default Room;