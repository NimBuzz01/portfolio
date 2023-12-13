import { Separator } from "../ui/separator";
import Link from "next/link";
import { CopyrightIcon } from "lucide-react";
import ToggleTheme from "../toggle-theme";

const Footer = () => {
  return (
    <div className="w-full p-4 xl:p-0">
      <Separator className="my-4" />
      <div className="flex flex-wrap justify-between gap-1 items-center text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center">
          <p>
            Built by{" "}
            <Link href={""} target="_blank">
              Niamat Marjan
            </Link>
          </p>
          <Separator className="mx-1" orientation="vertical" />
          <CopyrightIcon className="mr-1 h-3 w-3" />
          <p className="mr-auto">2023. All Rights Reserved.</p>
        </div>

        <ToggleTheme />
      </div>
    </div>
  );
};

export default Footer;
