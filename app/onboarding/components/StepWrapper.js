'use client';
import { useRef } from 'react';

export default function StepWrapper({ children }) {
  const wrapperRef = useRef(null);

  return (
    <div ref={wrapperRef} className="min-h-[300px]">
      {children}
    </div>
  );
}
