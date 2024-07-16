import { useCallback } from 'react';
import { fabric } from 'fabric';

interface IInitParams {
  initialCanvas: fabric.Canvas;
  initialContainer: HTMLDivElement;
}

export const useEditor = () => {
  const init = useCallback(
    ({ initialCanvas, initialContainer }: IInitParams) => {
      fabric.Object.prototype.set({
        cornerColor: '#FFF',
        cornerStyle: 'circle',
        borderColor: '#3b82f6',
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: '#3b82f6',
      });

      const initalWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: 'clip',
        fill: 'white',
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: 'rgba(0,0,0,0.8)',
          blur: 5,
        }),
      });

      initialCanvas.setWidth(initialContainer.offsetWidth);
      initialCanvas.setHeight(initialContainer.offsetHeight);

      initialCanvas.add(initalWorkspace);
      initialCanvas.centerObject(initalWorkspace);
      initialCanvas.clipPath = initalWorkspace;

      const test = new fabric.Rect({
        height: 100,
        width: 100,
        fill: 'black',
      });

      initialCanvas.add(test);
      initialCanvas.centerObject(test);
    },
    []
  );

  return { init };
};
