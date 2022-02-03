import "./App.css";
import SearchBar from "./Components/SearchBar.js";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RelatedWords from "./Components/RelatedWord.js";
import TranslatedWord from "./Components/TranslatedWord.js";
import { useState } from "react";

function App() {
  const [searchedWord, setSearchedWord] = useState("house");
  /*   */
  return (
    <div className="container">
      <header className="title">
        <h2>Ebarat</h2>
        <h5>Translate and Find Related Phrases</h5>
      </header>

      <main className="main">
        <div className="sidebar">
          <h5>
            Ebarat is a webapp for translating words from English to Arabic and
            then finding some related words in Arabic
          </h5>
        </div>
        <div className="main-main">
          <ArrowCircleRightIcon />
          <SearchBar
            setWord={setSearchedWord}
            placeholder="Enter a word in English"
          />
          <TranslatedWord currentWord={searchedWord} />
          {/* for word in related words: put a button */}
          <button>this is a button</button>
          <RelatedWords />
          <button>this is a button </button>
        </div>
      </main>
      <footer className="footer">this is the footer area</footer>
    </div>
  );
}

/* 
App 
  div
    header
    div
      searchbar
      translatedword (word)
      ...
      ..

        searchbar

        store
*/

export default App;
