import DataContext from "../Context/context";
import { useContext } from "react";

function Overlay() {
  const { result, paused } = useContext(DataContext);
  return (
    <div
      style={{ display: result !== "" || paused ? "block" : "none" }}
      className="overlay"
    ></div>
  );
}

export default Overlay;
