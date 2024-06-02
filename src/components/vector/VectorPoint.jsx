import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function VectorPoint (props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => ({}))
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
        {...props}
        ref={meshRef}>
        <sphereGeometry />
        <meshLambertMaterial color={'white'} />
        </mesh>
    );
}
