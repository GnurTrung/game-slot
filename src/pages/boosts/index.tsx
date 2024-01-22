"use client";
import { BackButton } from "@vkruglikov/react-telegram-web-app";
import { useRouter } from "next/navigation";

const Boosts = () => {
  const router = useRouter();
  return (
    <div className="bg-white h-screen">
      <BackButton
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="flex flex-col m-auto justify-center pb-20 text-[40px] text-white">
        Coming Soon...
      </div>
    </div>
  );
};
export default Boosts;
