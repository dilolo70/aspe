'use client'
import React from "react";
import Header from "../ui/Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { text } from "stream/consumers";
import { motion } from "framer-motion";
import Halo from "../ui/Halo";
import FlipNumber from "../FlipNumber";


const LeftInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  }),
  initial1: {
    opacity: 0,
    x: -100,
  },
  animate1: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  }),
};

function NewsletterSection() {
  const words = [
    {
      text: "Mains dans la main, impactons",
      className: "text-xl md:text-2xl"
    },
    {
      text: "l'avenir.",
      className: "text-blue-500 dark:text-blue-500 text-4xl",
    },
  ];
  return (
    <section className="md:p-10 p-" >
 



      <Header title="Plan d'action" subtitle="Adhesion ou Don" />

      <div className="p-10 bg-secondary m-10 border-b-8 border-r-8 border-2 rounded-xl  border-primary   md:flex-row gap-4 flex flex-col  items-center justify-center  text-2xl ">
        <motion.p variants={LeftInAnimationVariants} initial='initial1' whileInView='animate1' className="text-4xl md:text-7xl p-10 font-light text-foreground ">Impactons le monde <span className="text-blue-500 font-bold">Ensemble</span></motion.p>
        <motion.div variants={LeftInAnimationVariants} initial='initial' whileInView='animate' className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Button className=" text-xl" variant='outline' >
            Rejoignez nous
          </Button>
          <p className="text-foreground">ou</p>
          <Button className="font-sans text-xl " variant='default' >
            Faites un Don
          </Button>
        </motion.div>
      </div>
   

      <div className="mt-32">
        <Header title="" subtitle="Participer à un événement" />

        <div className="p-10 bg-primary/45 m-10 border-b-8 border-r-8 border-2 rounded-xl  border-secondary   md:flex-row gap-4 flex flex-col  items-center justify-center  text-2xl ">
          <motion.p variants={LeftInAnimationVariants} initial='initial1' whileInView='animate1'  className="text-4xl md:text-7xl p-10 font-light text-foreground ">Participer à un ou plusieurs de  <span className="text-blue-900 font-bold">Nos événements</span></motion.p>
          
          <motion.div variants={LeftInAnimationVariants} initial='initial' whileInView='animate' className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Button className=" text-xl" variant='secondary' >
            Dites nous lesquels
          </Button>
          
        </motion.div>
        </div>
      </div>
      <div className="mt-32 ">
        <Header title="" subtitle="Notre Newsletter." />
        <div className="flex flex-col md:flex-row  items-center mt-8 md:mt-[3.31rem]">
        <Halo strength={5}>
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-secondaryA p-6 text-center lg:p-8">
        <p className="max-w-md text-foreground text-xl">
        Pour ne rien manquez Nous avons notre Communauté sur WhatsApp où nous partageons toutes nos activités inserer votre numéro et nous vous y ajouterons 
        </p>
        <form
          className="mt-2 flex  w-full max-w-md flex-col items-center gap-2 md:flex-row"
        >
          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="number"
              id="email"
              className="block w-full rounded-md  border border-primary bg-primary px-4 py-1.5 text-primary placeholder:text-tertiary focus:ring-inset focus:ring-blue-600"
              placeholder="+227 12345678"
            />
          </div>
          <button className="w-full whitespace-nowrap rounded-md bg-neutral-800 px-4 py-1.5 text-white hover:bg-neutral-900 focus:ring-inset focus:ring-blue-600 focus-visible:outline focus-visible:outline-2 dark:bg-neutral-300 dark:text-black hover:dark:bg-neutral-100 md:w-fit ">
            {"Envoyer"}
          </button>
        </form>
        <p className="text-sm text-tertiary">
        </p>
      </div>
    </Halo>
          
        </div>
      </div>
    </section>


  );
}

export default NewsletterSection;
