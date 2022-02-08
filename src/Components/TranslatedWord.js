import JSONDATA from "/Users/mariamaosoble/ada/Ebarat_Project_Frontend/ebarat_project_frontend/src/Data.json";
import React, { useState, useEffect } from "react";

function TranslatedWord({ searchTerm }) {
  let translation = "";
  let related_words = "";
  for (const some_Object of JSONDATA) {
    const word = some_Object["word"];
    if (word === searchTerm) {
      console.log(some_Object["translation"]);
      translation = some_Object["translation"];
      related_words = some_Object["similarWords"];
      console.log(some_Object["similarWords"]);
    }
  }

  return (
    "Translation of " +
    searchTerm +
    " is " +
    translation +
    " and some related words are " +
    related_words
  );
}
export default TranslatedWord;
