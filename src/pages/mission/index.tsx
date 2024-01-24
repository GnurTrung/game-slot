import React from "react";
import useBackButton from "../../hooks/useBackButton";
import { useApplicationContext } from "../../contexts/useApplication";

const Mission = () => {
  useBackButton();
  const {WebApp} = useApplicationContext()

  return <div>{WebApp?.initDataUnsafe?.user?.username}</div>;
};

export default Mission;
