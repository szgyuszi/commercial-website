import Sidebar from "../../../common/Sidebar";
import MainPage from "./MainPage";

const MainLayout = () => {
  return (
    <div className="flex flex-row justify-between items-start ">
      <Sidebar />
      <MainPage />
    </div>
  );
};

export default MainLayout;
