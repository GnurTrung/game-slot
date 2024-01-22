import { useApplication } from "@/context/useApplication";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const {
    setOpenWallet,
    setOpenModalRarity,
    setOpenModalHistory,
    setOpenModalLeaderBoard,
  } = useApplication();

  useEffect(() => {
    !!showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showMenu]);
  const linkList = [
    {
      id: 1,
      name: "How to Play",
      onClick: () => {
        setOpenModalRarity(true);
      },
    },
    {
      id: 2,
      name: "recent game",
      onClick: () => {
        setOpenModalHistory(true);
      },
    },
    {
      id: 3,
      name: "leaderboard",
      onClick: () => {
        setOpenModalLeaderBoard(true);
      },
    },
  ];

  return <footer></footer>;
};

export default Header;
