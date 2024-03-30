import React from "react";
import Header from "../ui/Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function NewsletterSection() {
  return (
    <section className="mt-[9rem] p-10">
      <Header title="Our newsletter" subtitle="Subscribe Our Newsleter" />
      <div className="flex flex-col md:flex-row  items-center mt-8 md:mt-[3.31rem]">
        <div>
          <img
            src="/image/newsletter_large_icon.png"
            alt="large envelop image"
            className="w-[10rem] md:w-full "
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold text-foreground text-xl">
           Souscrivez a notre Newsletters pourinformez de toutes nos prochaines activités et semininaires pour atteindre votre plein potentiel
          </p>

         
          <div className="mt-[3.12rem]">
            <Button size='default'  variant='default' className="text-xl font-semibold text-foreground"> Souscrivze Maintenant</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
