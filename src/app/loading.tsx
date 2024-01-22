import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed bg-[black] w-full h-screen text-white text-[10rem] z-50 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/assets/images/main_coin.png"}
          alt="err"
          width={300}
          height={300}
          className="loading_img"
        />
        <p className="text-white text-[24px] font-[800] font-primary">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default Loading;
