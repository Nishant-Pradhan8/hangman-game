import { useContext, useState, useEffect } from "react";
import DataContext from "../Context/context";
import Result from "./result";
import Paused from "./paused";
function Hangman() {
  const uppercaseAlphabet = Array.from(Array(26), (_, i) =>
    String.fromCharCode(i + 65)
  );
  const {
    categoryQn,
    health,
    setPlayAgain,
    playAgain,
    setResult,
    setHealth,
    mainRef,
    question,
    setQuestion,
  } = useContext(DataContext);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [pressedKeys, setPressedKeys] = useState([]);
  const isQuestionEmpty = Object.keys(question).length === 0;
  let questionArr;
  let modifiedQuestion;

  if (!isQuestionEmpty) {
    questionArr = question["name"].toUpperCase().split("");
    const filteredQn = questionArr.filter((ch) => ch !== " ");
    modifiedQuestion = [...new Set(filteredQn)];
  }

  useEffect(() => {
    if (Array.isArray(categoryQn) && categoryQn.length !== 0) {
      const randomIndex = Math.floor(Math.random() * categoryQn.length);
      setQuestion(categoryQn[randomIndex]);
      setPressedKeys([]);
      setGuessedLetters([]);
    }
    if (mainRef.current) {
      mainRef.current.focus();
    }
    setPlayAgain(false);
  }, [categoryQn, playAgain]);

  function handleAttempt(keyPressed) {
    if (keyPressed === " ") {
      return null;
    } else if (pressedKeys.includes(keyPressed)) {
      return null;
    }

    if (question["name"].toUpperCase().includes(keyPressed)) {
      const newGuessedLetters = [...guessedLetters, keyPressed];
      setGuessedLetters(newGuessedLetters);

      if (newGuessedLetters.length === modifiedQuestion.length) {
        const sortedGuessedLetters = [...newGuessedLetters].sort();
        const sortedQuestion = [...modifiedQuestion].sort();

        const checker = sortedGuessedLetters.every(
          (value, index) => value === sortedQuestion[index]
        );
        if (checker) {
          setResult("Win");
        }
      }
    } else {
      setHealth((num) => num - 20);
      if (health === 20) {
        setGuessedLetters(modifiedQuestion);
        setResult("Lose");
      }
    }
    const newPressedKeys = [...pressedKeys, keyPressed];
    setPressedKeys(newPressedKeys);
  }

  return (
    <main
      className="hangman-main"
      ref={mainRef}
      tabIndex={0}
      onKeyDown={(e) => handleAttempt(e.key.toUpperCase())}
    >
      <Result />
      <Paused />
      <div className="answer-tile-wrapper">
        {!isQuestionEmpty ? (
          questionArr.map((char, index) => (
            <div
              key={index}
              style={{ visibility: char === " " ? "hidden" : "visible" }}
              className="answer-tile"
            >
              <div
                className={
                  guessedLetters.includes(char)
                    ? "answer-tile-main answer-tile-main-reveal"
                    : "answer-tile-main"
                }
              >
                <p>{char}</p>
              </div>
            </div>
          ))
        ) : (
          <div style={{ color: "white" }}>Loading...</div>
        )}
      </div>
      <div className="keyboard-wrapper">
        {uppercaseAlphabet.map((k, index) => {
          return (
            <button
              value={k}
              onClick={(e) => handleAttempt(e.target.value)}
              key={index}
              className={
                pressedKeys.includes(k)
                  ? "keyborad-key keyborad-key-pressed key keyborad-key key"
                  : "keyborad-key key"
              }
            >
              {k}
            </button>
          );
        })}
      </div>
    </main>
  );
}

export default Hangman;
