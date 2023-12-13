"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const Icon = ({
  icon,
}: {
  icon: { default: string; light?: string; dark?: string };
}) => {
  const { theme } = useTheme();
  const iconSrc =
    theme === "light" ? icon.light || icon.default : icon.dark || icon.default;

  return (
    <Image
      src={iconSrc}
      alt={"Icon Image"}
      width={30}
      height={30}
      loading="lazy"
      style={{ height: "auto", width: "auto" }}
    />
  );
};

export default Icon;
