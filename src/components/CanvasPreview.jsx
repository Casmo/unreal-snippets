import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react'
import { OrbitControls } from '@react-three/drei'

export default function CanvasPreview ({children}) {
    const gridRef = useRef();
    
    setTimeout(() => {
        if (gridRef.current) {
            gridRef.current.rotateX(Math.PI / 2); 
        }
    }, 500);

    THREE.Object3D.DEFAULT_UP = new THREE.Vector3( 0, 0, 1);

    return (
        <Canvas flat linear className="opacity-0 animate-[appear_1000ms_linear_500ms_forwards]" camera={{fov: 75, position: [-3, -3, 4]}}>
            <gridHelper ref={gridRef} args={[50, 50, 0xffffff, 0xaaaaaa]} />
            <OrbitControls />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
            {children}
        </Canvas>
    );
}