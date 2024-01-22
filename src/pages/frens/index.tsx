"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const BackButton = dynamic(() => import("@vkruglikov/react-telegram-web-app").then((mod) => mod.BackButton), {
  ssr: false
})

const Frens = () => {
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
export default Frens;
