import Sidebar from "../../../common/Sidebar";
import MainPage from "./MainPage";

const MainLayout = () => {
  return (
    <div className="flex flex-row justify-start items-start ">
      <Sidebar />
      <section className="flex flex-col w-full justify-center items-center">
        <MainPage />
      </section>
    </div>
  );
};

export default MainLayout;
