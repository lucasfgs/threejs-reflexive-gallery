import React, { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Gallery(props) {
  const { nodes, materials } = useGLTF("/gallery.glb");

  const [videos] = useState(() => {
    const videos = [];
    for (let i = 1; i <= 5; i++) {
      videos.push(
        Object.assign(document.createElement("video"), {
          src: `/video${i}.mp4`,
          crossOrigin: "Anonymous",
          loop: true,
          muted: true,
        })
      );
    }
    return videos;
  });

  useLayoutEffect(() => {
    videos.forEach((video) => void video.play());
  }, [videos]);

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.4, 0]}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Video2}>
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}>
            <videoTexture
              attach="map"
              args={[videos[0]]}
              encoding={THREE.sRGBEncoding}
              flipY={false}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Video3}>
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}>
            <videoTexture
              attach="map"
              args={[videos[1]]}
              encoding={THREE.sRGBEncoding}
              flipY={false}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh geometry={nodes.Cylinder_3.geometry} material={materials.Video4}>
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}>
            <videoTexture
              attach="map"
              args={[videos[2]]}
              encoding={THREE.sRGBEncoding}
              flipY={false}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh geometry={nodes.Cylinder_4.geometry} material={materials.Video5}>
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}>
            <videoTexture
              attach="map"
              args={[videos[3]]}
              encoding={THREE.sRGBEncoding}
              flipY={false}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh geometry={nodes.Cylinder_5.geometry} material={materials.Video1}>
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}>
            <videoTexture
              attach="map"
              args={[videos[4]]}
              encoding={THREE.sRGBEncoding}
              flipY={false}
            />
          </meshBasicMaterial>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/gallery.glb");
