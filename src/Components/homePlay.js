import { useNavigate } from "react-router-dom";
const HomePlay = () => {
  const navigate = useNavigate();

  function handlePlay() {
    navigate("/categories");
  }
  
  return (
    <div
      onClick={handlePlay}
      className="play-icon-wrapper bg-gradient-to-b from-[#fc90fc] to-[#7199FF]"
    >
      <img className="w-[7rem]" src="hangman-game/images/icon-play.svg" />
    </div>
  );
};
export default HomePlay;
