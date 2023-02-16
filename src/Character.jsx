import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function Character({ scene, ...props }) {
  useFrame(() => {
    scene.lookAt(new Vector3(0, 0, 0));
  });

  return <primitive object={scene} scale={[0.03, 0.03, 0.03]} {...props} />;
}
