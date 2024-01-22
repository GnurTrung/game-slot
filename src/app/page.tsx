"use client";
import Footer from "@/components/Footer";
import FirstPage from "@/components/FirstPage";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import Header from "@/components/Header";
import { useApplication } from "@/context/useApplication";
import { Toaster } from "react-hot-toast";
import { Router } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { openWallet, setOpenWallet } = useApplication();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PMLMGMXP9S"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-PMLMGMXP9S', {
					page_path: window.location.pathname,
					});
					`,
        }}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Toaster />
          <Header />
          <FirstPage />
          <Footer />
        </>
      )}
    </>
  );
}
