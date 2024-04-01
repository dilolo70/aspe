import Image from "next/image";
import NewsletterSection from "@/components/Section/NewsletterSection";
import { Presentation } from "@/components/Section/Presentation";
import { Hero} from "@/components/Section/hero";
import { AccordionDemo } from "@/components/Section/Faq";
// import { SwipeCarousel } from "@/components/Section/hero";

export default function Home() {
  return (
    <div className="">
      

    <Hero/>
    {/* <SwipeCarousel /> */}
    <Presentation/>
    <NewsletterSection/>

    </div>
  );
}
