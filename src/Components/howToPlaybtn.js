import { useNavigate } from "react-router-dom";

const HowToPlayBtn = () => {
  const navigate = useNavigate();
  function handelHowToPlay() {
    navigate("/howtoplay");
  }

  return (
    <div className="htp-btn-wrapper">
      <button className="htp-btn" onClick={handelHowToPlay}>
        HOW TO PLAY
      </button>
    </div>
  );
};
export default HowToPlayBtn;
