import Link from "next/link";
import { useEffect, useRef } from "react";

const CustomProgressBar = ({ current, max, title = "" }: any) => {
  const bar = useRef<any>(0);
  const calcPercent = (current: any, max: any) => {
    try {
      if (max <= 0 || !max) return "";
      const percent = ((current * 100) / max).toFixed(2);
      bar.current.style.width = `${percent}%`;
      return `${percent}%`;
    } catch (ex) {}
    return "";
  };
  useEffect(() => {
    calcPercent(current, max);
  }, [current, max]);
  const menu = [
    { icon: "🧸", title: "Frens", link: "/frens" },
    { icon: "🪙", title: "Earn", link: "/earn" },
    { icon: "🚀", title: "Boosts", link: "/boosts" },
  ];
  return (
    <div className="p-2">
      <div className="flex justify-between text-white font-semibold items-center">
        <div className="flex text-white text-xl">
          ⚡{`${current}`}/{Number(max).toLocaleString("en-US")}
          {``}
        </div>
        <div className="flex flex-row rounded-lg">
          {menu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`p-2 bg-[#404040] hover:bg-[#595959] flex flex-col gap-2 ${
                item.link == "/earn" && "border-l border-r border-white"
              }  ${item.link == "/frens" && "rounded-l-lg"}  ${
                item.link == "/boosts" && "rounded-r-lg"
              }`}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-2 text-sm flex justify-between mb-2">
        <div className="w-full bg-[#737373] h-2 rounded-full">
          <div
            ref={bar}
            className=" h-full bg-progress rounded-full max-w-full"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default CustomProgressBar;
