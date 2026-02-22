import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface CyberDroneProps {
    color?: string;
    speed?: number;
    showHUDLines?: boolean;
}

export const CyberDrone = ({ color = "#FF2222", speed = 1, showHUDLines = false }: CyberDroneProps) => {
    const group = useRef<THREE.Group>(null);
    const rotors = useRef<(THREE.Group | null)[]>([]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;

        if (group.current) {
            // Heavier, slower movement for a "massive" feel
            group.current.position.y = Math.sin(t * 0.8) * 0.15;
            group.current.rotation.x = Math.sin(t * 0.5) * 0.1;
            group.current.rotation.z = Math.cos(t * 0.7) * 0.08;
            group.current.rotation.y = Math.sin(t * 0.3) * 0.15;
        }

        rotors.current.forEach((rotor, i) => {
            if (rotor) {
                // Rotors spin fast but feel heavy
                rotor.rotation.y += 3.0 * (i % 2 === 0 ? 1 : -1) * speed;
            }
        });
    });

    const material = useMemo(() => new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
    }), [color]);

    const solidMaterial = useMemo(() => new THREE.MeshBasicMaterial({
        color: "#050505",
        transparent: true,
        opacity: 0.9,
    }), []);

    const hudLineMaterial = useMemo(() => new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.8,
    }), [color]);

    return (
        <group ref={group}>
            {/* Main Central Hull - Massive & Angular */}
            <mesh material={solidMaterial} position={[0, 0.4, 0]}>
                <boxGeometry args={[1.2, 0.8, 1.2]} />
            </mesh>
            <mesh material={material} position={[0, 0.4, 0]}>
                <boxGeometry args={[1.25, 0.85, 1.25]} />
            </mesh>

            {/* Brutalist Arm Pillars */}
            {[Math.PI / 4, (3 * Math.PI) / 4, (-3 * Math.PI) / 4, -Math.PI / 4].map((angle, i) => (
                <group key={i} rotation={[0, angle, 0]}>
                    {/* Primary Support Beam - Thick & Rectangular */}
                    <mesh material={solidMaterial} position={[1.2, 0.2, 0]}>
                        <boxGeometry args={[1.6, 0.4, 0.4]} />
                    </mesh>
                    <mesh material={material} position={[1.2, 0.2, 0]}>
                        <boxGeometry args={[1.62, 0.42, 0.42]} />
                    </mesh>

                    {/* Industrial Motor Housing - Boxy & Robust */}
                    <group position={[2.0, 0.4, 0]}>
                        <mesh material={solidMaterial}>
                            <boxGeometry args={[0.6, 0.6, 0.6]} />
                        </mesh>
                        <mesh material={material}>
                            <boxGeometry args={[0.62, 0.62, 0.62]} />
                        </mesh>

                        {/* Heavy Rotor Assembly */}
                        <group ref={(el) => { rotors.current[i] = el; }}>
                            <mesh material={material} position={[0, 0.1, 0]}>
                                <boxGeometry args={[2.2, 0.05, 0.2]} />
                            </mesh>
                            <mesh material={material} position={[0, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
                                <boxGeometry args={[2.2, 0.05, 0.2]} />
                            </mesh>
                        </group>
                    </group>
                </group>
            ))}

            {/* Heavy Landing Skids */}
            {[0.8, -0.8].map((x, i) => (
                <group key={i} position={[x, -0.6, 0]}>
                    <mesh material={solidMaterial}>
                        <boxGeometry args={[0.2, 1.2, 0.2]} />
                    </mesh>
                    <mesh material={material}>
                        <boxGeometry args={[0.22, 1.22, 0.22]} />
                    </mesh>
                    <mesh material={solidMaterial} position={[0, -0.6, 0]}>
                        <boxGeometry args={[0.3, 0.15, 2.5]} />
                    </mesh>
                    <mesh material={material} position={[0, -0.6, 0]}>
                        <boxGeometry args={[0.32, 0.17, 2.52]} />
                    </mesh>
                </group>
            ))}

            {/* Tactical Sensor Array - Underside */}
            <group position={[0, -0.1, 0.8]}>
                <mesh material={solidMaterial}>
                    <boxGeometry args={[0.6, 0.6, 0.6]} />
                </mesh>
                <mesh material={material}>
                    <boxGeometry args={[0.62, 0.62, 0.62]} />
                </mesh>
                <pointLight position={[0, -0.2, 0.4]} color={color} intensity={5} distance={2} />
            </group>

            {/* Brutalist HUD Lines (if enabled) */}
            {showHUDLines && (
                <group position={[0, -2, 0.8]}>
                    <mesh material={hudLineMaterial} position={[0, 0, 0]}>
                        <boxGeometry args={[4, 0.01, 0.01]} />
                    </mesh>
                    <mesh material={hudLineMaterial} position={[0, -0.2, 0]}>
                        <boxGeometry args={[2, 0.01, 0.01]} />
                    </mesh>
                </group>
            )}
        </group>
    );
};

export const DroneCanvas = ({ showHUDLines = false, scale = 0.5, position = [0, -0.5, 0] as [number, number, number] }) => {
    return (
        <div className="w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 1, 10], fov: 32 }} dpr={[1, 2]}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#FF0000" />
                <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
                    <group scale={scale} position={position}>
                        <CyberDrone showHUDLines={showHUDLines} />
                    </group>
                </Float>
            </Canvas>
        </div>
    );
};
