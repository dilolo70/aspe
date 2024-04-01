import Image from "next/image";
import { Metadata } from "next";
import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import Gallery from "./components/Gallery";
import Header from "@/components/ui/Header";
import { Accordion, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { AccordionDemo } from "@/components/Section/Faq";


export const metadata: Metadata = {
  title: "About | Brian Ruiz",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 p-10">
      <Header title="A propos de nous" subtitle="Un bref aperçu de Nous" />
    
    
     
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="" headingAlignment="left">
          <div className="flex flex-col gap-6 text-foreground">
            <p>Moi{"c'est "} , I&apos;</p>

            <p>
              Président de l
            </p>
            <p>
              {" "}
              <Link
                className="underline"
                href="https://www.youtube.com/channel/@brianruizy"
              >
              
              </Link>{" "}
            
            </p>
            <p>
              &apos; :)
            </p>
          </div>
        </Section>

  <div> 
  <Header title="" subtitle="Objectifs principales" />

  <Section heading="" > 
    <div className="flex flex-col w-full gap-8 text-foreground mt-10">
            <p>
              {"Nos objectifs principales sont entre autres "}
              <Link href="mailto:contact@b-r.io" >
                Voir tous les objectifs ici
              </Link>
              . 
            </p>
         
           
          <AccordionDemo/>
          </div>
    </Section>
  </div>

  <div> 
  <Header title="" subtitle="Nous Rejoindres" />
  <Section heading="" headingAlignment="left">
          <div className="flex flex-col w-full gap-8 text-foreground mt-10">
            <p className="text-xl">
              Nous avons {" à ce jours plus de 55"} Membres actifs
            </p>
            <p>
             Et nous acceuillons toute personne avec une grande conviction et une réel envie de faire avancer le monde,
             Vous pouvez le faire à travers   {" "}
              <Link
                className="underline"
                href="https://hines.com"

              >
                ce liens
              </Link>
              , où vous aurez  remplir le formulaire d{"'adhéion"} et à prensenter toutes les piéces importantes...
            </p>
          </div>
        </Section>
  </div>
       
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Full Stack Engineer",
    company: "Hines",
    time: "2022 -",
    link: "https://hines.com",
  },
  {
    title: "Software Engineer",
    company: "PeriShip",
    time: "2021 - 2022",
    link: "https://peripharma.com/",
  },
  {
    title: "Python Developer",
    company: "CAMS",
    time: "2019 - 2020",
    link: "https://camstex.com",
  },
  {
    title: "Coding Camp Instructor",
    company: "University of Houston",
    time: "2019",
    link: "https://www.uhd.edu/",
  },
];