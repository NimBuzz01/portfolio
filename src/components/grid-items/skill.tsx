import { GridItemInterface } from "@/config/grid-items";
import Image from "next/image";

const Skill = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950/60" />
      {item.bgImage && (
        <Image
          className="z-0 object-cover object-center w-full h-full"
          fill
          src={item.bgImage}
          alt="skills"
        />
      )}
      <div className="relative z-20 w-full p-4 space-y-3 md:p-8">
        <div className="text-lg font-semibold text-neutral-100">
          {item.title}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {item.skills?.map((skill, index) => (
            <p
              className="px-2 py-1 text-sm font-medium bg-neutral-100 rounded-lg dark:bg-neutral-800 hover:bg-neutral-200 transition-all"
              key={index}
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
