import React from "react";
import Preloader from "./preloader";

const SplashScreen = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Preloader type="splash" objectFit="cover" />
    </div>
  );
};

export default SplashScreen;
