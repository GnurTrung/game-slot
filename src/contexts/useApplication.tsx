import { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { getUserProfile } from "../services/profile";
import { useWebApp } from "../hooks";

export const ApplicationContext = createContext({} as any);
export const useApplicationContext = () => useContext(ApplicationContext);

export function ApplicationProvider({ children }: any) {
  const [pro5, setPro5] = useState<any>({});
  const [pro5Data, setPro5Data] = useState<any>({});
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
      if (res?.data) {
        toast.success("User profile: " + res?.data?.prop?.energy);
        toast.error("User profile: " + res?.data?.data?.prop?.energy);
        setPro5(res?.data?.prop);
        setPro5Data(res?.data?.data?.prop);
      }
    } catch (ex) {
      // toast.error(ex);
    }
  };
  useEffect(() => {
    WebApp?.initDataUnsafe?.user?.id && handleGetPro5();
  }, [WebApp?.initDataUnsafe?.user?.id]);

  return (
    <ApplicationContext.Provider
      value={
        {
          pro5,
          setPro5,
          WebApp,
          pro5Data, setPro5Data
        } as any
      }
    >
      {children}
    </ApplicationContext.Provider>
  );
}
