import React from "react";
import CustomProgressBar from "./CustomProgressBar";
import { MAX_POWER } from "@/constant";

const Footer = () => {
  return (
    <section id="meme" className="h-[75px] fixed bottom-0 w-full">
      <CustomProgressBar current={10} max={MAX_POWER} />
    </section>
  );
};

export default Footer;
