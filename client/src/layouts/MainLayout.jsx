import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="page-content">
        {children}
      </div>
    </>
  );
}

export default MainLayout;