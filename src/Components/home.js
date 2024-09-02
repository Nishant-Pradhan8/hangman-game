import HomeLogo from "./homeLogo";
import HomePlay from "./homePlay";
import HowToPlayBtn from "./howToPlaybtn";

const Home = () => {
  return (
    <main className="main">
      <div className="main-div-wrapper">
        <div className="shadow-div">
          <HomeLogo />
          <HomePlay />
          <HowToPlayBtn />
        </div>
      </div>
    </main>
  );
};
export default Home;
