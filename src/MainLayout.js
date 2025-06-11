// MainLayout.js
import { Outlet } from "react-router-dom";
import Navigation from "./components/main/Navigation";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

/**
 * Renders the main application layout with navigation, header, nested route content, and footer.
 *
 * @param {{ certifications: any }} data - Data object containing certifications to be passed to the navigation.
 * @returns {JSX.Element} The composed layout structure.
 */

function MainLayout({ data ={} }) {
  return (
    <>
      <Navigation certifications={data.certifications ?? [] } />
      <div className="container" style={{ marginTop: "80px" }}>
        <Header />
        {/* This is where nested routes will render */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
