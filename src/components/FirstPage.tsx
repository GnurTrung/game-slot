"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useApplication } from "@/context/useApplication";
import { toast } from "react-hot-toast";

import CountUp from "react-countup";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
const FirstPage = () => {
  const {} = useApplication();
  const isFeeding = true;
  const WebApp = useWebApp();

  return (
    <section id="home" className="bg-black h-screen flex justify-center">
      <div className="flex flex-col m-auto justify-center pb-20">
        <div className="flex mx-auto mb-10">
          {isFeeding && (
            <CountUp
              end={1000}
              start={0}
              duration={7200}
              className="text-[40px] text-white"
            />
          )}
        </div>
        <div>{WebApp?.initDataUnsafe?.user?.username} 999</div>
        <Image
          src={"/assets/images/main_coin.png"}
          alt="err"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default FirstPage;
