"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ImagesSlider } from "../ui/images";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";


export function Hero() {
    const images = [
        "/image/hero1.jpg",
        "/image/hero2.jpg",
        "/image/hero3.jpg",
        "/image/hero4.jpg",
    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images}>


            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Cultiver lI&apos; excellence en chacun  <br /> Vers un avenir meilleur par excellence
               
               </motion.p>
                <div>
                    <button className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                        <span>Rejoignez Nous Maintenant →</span>
                        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
                    </button>
                </div>
            </motion.div>


     
        </ImagesSlider>
    );
}



// const imgs = [
//     "/image/hero1.jpg",
//     "/image/hero2.jpg",
//     "/image/hero3.jpg",
//     "/image/hero4.jpg",
// ];

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
// const DRAG_BUFFER = 50;

// const SPRING_OPTIONS = {
//     type: "spring",
//     mass: 3,
//     stiffness: 400,
//     damping: 50,
// };

// export const SwipeCarousel = () => {
//     const [imgIndex, setImgIndex] = useState(0);

//     const dragX = useMotionValue(0);

//     useEffect(() => {
//         const intervalRef = setInterval(() => {
//             const x = dragX.get();

//             if (x === 0) {
//                 setImgIndex((pv) => {
//                     if (pv === imgs.length - 1) {
//                         return 0;
//                     }
//                     return pv + 1;
//                 });
//             }
//         }, AUTO_DELAY);

//         return () => clearInterval(intervalRef);
//     }, []);

//     const onDragEnd = () => {
//         const x = dragX.get();

//         if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
//             setImgIndex((pv) => pv + 1);
//         } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//             setImgIndex((pv) => pv - 1);
//         }
//     };

//     return (
//         <div className="relative overflow-hidden bg-slate-50 dark:bg-neutral-950">
//             <motion.div
//                 drag="x"
//                 dragConstraints={{
//                     left: 0,
//                     right: 0,
//                 }}
//                 style={{
//                     x: dragX,
//                 }}
//                 animate={{
//                     translateX: `-${imgIndex * 100}%`,
//                 }}
//                 transition={SPRING_OPTIONS}
//                 onDragEnd={onDragEnd}
//                 className="flex cursor-grab items-center active:cursor-grabbing"
//             >
                
//                 <Images imgIndex={imgIndex} />
//             </motion.div>
           

//             <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//             <GradientEdges />
//         </div>
//     );
// };


// interface ImagesProps {
//     imgIndex: number;
// }

// const Images: React.FC<ImagesProps> = ({ imgIndex }) => {
//     return (
//         <>
//             {imgs.map((imgSrc, idx) => {
//                 return (
//                     <motion.div
//                         key={idx}
//                         style={{
//                             backgroundImage: `url(${imgSrc})`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                         }}
//                         animate={{
//                             scale: imgIndex === idx ? 0.95 : 0.85,
//                         }}
//                         transition={SPRING_OPTIONS}
//                         className="aspect-video w-full h-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
//                     />
//                 );
//             })}
//         </>
//     );
// };


// interface DotsProps {
//     imgIndex: number;
//     setImgIndex: React.Dispatch<React.SetStateAction<number>>;
// }

// const Dots: React.FC<DotsProps> = ({ imgIndex, setImgIndex }) => {
//     return (
//         <div className="mt-4 flex w-full justify-center gap-2">
//             {imgs.map((_, idx) => {
//                 return (
//                     <button
//                         key={idx}
//                         onClick={() => setImgIndex(idx)}
//                         className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//                             }`}
//                     />
//                 );
//             })}
//         </div>
//     );
// };
// const GradientEdges = () => {
//     return (
//         <>
//             <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
//             <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
//         </>
//     );
// };
