"use client";
import SplashScreen from "@/components/SplashScreen";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  const MainBody = dynamic(() => import("@/components/layout/MainBody"));

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return;
    }
  }, [isLoading]);
  return <>{isLoading && isHome ? <SplashScreen /> : <MainBody />}</>;
}
