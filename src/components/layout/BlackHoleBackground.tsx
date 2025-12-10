'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

function BlackHoleCore() {
    return (
        <mesh>
            <sphereGeometry args={[2, 64, 64]} />
            <meshBasicMaterial color="#000000" />
        </mesh>
    );
}

function AccretionDisk() {
    const ref = useRef<THREE.Points>(null);

    // Create a flat ring of particles
    const particles = useMemo(() => {
        const count = 15000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const colorInside = new THREE.Color('#FFB86B'); // hot orange
        const colorOutside = new THREE.Color('#A78BFA'); // cool purple

        for (let i = 0; i < count; i++) {
            // Radius from 2.5 to 8
            const r = 2.5 + Math.random() * 7;
            const theta = Math.random() * Math.PI * 2;

            // Flatten slightly to make it a disk
            const x = r * Math.cos(theta);
            const z = r * Math.sin(theta); // using Z for flat plane if we rotate the group
            const y = (Math.random() - 0.5) * 0.2 * (r - 2); // thicker at edges

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Color mix based on radius
            const mix = (r - 2.5) / 7;
            const finalColor = colorInside.clone().lerp(colorOutside, mix);

            colors[i * 3] = finalColor.r;
            colors[i * 3 + 1] = finalColor.g;
            colors[i * 3 + 2] = finalColor.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Spin the disk
            ref.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group rotation={[0.4, 0, 0]}> {/* Tilt the disk to view it better */}
            <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

// Helper to get scroll velocity - simpler than useVelocity from framer-motion inside canvas
// We'll trust a ref passed from parent or simple global tracking
function BackgroundStars() {
    const ref = useRef<THREE.Points>(null);
    const prevScroll = useRef(0);
    const velocity = useRef(0);

    const [sphere] = useState(() => {
        const positions = new Float32Array(8000 * 3);
        for (let i = 0; i < 8000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 400; // Wider field
            positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 400;
        }
        return positions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            // Calculate pseudo-velocity
            const scrollY = window.scrollY;
            const deltaY = scrollY - prevScroll.current;
            prevScroll.current = scrollY;

            // Smooth velocity
            velocity.current = THREE.MathUtils.lerp(velocity.current, deltaY, 0.1);

            // Warp effect: Stretch Z-scale based on velocity
            // Normal scale = 1. High speed = 20+
            const stretch = Math.max(1, Math.abs(velocity.current) * 2);
            ref.current.scale.z = stretch;

            // Also rotate faster when moving
            ref.current.rotation.z += delta * 0.05 + (velocity.current * 0.001);
        }
    });

    return (
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.15}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

function SceneController() {
    useFrame((state) => {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const smoothScroll = Math.min(scrollY, maxScroll);

        // Flying INTO the black hole
        // Start far away (z=20), end close/through (z=2)
        const progress = scrollY * 0.001; // Slower progress

        // Spiral movement
        const angle = progress * 0.5;
        const radius = Math.max(2, 14 - progress * 2); // Start further out (14)

        state.camera.position.x = Math.sin(angle) * radius;
        state.camera.position.z = Math.cos(angle) * radius; // Spiral in
        state.camera.position.y = Math.max(-2, 5 - progress); // Drop down slightly

        // Add some "shake" when close to event horizon?
        if (radius < 4) {
            state.camera.position.x += (Math.random() - 0.5) * 0.05;
            state.camera.position.y += (Math.random() - 0.5) * 0.05;
        }

        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

export default function BlackHoleBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#000000] pointer-events-none">
            <Canvas camera={{ position: [0, 5, 15], fov: 60 }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <BlackHoleCore />
                <AccretionDisk />
                <BackgroundStars />
                <SceneController />

                {/* Visual effects like Bloom would be great here but keeping it simple for now */}
            </Canvas>
        </div>
    );
}
