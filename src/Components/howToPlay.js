const HowToPlay = () => {
  return (
    <main className="htp-main">
      <div className="htp-wrapper">
        <div className="cards">
          <div className="cards-title">
            <h1 className="htp-index">
              01<span className="htp-title">CHOOSE A CATEGORY</span>
            </h1>
          </div>
          <div className="cards-content">
            <p className="cards-p">
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="cards-title">
            <h1 className="htp-index">
              02<span className="htp-title">GUESS LETTERS</span>
            </h1>
          </div>
          <div className="cards-content">
            <p className="cards-p">
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it's wrong, you lose
              some health, which empties after eight incorrect guesses.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="cards-title">
            <h1 className="htp-index">
              03<span className="htp-title">WIN OR LOSE</span>
            </h1>
          </div>
          <div className="cards-content">
            <p className="cards-p">
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HowToPlay;
