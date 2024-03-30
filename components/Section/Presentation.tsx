"use client";
import React from "react";
import Header from "../ui/Header";
import gsap from 'gsap';



export function Presentation() {

  return (
    <div className="mt-10" >
      <Header title="Presentation" subtitle="Qui sommes nous ?" />

      <section className="p-20 flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
          We boost growth for your statup business
        </p>
        <p className="text-[1.375rem] font-[500]">
          Our goal is top at the heart of creativity services industry as a
          digital creator. In has a after comment
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <div className="flex gap-[1.56rem] items-center">
            <img src="/images/fancy_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal">Learn More</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>

    </div>
  );
}



