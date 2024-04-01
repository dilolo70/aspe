'use client'
import React from "react";
import NavLink from "../ui/NavLink";

const links = [
  { label: "Acceuil", href: "/" },
  { label: "Actualités", href: "/about" },
  { label: "Projets", href: "/blog" },
  { label: "Ressources", href: "/gear" },
  // { label: "Projects", href: "/projects" },
];

function FooterSection() {
  return (
    <section className=" p-2 md:p-12  flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
        <div>
          {/* <img src="/images/footer_logo.png" alt="footer logo" /> */}
        </div>
        <div className="text-muted-foreground mx-auto font-serif">
          © 2024 <span className="text-red-500 font-bold"> Sorci Digit</span>. Tous droits reservés.
        </div>
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
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
