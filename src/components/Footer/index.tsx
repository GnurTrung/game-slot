import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const menu = [
    {
      imgUrl: "/images/footer/hotpot.png",
      imgUrlActive: "/images/footer/hotpot_active.png",
      href: "/",
    },
    {
      imgUrl: "/images/footer/rank.png",
      imgUrlActive: "/images/footer/rank_active.png",
      href: "/rank",
    },
    {
      imgUrl: "/images/footer/mission.png",
      imgUrlActive: "/images/footer/mission_active.png",
      href: "/mission",
    },
    {
      imgUrl: "/images/footer/dojo.png",
      imgUrlActive: "/images/footer/dojo_active.png",
      href: "/dojo",
    },
    {
      imgUrl: "/images/footer/profile.png",
      imgUrlActive: "/images/footer/profile_active.png",
      href: "/profile",
    },
  ];

  const location = useLocation();

  return (
    <div className="grid grid-cols-5 absolute bottom-5 z-10 w-full items-end">
      {menu.map((item: any, index: any) => (
        <div key={index} className="flex justify-center">
          <Link to={item.href}>
            <img
              src={
                location.pathname === item.href
                  ? item.imgUrlActive
                  : item.imgUrl
              }
              className="cursor-pointer"
              alt="footer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Footer;
