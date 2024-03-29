"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images";



const hero = () => {
    const images = [
        "/image/hero1.jpg",
        "/image/hero2.jpg",
        "/image/hero3.jpg",
        "/image/hero4.jpg",
    ];
    return (

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
                <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-400 py-4">
                    Cultiver l{"'"} excellence en chacun  <br /> Vers un avenir meilleur
                </motion.p>
                <div>
                    <button className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-black mx-auto text-center rounded-full relative mt-4">
                        <span>Rejoignez Nous Maintenant →</span>
                        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
                    </button>
                </div>
            </motion.div>
    );
}

export default hero