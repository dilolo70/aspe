import React from "react";

function FooterSection() {
  return (
    <section className="p-12 flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          {/* <img src="/images/footer_logo.png" alt="footer logo" /> */}
        </div>
        <div className="text-muted-foreground text-[1rem] font-serif">
          © 2024 <span className="text-red-500 font-bold"> Sorci Digit</span>. Tous droits reservés.
        </div>
        <div className="flex gap-4">
          <p className="text-muted-foreground text-[1rem]">Acceuil</p>
          <p className="text-muted-foreground text-[1rem]">Actualités</p>
          <p className="text-muted-foreground text-[1rem]">Projets</p>
          <p className="text-muted-foreground text-[1rem]">Ressources</p>
        </div>
      </div>
      {/* <div className="pb-[2.56rem] p-12">
        <p className="text-foreground/45">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.
        </p>
      </div> */}
    </section>
  );
}

export default FooterSection;
