"use client";
import SplashScreen from "@/components/splash-screen";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  const MainContainer = dynamic(
    () => import("@/components/layout/main-container")
  );

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return;
    }
  }, [isLoading]);
  return <>{isLoading && isHome ? <SplashScreen /> : <MainContainer />}</>;
}
