import React, { useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import CanvasPreview from '../components/CanvasPreview';
import VectorPoint from '../components/vector/VectorPoint';

export default function Vector () {

  const [position, setPosition] = useState([0,2,0]);

    return (
        <>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vector</h1>
          <p>
            A Vector is <abbr title="">Data Structure</abbr> containing 3 <abbr title="">Float</abbr>s (X, Y and Z). A Vector is used for pointing to a location or a direction. When pointing to a direction the length of the Vector is always 1, also called a <abbr title="">Normalized Vector</abbr>.
          </p>

          <h2 className="mt-2 text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">Location</h2>
          <div className="flex items-center">
            <CodeMirror value={`FVector Location = FVector(${position[0]*100}.f, ${position[2]*100}.f, ${position[1]*100}.f);`} minHeight='200px' extensions={[cpp()]}  readOnly={true} />
            <CanvasPreview>
              <VectorPoint position={position} />
            </CanvasPreview>
          </div>
        </>
    )
}