import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";
import Sway from '@/public/gear/sway.png'
import Logi from "@/public/gear/logi.jpeg";
import Copilot from "@/public/gear/copilot.jpeg";
import Superhuman from "@/public/gear/superhuman.png";
import shelf from "@/public/gear/shelf.png";
import cables from "@/public/gear/cables.png";
import Nikon from "@/public/gear/nikon.png";
import EpidemicSound from "@/public/gear/epidemic-sound.png";
import DJI from "@/public/gear/dji.png";

export const metadata: Metadata = {
  title: "Gear | Brian Ruiz",
  description:
    "My toolbox. This is gear I actually own and recommend.",
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="flex gap-4 items-center transition-opacity">
    <a
      className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[4rem] min-w-[4rem] h-[4rem] shadow"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="object-center object-cover w-full h-full"
        fill
      />
    </a>
    <div className="grow flex justify-between gap-2 items-center">
      <div className="space-y-1">
        <h3 className="text-primary line-clamp-2 leading-tight font-medium">
          {title}
        </h3>
        <p className="text-secondary line-clamp-3 leading-tight text-sm">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto text-sm rounded-full px-4 py-1 bg-secondary h-fit"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Gear() {
 


  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24 h-screen">
      

     

        
      </div>
    </>
  );
}


