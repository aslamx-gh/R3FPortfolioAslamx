"use client";
import "./styles/globals.scss";
import "./styles/main.scss";
import "./styles/animations.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader, ScrollControls, Scroll, OrbitControls, Environment } from "@react-three/drei";
import dynamic from "next/dynamic";
import { StrictMode } from 'react'
import PortfolioScene from "./scenes/PortfolioScene";
import { ScrollRevealText } from "./components/Animations";
import { UIOverlay } from "./components/UIOverlay";


// const PortfolioScene = dynamic(() => import('../components/PortfolioScene'), {
//   ssr: false,
// });

export default function Home() {
  return (
    <StrictMode>
     <main className="scene-container">
      <Canvas shadows camera={{ position: [5, 25, 35], fov: 90, near: 0.1, far: 5000 }}>
        <Suspense fallback={null}>
          {/* <Environment preset="sunset" background /> */}
          <ScrollControls pages={5} damping={0.2}>
            <Scroll>
              <PortfolioScene /> 
            </Scroll>
            <UIOverlay />
              {/* <OrbitControls /> */}
          </ScrollControls>
        </Suspense>
      </Canvas>
     </main>
    </StrictMode>
  );
}
