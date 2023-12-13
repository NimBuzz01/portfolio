"use client";
import { useRef } from "react";
import "@aarsteinmedia/dotlottie-player";
import type { DotLottiePlayer } from "@aarsteinmedia/dotlottie-player";

function Preloader({
  type,
  objectFit = "none",
}: {
  type: "suspense" | "splash";
  objectFit?: "contain" | "cover" | "fill" | "scale-down" | "none";
}) {
  const animation = useRef<DotLottiePlayer | null>(null);
  return (
    <dotlottie-player
      autoplay=""
      loop=""
      ref={animation}
      objectfit={objectFit}
      src={
        type === "suspense"
          ? "/lottie/preloader.lottie"
          : "/lottie/splash.lottie"
      }
    />
  );
}

export default Preloader;
