"use client";
import React from "react";
import Header from "../ui/Header";
import gsap from 'gsap';
import { Button } from "../ui/button";
import Link from "../ui/Link";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import Halo from "../ui/Halo";
import Image from "next/image";


const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  initial2: {
    opacity: 0,
    y: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  }),
  animate2: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  }),
};


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


const OpaInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 0.9,
    transition: {
      delay: 0.5,
    },
  }),
  
};


export function Presentation() {
  return (
    <div className="mt-10" >
      <Header title="Presentation" subtitle="Qui sommes nous ?" />
      

       
      <section className="p-20 flex justify-between flex-col md:flex-row gap-4 items-center">
        <motion.div variants={OpaInAnimationVariants} initial='initial' whileInView='animate'>
          <p className="font-[850] text-card-foreground md:leading-[5.0625rem] text-2xl md:text-4xl text-darkBlue">
            Nous agissons pour le renforcement
          </p>
          <p className="text-[1.375rem] font-[500] text-secondary-foreground">
            des bonnes capacités d&apos;expression orale, écrite, sociale et culturelle
          </p>
          <div className="flex gap-[1.75rem] items-center mt-[3rem]">
            <div className="flex gap-[1.56rem] items-center">
              <Link href='/about' >
                <Button variant='secondary' className="font-bold text-normal text-popover-foreground" >En savoir plus</Button>
              </Link>
            </div>
          </div>
        </motion.div>
        <div>
          <Image width={1000} height={1000}
          className="rounded-2xl"
            src="/image/hero2.jpg"
            alt="guy with phone surrounded by action icons"
          />
        </div>


      </section>
      <Header title="" subtitle="Chiffres clés" />

      <section className="p-10 bg-secondary m-2 md:m-10 border-b-8 border-r-8 border-2 rounded-xl  border-primary  flex justify-between flex-col md:flex-row gap-4 items-center">

        <motion.li variants={FadeInAnimationVariants} initial="initial"
          whileInView="animate">
          <Card className="p-2   flex flex-col justify-center items-center">
            <CardHeader className=" font-bold text-4xl text-center">
              55 +
            </CardHeader>
            <CardContent>
              Membres actifs
            </CardContent>
          </Card>
        </motion.li>
        <motion.li variants={FadeInAnimationVariants} initial="initial"
          whileInView="animate">
          <Card className="p-2   flex flex-col justify-center items-center">
            <CardHeader className=" font-bold text-4xl text-center">
              12 +
            </CardHeader>
            <CardContent>
              Projets réalisés
            </CardContent>
          </Card>
        </motion.li>
        <motion.li variants={FadeInAnimationVariants} initial="initial"
          whileInView="animate">
          <Card className="p-2   flex flex-col justify-center items-center">
            <CardHeader className=" font-bold text-4xl text-center">
              255 +
            </CardHeader>
            <CardContent>
              Jeunes impactés
            </CardContent>
          </Card>
        </motion.li>


      </section>
      <Header title="" subtitle="Témoignages" />

      <section className="md:p-10 p-2 flex justify-between flex-col md:flex-row gap-4 items-center">

        <motion.li variants={FadeInAnimationVariants} initial="initial"
          whileInView="animate">
          <Card className="p-2  flex flex-col justify-center items-center">
            <CardHeader className="  text-2xl text-center">
              <p>
                <span className="font-bold text-4xl text-primary" >{'"'} </span>
                Nous avons suivis une formation sur l I&apos;art oratoire et la façon  de parler en public avec mes amis et nous sommes tous satisfait
                <span className="font-bold text-4xl text-primary"  >{'"'} </span>
              </p>
            </CardHeader>
            <CardContent className="text-2xl  text-foreground/50">
              Aminou Ibrahim
            </CardContent>
            <CardFooter>
              Membre
            </CardFooter>
          </Card>
        </motion.li>

        <motion.li variants={FadeInAnimationVariants} initial="initial"
          whileInView="animate">
          <Card className="p-2  flex flex-col justify-center items-center">
            <CardHeader className="  text-2xl text-center">
              <p>
                <span className="font-bold text-4xl text-primary" >{'"'} </span>
                Nous avons suivis une formation sur l I&apos;art oratoire et la façon  de parler en public avec mes amis et nous sommes tous satisfait
                <span className="font-bold text-4xl text-primary"  >{'"'} </span>
              </p>
            </CardHeader>
            <CardContent className="text-2xl  text-foreground/50">
              Aminou Ibrahim
            </CardContent>
            <CardFooter>
              Bénéficiaires
            </CardFooter>
          </Card>
        </motion.li>

        <motion.li variants={FadeInAnimationVariants} initial="initial"
          whileInView="animate">
          <Card className="p-2  flex flex-col justify-center items-center">
            <CardHeader className="  text-2xl text-center">
              <p>
                <span className="font-bold text-4xl text-primary" >{'"'} </span>
                Nous avons suivis une formation sur l I&apos;art oratoire et la façon  de parler en public avec mes amis et nous sommes tous satisfait
                <span className="font-bold text-4xl text-primary"  >{'"'} </span>
              </p>
            </CardHeader>
            <CardContent className="text-2xl text-foreground/50">
              Aminou Ibrahim
            </CardContent>
            <CardFooter>
              Bénéficiaires
            </CardFooter>
          </Card>
        </motion.li>




      </section>

    </div>
  );
}



function useSectionInView(arg0: string): { ref: any; } {
  throw new Error("Function not implemented.");
}

