import Header from "../components/header/Header";
import SidebarMenu from "../components/sidebar/Sidebar";
import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  const { darkMode } = useTheme();
  return (
    // <div
    //   className={`App ${
    //     darkMode ? "dark" : "light"
    //   } grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-flow-row-dense gap-3 direction-rtl`}
    // >
    //   <div className="md:col-span-1 lg:col-span-1">
    //     <SidebarMenu />
    //   </div>
    //   <div className="md:col-span-1 lg:col-span-3">
    //     <Header />
    //     <div>Dashboard</div>
    //   </div>
    // </div>
    <div
      className={`App ${darkMode ? "dark" : "light"} flex direction-rtl gap-6`}
    >
      <div className="h-screen bg-slate-400">
        <SidebarMenu />
      </div>
      <div>
        <Header />
        <div>Dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;
