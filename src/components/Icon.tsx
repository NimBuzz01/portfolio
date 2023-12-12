import Image from "next/image";

const Icon = ({ icon }: { icon: string }) => {
  return (
    <Image
      src={icon}
      alt={"Icon Image"}
      width={40}
      height={40}
      loading="lazy"
    />
  );
};

export default Icon;
