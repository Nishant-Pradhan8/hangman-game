import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../Context/context";
const Header = () => {
  const { health, setPaused, selectedCat } = useContext(DataContext);
  const [headerText, setHeaderText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateHome = () => {
    if (location.pathname !== "/hangman") {
      navigate("/");
    } else {
      setPaused(true);
    }
  };

  useEffect(() => {
    if (location.pathname === "/howtoplay") {
      setHeaderText("How To Play");
    } else if (location.pathname === "/categories") {
      setHeaderText("Pick a Category");
    } else if (location.pathname === "/hangman") {
      setHeaderText(selectedCat);
    }
  }, [location.pathname]);

  return (
    <header
      className="header"
      style={{ display: location.pathname === "/" ? "none" : "flex" }}
    >
      <div
        onClick={handleNavigateHome}
        className=" return-div bg-gradient-to-b from-[#fc90fc] to-[#7199FF]"
      >
        <img alt="menu/back icon"
          src={
            location.pathname === "/hangman"
              ? "./images/icon-menu.svg"
              : "./images/icon-back.svg"
          }
        />
      </div>
      <h1 className="header-title">{headerText}</h1>
      <div
        style={{ display: location.pathname !== "/hangman" ? "none" : "flex" }}
        className="health-wrapper"
      >
        <div className="health-bar">
          <div
            style={{ width: `${health}%` }}
            className="health-bar-state"
          ></div>
        </div>
        <img className="w-9" src="./images/icon-heart.svg" />
      </div>
    </header>
  );
};
export default Header;
