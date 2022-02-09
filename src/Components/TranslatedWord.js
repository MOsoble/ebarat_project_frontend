import JSONDATA from "/Users/mariamaosoble/ada/Ebarat_Project_Frontend/ebarat_project_frontend/src/related.json";
import React, { useState, useEffect } from "react";

function TranslatedWord({ searchTerm }) {
  let translation = "";
  let related_words = "";

  const word = JSONDATA["word"];
  if (word === searchTerm) {
    translation = JSONDATA["translated_word"];
    related_words = JSONDATA["similarWords"];
    console.log(related_words);
  }
  function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }
  let reversed_word_list = [];
  for (const related_word of related_words) {
    console.log(related_word);
    reversed_word_list.push(reverseString(related_word));
  }
  return (
    "Translation of " +
    searchTerm +
    " is " +
    translation +
    " and some related words are " +
    reversed_word_list
  );
}
export default TranslatedWord;
