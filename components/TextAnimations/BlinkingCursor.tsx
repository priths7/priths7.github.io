"use client";

import { useEffect, useState } from "react";

export const BlinkingCursor : React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      aria-hidden
      className="inline-block w-0.5 h-5 bg-green-400 align-middle ml-1"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.05s" }}
    />
  );
}