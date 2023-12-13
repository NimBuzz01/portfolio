import { ChevronDown } from "lucide-react";
import ProfileContainer from "./profile-container";
import Footer from "./footer";
import GridContainer from "./grid-container";

const MainContainer = () => {
  return (
    <main className="container mx-auto flex flex-col justify-center h-full xl:flex-row flex-1 w-full gap-2 xl:gap-10 dark:bg-black">
      <div className="flex-1 p-4 sm:p-6 max-w-md">
        <div className="flex items-center flex-col h-full rounded-md">
          <ProfileContainer />
          <div className="hidden xl:block w-full">
            <Footer />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center h-full rounded-md ">
          <GridContainer />
        </div>
      </div>
      <div className="xl:hidden">
        <Footer />
      </div>
    </main>
  );
};

export default MainContainer;
