import React from "react";

function TranslatedWord({ currentWord }) {
  const RelatedWordData = {
    Car: ["Ford", "BMW", "Fiat", "Toyota", "Honda"],
    Couch: ["Chair", "Furniture", "Bed"],
    Girl: ["Hana", "Sabrina", "Yasmine"],
  };
  console.log(currentWord);
  let the_word = " ";
  for (let word in RelatedWordData) {
    the_word = word;
  }
  return "Translation of " + currentWord + " is " + the_word;
}
export default TranslatedWord;
