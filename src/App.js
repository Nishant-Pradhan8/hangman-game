import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import HowToPlay from "./Components/howToPlay";
import Header from "./Components/header";
import Categories from "./Components/categories";
import Hangman from "./Components/hangman";
import Overlay from "./Components/overlay";

function App() {
  return (
    <div className="app">
      <Overlay />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/howtoplay" element={<HowToPlay />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/hangman" element={<Hangman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
