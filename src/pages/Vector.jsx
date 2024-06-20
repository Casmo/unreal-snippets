import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { cpp } from '@codemirror/lang-cpp';
import CanvasPreview from '../components/CanvasPreview';
import VectorPoint from '../components/vector/VectorPoint';
import Copy from '../components/utility/Copy';
import { Input } from '@headlessui/react'

export default function Vector () {

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(2);
  const [positionZ, setPositionZ] = useState(3);
  const [position, setPosition] = useState([0,0,0]);

  const [code, setCode] = useState(`FVector Location = FVector(0.f, 0.f, 0.f);`);

  useEffect(() => {
    setPosition([
      positionX,
      positionY,
      positionZ
    ]);
    setCode(`FVector Location = FVector(${positionX}.f, ${positionY}.f, ${positionZ}.f);`);
  }, [positionX, positionY, positionZ]);

    return (
        <>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Vector</h1>
          <p>
            A Vector is <abbr title="A collection with different types of data inside a variable">Data Structure</abbr> containing 3 <abbr title="A number with an (optional) decimal point, e.g. 2,3f">Floats</abbr> (X, Y and Z). A Vector is used for pointing to a location or a direction. When pointing to a direction with the sum length of 1 is called a <abbr title="A direction in 3D where the total of X, Y and Z is 1.">Normalized Vector</abbr>.
          </p>

          <h2 className="mt-2 text-1xl font-bold tracking-tight text-gray-200 sm:text-2xl">Location</h2>
          <div className="flex gap-2 items-stretch h-96">
            <div className="flex-grow">
              <CodeMirror style={{height: "24rem" }} className="flex-grow" theme={dracula} value={code} minHeight='100%' extensions={[cpp()]}  readOnly={true} />
              <div className="flex-none mt-1">
                <Copy text={code} />
              </div>
            </div>
            <div style={{ width: "24rem", height: "24rem" }}>
              <CanvasPreview>
                <VectorPoint position={position} />
              </CanvasPreview>
              <div className="flex items-center gap-1 mt-1">
                <div className="relative rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-red-500 sm:text-sm">X</span>
                  </div>
                  <Input className="w-full bg-black text-gray-200 px-2 py-1 pl-7 rounded-md border-red-700 focus:border-red-500" name="positionX" defaultValue={positionX} onChange={(e) => { setPositionX(e.currentTarget.value);}} type="text" />
                </div>
                <div className="relative rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-green-500 sm:text-sm">Y</span>
                  </div>
                  <Input className="w-full bg-black text-gray-200 px-2 py-1 pl-7 rounded-md border-green-700 focus:border-green-500" name="positionY" defaultValue={positionY} onChange={(e) => { setPositionY(e.currentTarget.value);}} type="text" />
                </div>

                <div className="relative rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-blue-500 sm:text-sm">Z</span>
                  </div>
                  <Input className="w-full bg-black text-gray-200 px-2 py-1 pl-7 rounded-md border-blue-700 focus:border-blue-500" name="positionZ" defaultValue={positionZ} onChange={(e) => { setPositionZ(e.currentTarget.value);}} type="text" />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}