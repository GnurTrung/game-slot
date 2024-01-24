const Header = () => {
  const menu = [
    {
      img: "/images/header/xai_token.png",
      amount: "100",
    },
    {
      img: "/images/header/xaitama_token.png",
      amount: "100",
    },
    {
      img: "/images/header/power.png",
      amount: "100",
    },
  ];

  return (
    <div className="grid grid-cols-3 absolute top-5 z-10 w-full items-end">
      {menu.map((item: any, index: any) => (
        <div key={index} className="flex justify-center relative">
          <img src={item.img} className="cursor-pointer" alt="header" />
          <div
            className={`absolute h-full z-999 text-[22px] w-full flex justify-center items-center m-auto inset-0 pl-4 ${index == 2 && "pt-1.5"}`}
          >
            {item.amount}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Header;
