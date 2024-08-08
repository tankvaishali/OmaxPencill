import "../assets/css/Home.css";
import HOC from "./HOC";
import HomeAbout from "./HomeAbout";
import HomeBlog from "./HomeBlog";
import HomeCarousel from "./HomeCarousel";
import HomeContact from "./HomeContact";
import HomeProducts from "./HomeProducts";
import HomeTeam from "./HomeTeam";
import Homecomments from "./Homecomments";
import LogoRun from "./LogoRun";
;



;

function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeProducts />
      <HomeAbout />
      <HomeTeam />
      <Homecomments />
      <HomeBlog />
      <HomeContact />
      <LogoRun />
    </>
  );
}

export default HOC(Home);
