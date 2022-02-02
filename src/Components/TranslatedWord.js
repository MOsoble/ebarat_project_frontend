import React from "react";

function TranslatedWord() {
  const RelatedWordData = {
    Car: ["Ford", "BMW", "Fiat", "Toyota", "Honda"],
    Couch: ["Chair", "Furniture", "Bed"],
    Mariama: ["Hana", "Sabrina", "Yasmine"],
  };

  for (let word in RelatedWordData) {
    return word;
  }
}
export default TranslatedWord;
