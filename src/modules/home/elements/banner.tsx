// import { Button } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#f7f5ff] h-[95vh]">
      <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
        <Image
          src={
            "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1920,quality=75/www/homepage/MobileHero.png"
          }
          alt="Newsletter Banner"
          width={800}
          height={500}
          className="w-[80%] object-cover spin-slow"
        />
        <div className="absolute">
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.75rem] md:text-[7xl] lg:text-[4rem] xl:text-[5.75rem] max-w-4xl mx-auto text-center z-10">
            THE NEWSLETTER PLATFORM BUILT FOR
            <span className="font-style">GROW</span>
          </h1>
          <br />
          <h3 className="text-3xl text-center">Built by newsletter people</h3>
          <br />
          <div className="flex w-full justify-center">
            <Button color="primary" className="text-xl !p-8">
              Get Started
            </Button>
          </div>
          <br />
          <h5 className="text-center text-lg">start a 30-day free trial</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
