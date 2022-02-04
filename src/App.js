import "./App.css";
import SearchBar from "./Components/SearchBar.js";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RelatedWords from "./Components/RelatedWord.js";
import TranslatedWord from "./Components/TranslatedWord.js";
import { useState } from "react";

function App() {
  const [searchedWord, setSearchedWord] = useState("");
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
          <div className="search-area">
            <SearchBar
              setWord={setSearchedWord}
              placeholder="Enter a word in English"
            />
            <ArrowCircleRightIcon />
            <TranslatedWord currentWord={searchedWord} />
          </div>
          <div className="related-words-area">
            <h5>Words related to your searched word</h5>
            {/* for word in related words: put a button */}
            <RelatedWords />
          </div>
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
