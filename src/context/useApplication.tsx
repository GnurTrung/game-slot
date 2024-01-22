"use client";
import { getUserProfile } from "@/service/user";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";

export const ApplicationContext = createContext([] as any);
export const useApplication = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }: any) => {
  const [type, setType] = useState<any>(null);
  const [tokenPlay, setTokenPlay] = useState<any>("eth");
  const [pro5, setPro5] = useState<any>({});
  const WebApp = useWebApp();
  const handleGetPro5 = async () => {
    try {
      const params = {
        auth_date: WebApp?.initDataUnsafe?.auth_date,
        query_id: WebApp?.initDataUnsafe?.query_id,
        user: JSON.stringify(WebApp?.initDataUnsafe?.user),
        hash: WebApp?.initDataUnsafe?.hash,
      };
      const res = await getUserProfile(params);
      toast.success("User profile: ");
    } catch (ex) {
      // toast.error(ex);
    }
  };
  const value = useMemo(
    () => ({
      pro5,
      setPro5,
      type,
      setType,

      tokenPlay,
      setTokenPlay,
    }),
    [pro5, setPro5, type, setType, tokenPlay, setTokenPlay]
  );

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};
