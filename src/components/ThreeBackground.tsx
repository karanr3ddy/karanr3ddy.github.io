import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

// Theme-aware color palettes
const lightThemeColors = [
  "#1e293b", // slate-800
  "#334155", // slate-700
  "#475569", // slate-600
  "#64748b", // slate-500
];

const darkThemeColors = [
  "#6366f1", // indigo-500
  "#8b5cf6", // violet-500
  "#a855f7", // purple-500
  "#7c3aed", // violet-600
];

const FloatingShape = ({ 
  position, 
  geometry, 
  colorIndex,
  speed = 1,
  scrollY,
  isDark
}: { 
  position: [number, number, number];
  geometry: "box" | "octahedron" | "torus" | "icosahedron";
  colorIndex: number;
  speed?: number;
  scrollY: number;
  isDark: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const colors = isDark ? darkThemeColors : lightThemeColors;
  const color = colors[colorIndex % colors.length];
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Scroll-based rotation
    meshRef.current.rotation.x = scrollY * 0.001 * speed;
    meshRef.current.rotation.y = scrollY * 0.0015 * speed + state.clock.elapsedTime * 0.1;
    
    // Scroll-based vertical movement
    meshRef.current.position.y = position[1] - scrollY * 0.001 * speed;
  });

  const geometryComponent = useMemo(() => {
    switch (geometry) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.8]} />;
      case "torus":
        return <torusGeometry args={[0.6, 0.25, 16, 32]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[0.7]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [geometry]);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {geometryComponent}
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={isDark ? 0.6 : 0.4}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

const Scene = ({ scrollY, isDark }: { scrollY: number; isDark: boolean }) => {
  const shapes = useMemo(() => [
    { position: [-4, 2, -5] as [number, number, number], geometry: "octahedron" as const, colorIndex: 0, speed: 1.2 },
    { position: [4, 1, -6] as [number, number, number], geometry: "box" as const, colorIndex: 1, speed: 0.8 },
    { position: [-3, -2, -4] as [number, number, number], geometry: "torus" as const, colorIndex: 2, speed: 1.5 },
    { position: [3, -1, -5] as [number, number, number], geometry: "icosahedron" as const, colorIndex: 3, speed: 1.0 },
    { position: [0, 3, -7] as [number, number, number], geometry: "octahedron" as const, colorIndex: 0, speed: 0.6 },
    { position: [-5, 0, -8] as [number, number, number], geometry: "box" as const, colorIndex: 1, speed: 1.3 },
    { position: [5, -3, -6] as [number, number, number], geometry: "torus" as const, colorIndex: 2, speed: 0.9 },
    { position: [1, -4, -5] as [number, number, number], geometry: "icosahedron" as const, colorIndex: 3, speed: 1.1 },
  ], []);

  return (
    <>
      <ambientLight intensity={isDark ? 0.4 : 0.6} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.8 : 1.0} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color={isDark ? "#8b5cf6" : "#475569"} />
      
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          geometry={shape.geometry}
          colorIndex={shape.colorIndex}
          speed={shape.speed}
          scrollY={scrollY}
          isDark={isDark}
        />
      ))}
    </>
  );
};

const ThreeBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Scene scrollY={scrollY} isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
