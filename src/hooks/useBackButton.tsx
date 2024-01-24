import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useApplicationContext } from "../contexts/useApplication";

const useBackButton = () => {
  const navigate = useNavigate();
  const { WebApp } = useApplicationContext();

  useEffect(() => {
    const callback = () => {
      navigate("/");
    };
    if (WebApp?.BackButton) {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(callback);
    }

    return () => {
      if (WebApp?.BackButton) {
        WebApp.BackButton.hide();
        WebApp.BackButton.offClick(callback);
      }
    };
  }, [WebApp.BackButton, navigate]);

  return { BackButton: WebApp?.BackButton || {} };
};

export default useBackButton;
