import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../Context/context";

function Paused() {
  const { paused, setPaused, mainRef } = useContext(DataContext);
  const navigate = useNavigate();
  
  function handlePause(action) {
    if (action === "CONTINUE") {
      mainRef.current.focus();
      setPaused(false);
    } else if (action === "NEW CATEGORY") {
      setPaused(false);
      navigate("/categories");
    } else {
      setPaused(false);
      navigate("/");
    }
  }

  return (
    <div style={{ display: paused ? "flex" : "none" }} className="result-div">
      <button
        onClick={() => handlePause("CONTINUE")}
        className="primary-btn primary-btn-result"
      >
        CONTINUE
      </button>
      <button
        onClick={() => handlePause("NEW CATEGORY")}
        className="primary-btn primary-btn-result"
      >
        NEW CATEGORY
      </button>
      <button
        onClick={() => handlePause("Quit Game")}
        className="primary-btn secondary-btn primary-btn-result"
      >
        QUIT
      </button>
    </div>
  );
}
export default Paused;
