import { ChevronDown } from "lucide-react";
import MainContent from "./grid-container";
import ProfileInfo from "./profile-info";
import Footer from "./footer";

const MainContainer = () => {
  return (
    <main className="flex flex-col justify-center h-full xl:flex-row flex-1 w-full gap-10 bg-slate-100 dark:bg-black">
      <div className="flex-1 p-4 sm:p-6 max-w-md">
        <div className="flex items-center flex-col h-full rounded-md">
          <ProfileInfo />
          <div className="hidden xl:block w-full">
            <Footer />
          </div>
          <div className="hidden xl:flex items-center gap-2 justify-end mt-auto text-end text-neutral-500 w-full">
            Scroll Down <ChevronDown className="animate-bounce" />
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-4xl">
        <div className="flex items-center h-full rounded-md ">
          <MainContent />
        </div>
      </div>
      <div className="xl:hidden">
        <Footer />
      </div>
    </main>
  );
};

export default MainContainer;
