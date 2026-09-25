import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function DiaryModel({ color = "#C05A3E" }) {
  const diary = useRef();

  useFrame((state) => {
    if (!diary.current) return;
    diary.current.rotation.y = state.clock.elapsedTime * 0.35;
    diary.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <group ref={diary} rotation={[0.15, -0.3, 0]} scale={1.15}>
      
      {/* Main Leather Cover */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.8, 0.35, 5]} />
        <meshStandardMaterial
          color={color}
          roughness={0.42}
          metalness={0.08}
        />
      </mesh>

      {/* Pages Block (Warm Parchment Beige) */}
      <mesh position={[0, 0.23, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.55, 0.18, 4.75]} />
        <meshStandardMaterial
          color="#F6F1E7"
          roughness={0.88}
        />
      </mesh>

      {/* Spine Crease / Gutter line */}
      <mesh position={[0, 0.34, 0]}>
        <boxGeometry args={[0.035, 0.025, 4.5]} />
        <meshStandardMaterial color="#C8BFA9" />
      </mesh>

      {/* Silk Bookmark Ribbon (Dusty Blue) */}
      <mesh position={[1.2, 0.42, 0]}>
        <boxGeometry args={[0.12, 0.04, 2.4]} />
        <meshStandardMaterial color="#587989" roughness={0.3} />
      </mesh>

      {/* Cover Gold Trim Accent */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[3.65, 0.02, 4.85]} />
        <meshStandardMaterial
          color="#FFFFFF"
          transparent
          opacity={0.08}
        />
      </mesh>

    </group>
  );
}

export default function Diary3DViewer({ product }) {
  // Use product specific color or default to terracotta
  const isBlue = parseInt(product?.number || "1", 10) % 2 === 0;
  const color = product?.color || (isBlue ? "#587989" : "#C05A3E");

  return (
    <div className="h-[400px] w-full sm:h-[480px]">
      <Canvas
        shadows
        camera={{
          position: [0, 1.8, 8],
          fov: 42,
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.8}
          castShadow
        />
        <pointLight
          position={[-4, 3, 3]}
          intensity={2}
          color="#C05A3E"
        />
        <pointLight
          position={[4, -2, 2]}
          intensity={1.5}
          color="#587989"
        />

        <Environment preset="studio" />

        <Float
          speed={1.2}
          rotationIntensity={0.2}
          floatIntensity={0.25}
        >
          <DiaryModel color={color} />
        </Float>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={11}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}