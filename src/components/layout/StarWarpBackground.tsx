'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function WarpStars() {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => {
        const positions = new Float32Array(8000 * 3);
        for (let i = 0; i < 8000; i++) {
            // Create a long tunnel of stars instead of a sphere
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            const z = -Math.random() * 200; // Deep into the screen
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            // Constant slow forward movement
            // acceleration based on scroll could be passed in props, but for now let's just do infinite tunnel
            // We will move the stars towards the camera (+z)

            // Simpler approach: Rotate slightly and let the user scroll move the camera (handled in parent or via scroll listeners)
            // But for "traveling through space" usually we want particles flowing past.

            // Let's bind speed to scroll if possible, or just have a nice constant warp
            // For a true "scroll = travel" feel, we might want to move the camera.
        }
    });

    // To make it look like "traveling", we can use a shader or just move positions loopingly
    // Here we just render them, we will move camera in the Scene component

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.1}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function CameraController() {
    useFrame((state) => {
        // Basic scroll linking
        const scrollY = window.scrollY;
        // Move camera forward based on scroll
        const targetZ = -(scrollY * 0.05);

        // Smooth lerp
        state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 20 + targetZ, 0.1);

        // Also add some slight rotation/sway based on mouse maybe?
        const time = state.clock.getElapsedTime();
        state.camera.position.x = Math.sin(time * 0.2) * 2;
        state.camera.position.y = Math.cos(time * 0.2) * 2;

        state.camera.lookAt(0, 0, -1000); // Always look down the tunnel
    });
    return null;
}

export default function StarWarpBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#060617] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
                <fog attach="fog" args={['#060617', 5, 80]} />
                <ambientLight intensity={0.5} />
                <WarpStars />
                <CameraController />
            </Canvas>
        </div>
    );
}
