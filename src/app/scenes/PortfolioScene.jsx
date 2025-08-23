"use client";
import { useGLTF, OrbitControls, Environment, Text, Center, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { PlanetMercury, PlanetVenus, PlanetMercuryRotating, PlanetEarth, PlanetMars, PlanetJupiter, PlanetSaturn, PlanetUranus, PlanetNeptune } from "../components/PlanetsComponents";
// import { RotatePlanet } from "../components/Animations";


export default function PortfolioScene() {
  const { camera } = useThree();  
  const scroll = useScroll();
  const groupRef = useRef();

  useFrame(() => {
    const r = scroll.offset; // value from 0 to 1
    if (groupRef.current) {
      groupRef.current.position.x = -r * 500; // shift all planets left as scroll progresses
    }

    const targetX = r * 250; // target position based on scroll
    const targetY = r * 500; // target height based on scroll
    const targetZ = 40 - r * 40; // zoom in as scroll progresses

    // if (r >= 0.5 && groupRef.current) {
      camera.position.x += (targetX - camera.position.x) * 0.75; // move 100 units on X axis
      camera.position.y += (targetY - camera.position.y) * 0.75;      // optional: keep fixed height
      camera.position.z += (targetZ - camera.position.z) * 0.75; // slowly zoom in

      camera.lookAt(0, 0, 0); // optionally keep camera facing center
    // } else if (groupRef.current) {

    // }
  // }
}
);

  return (
      <>
      {/* <PlanetMercury/> */}
      <ambientLight intensity={1} />
      <Environment files="/textures/NightSkyHDRI008_2K-HDR.exr" background />
      {/* <OrbitControls enableZoom={true} /> */}

      <group ref={groupRef}>
        <Text position={[0, 2, 0]} color={"gray"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
          Mercury
        </Text>
        <PlanetMercuryRotating />
        <Text position={[9.5, 2, 1.5]} color={"orange"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
          Venus
        </Text>
        <PlanetVenus />
        <Text position={[19, 2, 0]} color={"green"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
         Earth
        </Text>
        <PlanetEarth />
        <Text position={[30, 3.5, -2]} color={"cyan"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
          Mars
        </Text>
        <PlanetMars />
        <Text position={[45, 7, -10]} color={"white"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
          Jupiter
        </Text>
        <PlanetJupiter />
        <Text position={[80, 7, -15]} color={"sand"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
          Saturn
        </Text>
        <PlanetSaturn />
        <Text position={[120, 9, 5]} color={"cyan"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
          Uranus
        </Text>
        <PlanetUranus />
        <Text position={[130, 9, -55]} color={"darkblue"} scale={[2, 1.5, 1]} fontSize={0.5} anchorX="center" anchorY="middle">
          Neptune
        </Text>
        <PlanetNeptune />
      </group>
      </>
  );
}
