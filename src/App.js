import "./App.css";
import SearchBar from "./Components/SearchBar.js";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RelatedWords from "./Components/RelatedWords.js";
import TranslatedWord from "./Components/TranslatedWord.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ebarat</h2>
        <h5>Where translations and related words happen lol</h5>
      </header>
      <div>
        <SearchBar placeholder="Enter a word in English" />
        <TranslatedWord />
      </div>

      <div className="Middle Arrow">
        <ArrowCircleRightIcon />
      </div>

      <main className="main">
        {/* for word in related words: put a button */}
        <button>this is a button</button>
        <RelatedWords />
        <button>this is a button </button>
      </main>
    </div>
  );
}

export default App;
