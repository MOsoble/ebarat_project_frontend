import React from "react";

function RelatedWords() {
  const RelatedWordData = {
    Car: ["Ford", "BMW", "Fiat", "Toyota", "Honda"],
    Couch: ["Chair", "Furniture", "Bed"],
    Mariama: ["Hana", "Sabrina", "Yasmine"],
  };

  for (let word in RelatedWordData) {
    return RelatedWordData[word];
  }
}
export default RelatedWords;
