import { MeshReflectorMaterial } from "@react-three/drei";
import { useControls } from "leva";

export default function Ground() {
  const {
    color,
    mirror,
    resolution,
    depthScale,
    minDepthThreshold,
    maxDepthThreshold,
    roughness,
    metalness,
  } = useControls("Ground", {
    color: "#ffffff",
    mirror: { value: 0.5, min: 0, max: 1 },
    resolution: { value: 1024, min: 0, max: 2048 },
    depthScale: { value: 1, min: 0.01, max: 1 },
    minDepthThreshold: { value: 0.4, min: 0.01, max: 1 },
    maxDepthThreshold: { value: 1, min: 0.01, max: 1 },
    roughness: { value: 1, min: 0.01, max: 1 },
    metalness: { value: 0.7, min: 0.01, max: 1 },
  });
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        color={color}
        blur={[400, 100]}
        mirror={mirror}
        resolution={resolution}
        depthScale={depthScale}
        minDepthThreshold={minDepthThreshold}
        maxDepthThreshold={maxDepthThreshold}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  );
}
