import Card from "@/components/Section/card";
import Hero from "@/components/Section/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
  
     <img src="/image/hero1.jpg" alt="" />
     <Image src="/image/hero2.jpg" alt="" width={1000}  height={1000}/>
  <Hero/>
  <Card/>
    </div>
  );
}
