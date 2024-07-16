'use client';

import { useEditor } from '@/features/editor/hooks/use-editor';
import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

export const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current!, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialCanvas: canvas,
      initialContainer: workspaceRef.current!,
    });
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 h-full bg-muted" ref={workspaceRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
