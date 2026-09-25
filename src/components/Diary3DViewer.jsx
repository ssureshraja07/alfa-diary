import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function DiaryModel({ color = "#8f4635" }) {
  const diary = useRef();

  useFrame((state) => {
    if (!diary.current) return;

    diary.current.rotation.y =
      state.clock.elapsedTime * 0.35;

    diary.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
  });

  return (
    <group
      ref={diary}
      rotation={[0.15, -0.3, 0]}
      scale={1.15}
    >

      {/* Main cover */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.8, 0.35, 5]} />

        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.05}
        />
      </mesh>


      {/* Pages */}
      <mesh
        position={[0, 0.23, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[3.55, 0.18, 4.75]} />

        <meshStandardMaterial
          color="#f5f0df"
          roughness={0.9}
        />
      </mesh>


      {/* Page center */}
      <mesh position={[0, 0.34, 0]}>
        <boxGeometry args={[0.035, 0.025, 4.5]} />

        <meshStandardMaterial
          color="#c8bfa9"
        />
      </mesh>


      {/* Bookmark */}
      <mesh position={[1.2, 0.42, 0]}>
        <boxGeometry args={[0.12, 0.04, 2.4]} />

        <meshStandardMaterial
          color="#d99078"
        />
      </mesh>


      {/* Cover border */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[3.65, 0.02, 4.85]} />

        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.05}
        />
      </mesh>

    </group>
  );
}


export default function Diary3DViewer({ product }) {

  const color =
    product?.color || "#8f4635";

  return (
    <div className="h-[420px] w-full sm:h-[500px]">

      <Canvas
        shadows
        camera={{
          position: [0, 1.5, 8],
          fov: 42,
        }}
      >

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={3}
          castShadow
        />

        <pointLight
          position={[-4, 3, 3]}
          intensity={2}
          color="#d99078"
        />

        <Environment preset="studio" />

        <Float
          speed={1}
          rotationIntensity={0.15}
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