import "./App.css";
import SearchBar from "./Components/SearchBar.js";
import TranslatedRelatedWords from "./Components/TranslatedRelatedWords.js";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchedTerm] = useState("");
  const handleSearchClick = (newValue) => {
    setSearchedTerm(newValue);
  };

  if (searchTerm === "") {
    return (
      <div className="container">
        <header className="title">
          <h2>Ebarat</h2>
          <h5>Translate and Find Related Phrases</h5>
        </header>

        <main className="main">
          <div className="sidebar">
            <h5>
              Ebarat is a tool that can be used for translating words from
              English to Arabic and then finding words or phrases in Arabic that
              are similar or related to the searched term.
            </h5>
            <h5>
              This app can be used to find similar or related words both in
              Standard/Classical Arabic (al-ʻArabīyah al-Fuṣḥā العربية الفصحى)
              as well as colloquial Arabic in a variety of different dialects.
              Although the "Translation" will usually be in standard Arabic, the
              "related words" are likely to vary.{" "}
            </h5>
          </div>

          <div className="main-main">
            <div className="search-area">
              <SearchBar
                searchTerm={searchTerm}
                handleSearchClick={handleSearchClick}
              />

              <div className="word-prompt">
                <div> Please enter a word in order to start your search</div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div>
            {" "}
            This project runs using AraVec, a pre-trained distributed word
            representation (word embedding) open source project, along with the
            Google Translate API.{" "}
          </div>

          <div>
            {" "}
            If you have any feedback about our site, please contact us at
            info@ebarat.com
          </div>
        </footer>
      </div>
    );
  }
  return (
    <div className="container">
      <header className="title">
        <h2>Ebarat</h2>
        <h5>Translate and Find Related Phrases</h5>
      </header>

      <main className="main">
        <div className="sidebar">
          <h5>
            Ebarat is a tool that can be used for translating words from English
            to Arabic and then finding words or phrases in Arabic that are
            similar or related to the searched term.
          </h5>
          <h5>
            This app can be used to find similar or related words both in
            Standard/Classical Arabic (al-ʻArabīyah al-Fuṣḥā العربية الفصحى) as
            well as colloquial Arabic in a variety of different dialects.
            Although the "Translation" will usually be in standard Arabic, the
            "related words" are likely to vary.{" "}
          </h5>
        </div>
        <div className="main-main">
          <div className="search-area">
            <SearchBar
              searchTerm={searchTerm}
              handleSearchClick={handleSearchClick}
            />
          </div>
          <TranslatedRelatedWords searchTerm={searchTerm} />
        </div>
      </main>
      <footer className="footer">
        <div>
          {" "}
          This project runs using AraVec, a pre-trained distributed word
          representation (word embedding) open source project, along with the
          Google Translate API.{" "}
        </div>

        <div>
          {" "}
          If you have any feedback about our site, please contact us at
          info@ebarat.com
        </div>
      </footer>
    </div>
  );
}

export default App;
