import React, { useState, useEffect } from "react";
import "./TranslatedRelatedWords.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Axios from "axios";

function TranslatedRelatedWords({ searchTerm }) {
  let word = searchTerm;
  const [translation, setTranslation] = useState("");
  const [related_words, setRelated] = useState([]);
  const handleAxiosTrans = (newTrans) => {
    setTranslation(newTrans);
  };
  const handleAxiosRel = (newRel) => {
    setRelated(newRel);
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/related", {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5000",
      },
      params: { word },
    }).then((response) => {
      handleAxiosTrans(response.data.translated_word);
      handleAxiosRel(response.data.related_words);
    });
  }, [word]);

  function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }
  let reversed_word_list = [];
  for (const related_word of related_words) {
    reversed_word_list.push(reverseString(related_word));
  }
  // word cloud //
  const wordcloudlist = [];

  function SimpleWordcloud() {
    for (const [i, reversed_word] of reversed_word_list.entries()) {
      wordcloudlist.push({ text: reversed_word, value: 200 - 30 * i });
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
    <div className="related-words-area">
      <div className="translation-area">
        <div>{"Translation of "}</div>
        <div className="english-word">{searchTerm}</div>
        <div>{" is "}</div>
        <div className="arabic-word">{translation}</div>
        <h2 className="related-heading">{" Related Terms "}</h2>
      </div>
      <div className="word_cloud">{SimpleWordcloud()}</div>
      <div>{reverse_word_items()}</div>
    </div>
  );
}
export default TranslatedRelatedWords;
