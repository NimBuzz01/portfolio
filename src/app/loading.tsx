import Preloader from "@/components/pre-loader";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Preloader type="suspense" />
    </div>
  );
};

export default Loading;
