import useFetch from "../api/api";
import { createContext, useState, useEffect, useRef } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedCat, setSelectedCat] = useState(
    localStorage.getItem("Selected Category") || ""
  );
  const { categories, categoryQn } = useFetch(selectedCat);
  const [health, setHealth] = useState(100);
  const [result, setResult] = useState("");
  const [playAgain, setPlayAgain] = useState(false);
  const [paused, setPaused] = useState(false);
  const mainRef = useRef(null);
  const [question, setQuestion] = useState({});

  function handelSelctedCategory(selected) {
    setSelectedCat(selected);
    localStorage.setItem("Selected Category", selected);
  }

  useEffect(() => {
    if (health === 0) {
      setResult("Lose");
    }
  }, [health]);
  
  return (
    <DataContext.Provider
      value={{
        categories,
        selectedCat,
        setSelectedCat,
        question,
        setQuestion,
        playAgain,
        paused,
        mainRef,
        setPaused,
        setPlayAgain,
        handelSelctedCategory,
        categoryQn,
        health,
        result,
        setResult,
        setHealth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
