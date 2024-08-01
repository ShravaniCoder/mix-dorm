import { useState } from "react";
import TopNavbar from "./pages/TopNavbar";
import SideNavbar from "./pages/Sidenavbar";
import MainContent from "./pages/MainContent";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative flex">
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 w-56`}
      >
        <SideNavbar closeSidebar={closeSidebar} />
      </div>
      <div className="flex-1 flex flex-col">
        <TopNavbar toggleSidebar={toggleSidebar} />
        <MainContent />
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
}

export default App;
