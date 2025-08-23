import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Scroll, useScroll } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import { ScrollRevealText } from "./Animations";
import { gsap } from 'gsap';

// const Pages = (index, ...props) => {
//     return (
//         <div className={`page_${index}`} style={{opacity: props.opacity}}>
//             {props.children}
//         </div>
//     );
// };

const Pages = ({ index, opacity, children }) => {
  return (
    <div className={`page_${index}`} style={{ opacity }}>
      {children}
    </div>
  );
};


export const UIOverlay = () => {
    const scroll = useScroll();
    const [opacityFirstPage, setOpacityFirstPage] = useState(1);
    const [opacitySecondPage, setOpacitySecondPage] = useState(1);
    const [opacityThirdPage, setOpacityThirdPage] = useState(1);
    const [opacityFourthPage, setOpacityFourthPage] = useState(1);
    const [opacityFifthPage, setOpacityFifthPage] = useState(1);
    
    
    const headerRef = useRef();
    // useFrame(() => {
    //     setOpacityFirstPage(1 - scroll.range(0, 1 / 5));
    //     setOpacitySecondPage(scroll.range(1 / 5, 1 / 5));
    //     setOpacityThirdPage(scroll.range(2 / 5, 1 / 5));
    //     setOpacityFourthPage(scroll.range(3 / 5, 1 / 5));
    //     setOpacityFifthPage(scroll.range(4 / 5, 1 / 5));
        
    //     // const r = scroll.offset;
    //     const slideUp = scroll.range(0, 1 / 5); // 0 to 1 as user scrolls first page
    //     if (headerRef.current) {
    //         const y = 100 - slideUp * 100; // 100 → 0
    //         // const y = Math.max(-r * 200, -100); // scroll from 0 to -100px
    //         // headerRef.current.style.transform = `translateY(${y}px)`;
    //         headerRef.current.style.transform = `translateY(${y}px)`;
    //         if (Math.abs(y - 0) < 1) {
    //             // console.log("Reached ~85px, do something");
    //             headerRef.current.style.top = 20;
    //         }
    //         if (Math.abs(y - 99) < 1) {
    //             // console.log("Reached ~85px, do something");
    //             headerRef.current.style.top = 0;
    //         }
    //         else if (headerRef.current.style.top === 0) {
    //             headerRef.current.style.top = 20;
    //         }
    //     }
    //     // console.log(slideUp);
    // });

    useFrame(() => {
        setOpacityFirstPage(scroll.range(0, 1 / 5));
        setOpacitySecondPage(scroll.range(1 / 5, 1 / 5));
        setOpacityThirdPage(scroll.range(2 / 5, 1 / 5));
        setOpacityFourthPage(scroll.range(3 / 5, 1 / 5));
        setOpacityFifthPage(scroll.range(4 / 5, 1 / 5));

        const slideUp = scroll.range(0, 1 / 5); // 0 → 1 in first section
        const y = 100 - slideUp * 100;          // 100px → 0px smoothly
        const transformY = headerRef.current.style.transform = `translateY(${y}px)`;

        if (headerRef.current) {
            // Move the header up or down based on scroll
            transformY;
            if (transformY === `translateY(80px)`) {
                headerRef.current.style.top = "0"; // Fix position when at the top
            }
        };
    });

    return (
        <Scroll html className="scroll-html" style={{ margin: "0px 0px 0px 0px", width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>            
            <div ref={headerRef} className="header-container">
                <header className="header-wrapper">
                    <h1 className="title">Aslamx</h1>
                    <nav className="nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </nav>
                </header>
            </div>
            {[...Array(1)].map((_, i) => (
                <Pages opacity={opacityFirstPage} key={i} index={i + 1} className="page_one">  
                    <ScrollRevealText
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        >
                        When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                        No! When he ate a soup made out of a poisonous mushroom?
                        No! A man dies when he is forgotten!
                    </ScrollRevealText>
                </Pages>
            ))}
        </Scroll>
    )
};