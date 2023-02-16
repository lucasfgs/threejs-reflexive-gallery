import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Gallery from "./Gallery";
import Character from "./Character";
import Ground from "./Ground";
import Intro from "./Intro";

export default function App() {
  const { scene } = useGLTF("/low-poly-women.glb");

  const {
    enableDamping,
    enableZoom,
    dampingFactor,
    autoRotate,
    autoRotateSpeed,
  } = useControls("Orbit Controls", {
    enableDamping: true,
    enableZoom: false,
    dampingFactor: { value: 0.01, min: 0.001, max: 0.5 },
    autoRotate: true,
    autoRotateSpeed: { value: -1, min: -100, max: 100 },
  });

  const { color } = useControls("Fog", {
    color: "#000000",
  });

  return (
    <Canvas
      gl={{ alpha: false }}
      dpr={[1, 2]}
      camera={{ position: [0, 300, 250], fov: 45 }}
    >
      <color attach="background" args={[color]} />
      <fog attach="fog" args={[color, 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, 0, 0]}>
          {/* <Gallery position={[0, 0.01, 0]} /> */}
          <Gallery />
          <Character scene={scene.clone()} position={[-4, 0, 2]} />
          <Character scene={scene.clone()} position={[-2, 0, 4.5]} />
          <Character scene={scene.clone()} position={[2, 0, 5]} />
          <Character scene={scene.clone()} position={[4, 0, 2]} />
          <Character scene={scene.clone()} position={[3, 0, -4]} />
          <Character scene={scene.clone()} position={[-3, 0, -4]} />

          <Ground />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro />
      </Suspense>
      <OrbitControls
        enableDamping={enableDamping}
        enableZoom={enableZoom}
        dampingFactor={dampingFactor}
        autoRotate={autoRotate}
        autoRotateSpeed={autoRotateSpeed}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 - 0.01}
      />
      <Stats />
    </Canvas>
  );
}

// Spawn a bunch of characters
// function Characters(props) {
//   const { scene } = useGLTF("/low-poly-women.glb");
//   const [characters, setCharacters] = useState([]);
//   const { count } = useControls("Characters", {
//     count: { value: 100, min: 0, max: 1000 },
//   });
//   useLayoutEffect(() => {
//     const newCharacters = [];
//     scene.lookAt(new Vector3(-10, -20, -10));
//     for (let i = 0; i < count; i++) {
//       newCharacters.push(
//         <Character
//           key={i}
//           object={scene.clone()}
//           position={[Math.random() * 10 - 5, 0.01, Math.random() * 10 - 5]}
//           scale={[0.03, 0.03, 0.03]}
//         />
//       );
//     }
//     setCharacters(newCharacters);
//   }, [count, scene]);

//   useEffect(() => {
//     scene.lookAt(new Vector3(0, 0, 0));
//   }, [scene]);

//   return characters;
// }
