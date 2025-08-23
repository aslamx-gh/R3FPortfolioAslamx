"use client";
import { Center, useGLTF } from "@react-three/drei";
import { RotatePlanet } from "./Animations";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import React, { useMemo } from "react";

const ResetObj = (modelPath) => {
  const { scene } = useGLTF(modelPath);
  return useMemo(() => {
    if (!scene) return null;
    const cloned = clone(scene);
    cloned.position.set(0, 0, 0);
    cloned.scale.set(1, 1, 1);
    cloned.rotation.set(0, 0, 0);
    return cloned;
  }, [scene]);
}

export function PlanetMercury() {
    const clonedScene = ResetObj("/models/planet_mercury.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={0.00019} position={[5, 0, 0]}>
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        />
          <primitive object={clonedScene}/>
     </group>
  )
}

export function PlanetVenus() {
  const clonedScene = ResetObj("/models/planet_venus.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={1.75} position={[7.5, -1.75, 0]}>
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        castShadow
        />
          <primitive object={clonedScene}/>
     </group>
  )
}

export function PlanetEarth() {
  const clonedScene = ResetObj("/models/planet_earth.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={0.0035} position={[19, -0.5, 0]}>
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        castShadow
        />
          <primitive object={clonedScene}/>
     </group>
  )
}

export function PlanetMars() {
  const clonedScene = ResetObj("/models/planet_mars.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={1.5} position={[30, -0.5, -2]}>
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        castShadow
        />
          <primitive object={clonedScene}/>
     </group>
  )
}

export function PlanetJupiter() {
  const clonedScene = ResetObj("/models/planet_jupiter.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={0.05} position={[45, -0.5, -10]}>
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        castShadow
        />
          <primitive object={clonedScene}/>
     </group>
  )
}

export function PlanetSaturn() {
  const clonedScene = ResetObj("/models/planet_saturn.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={11.5} position={[80, -0.5, -15]}>
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        castShadow
        />
          <primitive object={clonedScene}/>
     </group>
  )
}

export function PlanetUranus() {
  const clonedScene = ResetObj("/models/planet_uranus.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={11.5} position={[120, 2, 5]} >
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        castShadow
        />
          <primitive object={clonedScene}/>
     </group>
  )
}

export function PlanetNeptune() {
  const clonedScene = ResetObj("/models/planet_neptune.glb");
    
    if (!clonedScene) return null;

    return (
    <group scale={0.7} position={[130, 2, -55]} >
     <directionalLight
        position={[3, 2, 1]}
        intensity={1}
        castShadow
        />
          <primitive object={clonedScene}/>s
     </group>
  )
}

export function PlanetMercuryRotating(props) {
  return (
    <RotatePlanet modelPath="/models/planet_mercury.glb" scale={0.00025} position={[0, 0, 0]}/>
  )
}