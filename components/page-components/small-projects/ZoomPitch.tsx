import React, { useRef } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

const ZoomPitch = () => {
  const zoomRef = useRef<ReactZoomPanPinchRef>(null!);

  const zoomTo =
    (id: string): React.MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      const { zoomToElement } = zoomRef.current;
      zoomToElement(id);
    };

  const Control = ({ zoomIn, zoomOut, resetTransform }: any) => (
    <div className="flex justify-center">
      <button
        className="w-10 h-10 p-2 mx-3 bg-green-500 rounded-full"
        onClick={() => zoomIn()}
      >
        +
      </button>
      <button
        className="w-10 h-10 p-2 mx-3 bg-yellow-500 rounded-full"
        onClick={() => zoomOut()}
      >
        -
      </button>
      <button
        className="w-10 h-10 p-2 mx-3 bg-red-500 rounded-full"
        onClick={() => resetTransform()}
      >
        x
      </button>
    </div>
  );

  return (
    <TransformWrapper ref={zoomRef}>
      {(utils) => (
        <>
          <Control {...utils} />
          <div className="">
            <button
              onClick={zoomTo("red")}
              className="p-3 mx-4 bg-red-300 rounded"
            >
              Zoom red
            </button>
            <button
              onClick={zoomTo("blue")}
              className="p-3 mx-4 bg-blue-300 rounded"
            >
              Zoom blue
            </button>
            <button
              onClick={zoomTo("green")}
              className="p-3 mx-4 bg-green-300 rounded"
            >
              Zoom green
            </button>
          </div>
          <TransformComponent wrapperClass="zoom-pitch-wrapper">
            <div className="relative overflow-auto w-[300px] h-[300px] border bg-pink-200 border-black m-4">
              <div
                className="absolute top-0 left-0 p-6 bg-red-400 m-7"
                id="red"
              >
                red
              </div>
              <div
                className="absolute p-6 bg-blue-400 top-1/3 left-1/2 m-7"
                id="blue"
              >
                blue
              </div>
              <div
                className="absolute bottom-0 p-6 bg-green-400 left-4/5 m-7"
                id="green"
              >
                green
              </div>
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default ZoomPitch;
