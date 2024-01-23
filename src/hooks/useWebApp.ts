import { useEffect } from "react";
import useMounted from "./useMounted";

const useWebApp = () => {
  const WebApp =
    typeof window !== "undefined" && (window as any)?.Telegram?.WebApp
      ? (window as any).Telegram.WebApp
      : null;
  const { isMounted } = useMounted();
  useEffect(() => {
    if (isMounted && WebApp) WebApp.ready();
  }, [isMounted,WebApp]);
  return WebApp;
};

export default useWebApp;
