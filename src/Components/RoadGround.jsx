
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import {proxy, useSnapshot} from "valtio"
import Crane from "./Crane";
import Buildings from "./Buildings";
import { useFrame } from '@react-three/fiber';

const state = proxy({
  current: null,
  craneVis: {
    Lot1: false,
    Lot2: false,
    Lot3: false,
    Lot4: false,
    Lot5: false,
    Lot6: false,
    Lot7: false,
    Lot8: false,
    Lot9: false,
    Lot10: false,
  },
  buildingVis: {
    building1: true,
    building2: true,
    building3: true,
  },
  buildingPos: {
    building1: [-4.5, -2, 5],
    building2: [-4, 0, 7],
    building3: [-2.5, -2, 8.01],
  },
  lots: {
    Lot1: {
      craneVis: false,
    },
    Lot2: {
      craneVis: false,
    },
    Lot3: {
      craneVis: false,
    },
    Lot4: {
      craneVis: false,
      building1Vis: false,
      building2Vis: false,
      building3Vis: false,
      building1Pos: [-4.5, -2, 5],
      building2Pos: [-4, 0, 7],
      building3Pos: [-2.5, -2, 8.01],
    },
  }
});

function RoadGround(props) {
  const { materials } = useGLTF('RoadGroundDraco.glb')
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const snap = useSnapshot(state);

  //useFrame(() => {
  if(snap.current != null)
    {
      if(snap.lots.current.building2Pos[1] > -3 && snap.craneVis.Lot4)
      {
        state.buildingPos.building2[1] -= .0002;
      }
      if(snap.buildingPos.building2[1] < -2 && snap.buildingPos.building1[1] < 1)
      {
        state.buildingPos.building1[1] += .0002;
        state.buildingPos.building3[1] += .0002;
      }
    }
  })
  {/** 
  useFrame(() => {
    if(snap.current != null)
    {
      if(snap.buildingPos.building2[1] > -3 && snap.craneVis.Lot4)
      {
        state.buildingPos.building2[1] -= .0002;
      }
      if(snap.buildingPos.building2[1] < -2 && snap.buildingPos.building1[1] < 1)
      {
        state.buildingPos.building1[1] += .0002;
        state.buildingPos.building3[1] += .0002;
      }
    }
  })
  */}

  const craneVisiblity = (event) => 
  {
    click(!clicked); 
    //update();
    state.current = props.current;
    console.log(snap.current)
    state.craneVis.[props.current] = !state.craneVis.[props.current]
    //props.setCraneVisible = !state.craneVis.Lot1
    //console.log("set cran vis: " + props.setCraneVisible)
    //(prevCheck) => !prevCheck
  }

  return (
    <>
      <mesh 
        geometry={props.geometry}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)} 
        onClick={craneVisiblity}
        material={clicked ? materials.Railing : hovered ? materials['Road Lines'] : materials.Grass} 
      />
    </>
  )
}

export default function Test({...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('RoadGroundDraco.glb')
  const snap = useSnapshot(state);
  const ref = useRef();
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Cube008.geometry} material={materials.Railing} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['Road Lines']} />
        <RoadGround geometry={nodes.Lot1.geometry} setCraneVisible={state.craneVis.Lot1} current={"Lot1"} />
        <RoadGround geometry={nodes.Lot2.geometry} setCraneVisible={state.craneVis.Lot2} current={"Lot2"} />
        <RoadGround geometry={nodes.Lot3.geometry} setCraneVisible={state.craneVis.Lot3} current={"Lot3"}/>
        <RoadGround geometry={nodes.Lot4.geometry} setCraneVisible={state.craneVis.Lot4} current={"Lot4"}/>
        <RoadGround geometry={nodes.Lot5.geometry} setCraneVisible={state.craneVis.Lot5} current={"Lot5"}/>
        <RoadGround geometry={nodes.Lot6.geometry} setCraneVisible={state.craneVis.Lot6} current={"Lot6"}/>
        <RoadGround geometry={nodes.Lot7.geometry} setCraneVisible={state.craneVis.Lot7} current={"Lot7"}/>
        <RoadGround geometry={nodes.Lot8.geometry} setCraneVisible={state.craneVis.Lot8} current={"Lot8"}/>
        <RoadGround geometry={nodes.Lot9.geometry} setCraneVisible={state.craneVis.Lot9} current={"Lot9"}/>
        <RoadGround geometry={nodes.Lot10.geometry} setCraneVisible={state.craneVis.Lot10} current={"Lot10"}/>
      </group>
      <group>
        {/**lot1 */}
        <Crane visible={snap.craneVis.Lot1 ? true : false} scale={[0.01, 0.01, 0.01]} position={[-.5,0,.9]} rotation={[0,180,0]}/>
        {/**lot2 */}
        <Crane visible={snap.craneVis.Lot2} scale={[0.01, 0.01, 0.01]} position={[-.5,0,.3]} rotation={[0,160,0]}/>
        {/**lot3 */}
        <Crane visible={snap.craneVis.Lot3} scale={[0.01, 0.01, 0.01]} position={[-.1,0,.9]} rotation={[0,120,0]}/>
        {/**lot4 */}
        <Crane visible={snap.craneVis.Lot4} scale={[0.01, 0.01, 0.01]} position={[-.1,0,.3]} rotation={[0,182,0]}/>
        {/**lot5 */}
        <Crane visible={snap.craneVis.Lot5} scale={[0.01, 0.01, 0.01]} position={[-.4,0,-.2]} rotation={[0,170,0]}/>
        {/**lot6 */}
        <Crane visible={snap.craneVis.Lot6} scale={[0.01, 0.01, 0.01]} position={[.3,0,-.2]} rotation={[0,180,0]}/>
        {/**lot7 */}
        <Crane visible={snap.craneVis.Lot7} scale={[0.01, 0.01, 0.01]} position={[.3,0, -.6]} rotation={[0,180,0]}/>
        {/**lot8 */}
        <Crane visible={snap.craneVis.Lot8} scale={[0.01, 0.01, 0.01]} position={[.6,0,-.2]} rotation={[0,200,0]}/>
        {/**lot9 */}
        <Crane visible={snap.craneVis.Lot9} scale={[0.01, 0.01, 0.01]} position={[.6,0,-.6]} rotation={[0,140,0]}/>
        {/**lot10 */}
        <Crane visible={snap.craneVis.Lot10} scale={[0.01, 0.01, 0.01]} position={[.75,0,-.6]} rotation={[0,180,0]}/>
        {/**lot11 */}
        <Crane visible={snap.craneVis.Lot10} scale={[0.01, 0.01, 0.01]} position={[.3,0,-.2]} rotation={[0,180,0]}/>
      </group>
      <group>
        <Buildings ref={ref} building1Pos={snap.buildingPos.building1} building2Pos={snap.buildingPos.building2} building3Pos={snap.buildingPos.building3} building1Vis={snap.buildingVis.building1} building2Vis={snap.buildingVis.building2} building3Vis={snap.buildingVis.building3} scale={[0.04, 0.04, 0.04]} />
      </group>
    </>
  )
}

useGLTF.preload('/RoadGroundDraco.glb')