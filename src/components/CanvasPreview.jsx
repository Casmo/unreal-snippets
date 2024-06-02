import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function CanvasPreview ({children}) {
    return (
        <Canvas camera={{fov: 90}}>
            {/* <axesHelper args={[2]} /> */}
            <gridHelper args={[50, 50]} />
            <OrbitControls />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
            {children}
        </Canvas>
    );
}