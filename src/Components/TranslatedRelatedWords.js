import JSONDATA from "/Users/mariamaosoble/ada/Ebarat_Project_Frontend/ebarat_project_frontend/src/related.json";
import React, { useState, useEffect } from "react";
import "./TranslatedRelatedWords.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function TranslatedRelatedWords({ searchTerm }) {
  let translation = "";
  let related_words = "";

  const word = JSONDATA["word"];
  if (word === searchTerm) {
    translation = JSONDATA["translated_word"];
    related_words = JSONDATA["related_words"];
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
  // word cloud //
  const wordcloudlist = [];

  function SimpleWordcloud() {
    for (const [i, reversed_word] of reversed_word_list.entries()) {
      wordcloudlist.push({ text: reversed_word, value: 40 - i });
    }
    return <ReactWordcloud words={wordcloudlist} />;
  }
  // end word cloud code //
  function reverse_word_items() {
    var wordsList = reversed_word_list.map(function (word) {
      return <li>{word}</li>;
    });

    return <ol>{wordsList}</ol>;
  }

  return (
    <div>
      <div>{"Translation of "}</div>
      <div>{searchTerm}</div>
      <div>{" is "}</div>
      <div>{translation}</div>
      <div>{" and some related words are "}</div>
      <div>{SimpleWordcloud()}</div>
      <div>{reverse_word_items()}</div>
    </div>
  );
}
export default TranslatedRelatedWords;
