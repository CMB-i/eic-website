"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

type HeroSceneProps = {
  className?: string;
};

export function HeroScene({ className }: HeroSceneProps) {
  return (
    <div className={className} aria-label="3D hero scene">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 3, 6]} intensity={1.1} color={"#fff7d1"} />
        <directionalLight position={[-6, -2, 2]} intensity={0.45} color={"#8da2ff"} />

        <Sparkles
          count={90}
          scale={[8, 5, 8]}
          size={2.2}
          speed={0.25}
          opacity={0.5}
          color={"#ffdb66"}
        />

        <HeroCore />
      </Canvas>
    </div>
  );
}

function HeroCore() {
  const group = React.useRef<THREE.Group>(null);
  const orb = React.useRef<THREE.Mesh>(null);

  const orbGeo = React.useMemo(() => new THREE.IcosahedronGeometry(1.55, 2), []);
  const blobGeoA = React.useMemo(() => new THREE.SphereGeometry(0.45, 20, 16), []);
  const blobGeoB = React.useMemo(() => new THREE.SphereGeometry(0.32, 18, 14), []);

  const mat = React.useMemo(() => {
    const m = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#ffffff"),
      roughness: 0.12,
      metalness: 0.15,
      transmission: 0.92,
      transparent: true,
      opacity: 0.55,
      thickness: 0.8,
      ior: 1.35,
    });
    return m;
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    // Gentle pointer-driven parallax (GPU-friendly transforms only).
    const px = state.pointer.x;
    const py = state.pointer.y;

    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, px * 0.35, 0.06);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -py * 0.25, 0.06);
    g.position.y = THREE.MathUtils.lerp(g.position.y, py * 0.18, 0.06);

    if (orb.current) orb.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.35}>
        <mesh ref={orb} geometry={orbGeo} material={mat}>
          <Edges linewidth={1} threshold={12} color={"#ffdb66"} />
        </mesh>
      </Float>

      <Float speed={1.35} rotationIntensity={0.6} floatIntensity={0.55}>
        <mesh position={[2.0, 0.3, -0.2]} geometry={blobGeoA}>
          <meshStandardMaterial
            color={"#ffffff"}
            metalness={0.1}
            roughness={0.25}
            transparent
            opacity={0.22}
          />
          <Edges linewidth={1} threshold={12} color={"#8da2ff"} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-1.9, -0.75, 0.2]} geometry={blobGeoB}>
          <meshStandardMaterial
            color={"#ffdb66"}
            metalness={0.0}
            roughness={0.35}
            transparent
            opacity={0.14}
          />
          <Edges linewidth={1} threshold={12} color={"#ffdb66"} />
        </mesh>
      </Float>
    </group>
  );
}

