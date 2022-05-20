/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("3buildingsDraco.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        rotation={[0, 14.1, 0]}
        visible={props.building1Vis}
        position={props.building1Pos}
        scale={[9.9, 3.3, 9.9]}
      >
        <mesh
          geometry={nodes.Cube038.geometry}
          material={materials["Building.007"]}
        />
        <mesh
          geometry={nodes.Cube038_1.geometry}
          material={materials["window.010"]}
        />
        <mesh
          geometry={nodes.Cube038_2.geometry}
          material={materials["Railing.009"]}
        />
        <mesh
          geometry={nodes.Cube038_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        rotation={[0, 14.1, 0]}
        visible={props.building2Vis}
        position={props.building2Pos}
        scale={3.2}
      >
        <mesh
          geometry={nodes.Plane192.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Plane192_1.geometry}
          material={materials["window.011"]}
        />
        <mesh
          geometry={nodes.Plane192_2.geometry}
          material={materials["Railing.010"]}
        />
        <mesh
          geometry={nodes.Plane192_3.geometry}
          material={materials["Building.008"]}
        />
        <mesh
          geometry={nodes.Plane192_4.geometry}
          material={materials["Window Shutters.004"]}
        />
      </group>
      <group
        rotation={[0, 14.1, 0]}
        visible={props.building3Vis}
        position={props.building3Pos}
        scale={3.3}
      >
        <mesh
          geometry={nodes.Cube040.geometry}
          material={materials["Building.010"]}
        />
        <mesh
          geometry={nodes.Cube040_1.geometry}
          material={materials["Railing.012"]}
        />
        <mesh
          geometry={nodes.Cube040_2.geometry}
          material={materials["Shirt.003"]}
        />
        <mesh
          geometry={nodes.Cube040_3.geometry}
          material={materials["Post Office Border.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3buildingsDraco.glb");