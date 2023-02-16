import { useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export default function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  const camera = useThree((state) => state.camera);

  return useFrame((state) => {
    if (state.clock.elapsedTime > 2) return;
    camera.position.lerp(vec.set(5, 5, 10), 0.05);
    camera.lookAt(0, 0, 0);
  });
}
