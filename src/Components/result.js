import { useContext } from "react";
import DataContext from "../Context/context";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { result, setResult, setPlayAgain, setHealth, question } =
    useContext(DataContext);

  function handelResultButtonsClick(action) {
    if (action === "PLAY AGAIN") {
      setPlayAgain(true);
      navigate("/hangman");
    } else if (action === "NEW CATEGORY") {
      navigate("/categories");
    } else {
      navigate("/");
    }
    setResult("");
    setHealth(100);
  }
  
  return (
    <div
      style={{ display: result !== "" ? "flex" : "none" }}
      className="result-div"
    >
      <h1 className="header-title result-title">You {result}</h1>
      <p className="correct-ans">Correct answer was "{question["name"]}"</p>
      <button
        onClick={() => handelResultButtonsClick("PLAY AGAIN")}
        className="primary-btn primary-btn-result"
      >
        PLAY AGAIN
      </button>
      <button
        onClick={() => handelResultButtonsClick("NEW CATEGORY")}
        className="primary-btn primary-btn-result"
      >
        NEW CATEGORY
      </button>
      <button
        onClick={() => handelResultButtonsClick("Quit Game")}
        className="primary-btn secondary-btn primary-btn-result"
      >
        QUIT GAME
      </button>
    </div>
  );
};
export default Result;
