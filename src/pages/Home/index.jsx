import NavBar from "./../../application/components/NavBar/NavBar";
import CoverPage from "./../Home/CoverPage/CoverPage";
import Updates from "./../Home/Updates/Updates";
import AboutUs from "./../Home/AboutUs/AboutUs";
import Menu from "./../Home/Menu/Menu";
import Reservation from "./../Home/Reservation/Reservation";
import Locations from "./../Home/Locations/Locations";
import Footer from "./../../application/components/Footer/Footer";

const Home = () => {


  return (
    <>
      <NavBar />
      <CoverPage />
      <Updates />
      <AboutUs />
      <Menu />
      <Reservation />
      <Locations />
      <Footer />
     
    </>
  );
};

export default Home;
