import Sidebar from "../../../common/Sidebar";
import MainPage from "./MainPage";

const MainLayout = () => {
  return (
    <div className="flex flex-row justify-start items-start ">
      <Sidebar />
      <section className="w-full">
        <MainPage />
      </section>
    </div>
  );
};

export default MainLayout;
