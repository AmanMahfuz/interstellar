'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';


function StarField(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => {
        const positions = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.2 + Math.random() * 0.8; // Radius between 1.2 and 2.0 (normalized)

            // Convert to cartesian for distribution on sphere surface (or volume)
            // Actually, let's just use random points in a box for typical starfield or spherical distribution
            // Let's do a spherical volume shell
            // x = r * sin(phi) * cos(theta)
            // y = r * sin(phi) * sin(theta)
            // z = r * cos(phi)
            // But let's scale it up 
            const R = 15 + Math.random() * 15;
            positions[i * 3] = R * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = R * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = R * Math.cos(phi);
        }
        return positions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30;
            ref.current.rotation.y -= delta / 40;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function Planet() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[2.5, 64, 64]} position={[2, 0, 0]}>
                {/* Using a simple material for now, normally would modify to use texture if available */}
                <MeshDistortMaterial
                    color="#0F1724"
                    emissive="#060617" // dark
                    emissiveIntensity={0.5}
                    roughness={0.5}
                    metalness={0.8}
                    distort={0.1} // small distortion for organic feel
                    speed={1}
                />
                {/* Wireframe overlay or similar for 'tech' feel */}
            </Sphere>
            {/* Ring or orbit elements */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[2, 0, 0]}>
                <torusGeometry args={[3.5, 0.02, 16, 100]} />
                <meshBasicMaterial color="#6EE7F7" transparent opacity={0.3} />
            </mesh>
            <mesh rotation={[Math.PI / 1.8, 0, 0]} position={[2, 0, 0]}>
                <torusGeometry args={[4.2, 0.01, 16, 100]} />
                <meshBasicMaterial color="#A78BFA" transparent opacity={0.2} />
            </mesh>
        </Float>
    )
}

function FloatingCard({ position, color, delay }: { position: [number, number, number], color: string, delay: number }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
            <mesh position={position}>
                <boxGeometry args={[1.5, 1, 0.1]} />
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.1}
                    metalness={0.8}
                    roughness={0.2}
                />
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(1.5, 1, 0.1)]} />
                    <lineBasicMaterial color={color} transparent opacity={0.3} />
                </lineSegments>
            </mesh>
        </Float>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <fog attach="fog" args={['#060617', 5, 20]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#6EE7F7" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#A78BFA" />

                <StarField />
                <Planet />

                <FloatingCard position={[4, 2, 2]} color="#6EE7F7" delay={0} />
                <FloatingCard position={[0, -3, 3]} color="#A78BFA" delay={2} />
                <FloatingCard position={[5, -2, -2]} color="#FFB86B" delay={4} />

            </Canvas>
        </div>
    );
}
