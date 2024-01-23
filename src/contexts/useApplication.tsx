import { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { getUserProfile } from "../services/profile";
import { useWebApp } from "../hooks";

export const ApplicationContext = createContext(null);
export const useApplicationContext = () => useContext(ApplicationContext);

export function ApplicationProvider({ children }: any) {
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
      setPro5(res?.data);
      toast.success("User profile: " + WebApp?.initDataUnsafe?.user?.id);
    } catch (ex) {
      // toast.error(ex);
    }
  };
  toast.success(process.env.REACT_APP_API_URL as any);
  useEffect(() => {
    WebApp?.initDataUnsafe?.user?.id && handleGetPro5();
  }, [WebApp?.initDataUnsafe?.user?.id]);

  return (
    <ApplicationContext.Provider
      value={
        {
          pro5,
          setPro5,
        } as any
      }
    >
      {children}
    </ApplicationContext.Provider>
  );
}
