"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function HeartMesh() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Heartbeat animation
    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();
            // Create heartbeat effect
            const scale = 1 + Math.sin(time * 2.5) * 0.1 + Math.sin(time * 5) * 0.05;
            meshRef.current.scale.set(scale, scale, scale);

            // Gentle rotation
            meshRef.current.rotation.y = time * 0.2;
        }
    });

    // Create heart shape geometry
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, 0);
    heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
    heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
    heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
    heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);

    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 0.1,
        bevelThickness: 0.1,
    };

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <extrudeGeometry args={[heartShape, extrudeSettings]} />
            <meshStandardMaterial
                color="#EC4899"
                metalness={0.3}
                roughness={0.4}
                emissive="#EC4899"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
}

export function Heart3D() {
    return (
        <div className="w-full h-64 md:h-80">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <HeartMesh />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                />
            </Canvas>
        </div>
    );
}
