import React from "react";
import useBackButton from "../../hooks/useBackButton";
import { useApplicationContext } from "../../contexts/useApplication";

const Dojo = () => {
  useBackButton();
  const {WebApp} = useApplicationContext()

  return <div>{WebApp?.initDataUnsafe?.user?.id}</div>;
};

export default Dojo;
