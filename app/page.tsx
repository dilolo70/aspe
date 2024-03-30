import Card from "@/components/Section/card";
import { Hero } from "@/components/Section/hero";
import Image from "next/image";
import NewsletterSection from "@/components/Section/NewsletterSection";
import { Presentation } from "@/components/Section/Presentation";

export default function Home() {
  return (
    <div className="">
      

    <Hero/>
    <Presentation/>
    <NewsletterSection/>
    </div>
  );
}
