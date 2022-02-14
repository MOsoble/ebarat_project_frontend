// import JSONDATA from "/Users/mariamaosoble/ada/Ebarat_Project_Frontend/ebarat_project_frontend/src/related.json";
import React, { useState, useEffect, setState, state } from "react";
import "./TranslatedRelatedWords.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Axios from "axios";

function TranslatedRelatedWords({ searchTerm }) {
  var translation = "";
  var related_words = "";
  let word = searchTerm;
  //////
  // const getData = async () => {
  //   await Axios.get("http://localhost:5000/related", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "http://localhost:5000",
  //     },
  //     params: { word },
  //   }).then((response) => {
  //     translation = response.data.translated_word;
  //     related_words = response.data.related_words;
  //     console.log("first console log");
  //     console.log(translation);
  //   });
  /////////
  // fetch("localhost:5000/related", {
  //   params: {
  //     word: { searchTerm },
  //   },
  // })
  //   .then((response) => {
  //     translation = response.data.translated_word;
  //     related_words = response.data.related_words;
  //     console.log("first console log");
  //     console.log(translation);
  //   })
  //   .then((data) => console.log(data));
  //   getData.setState({ translation });
  // };
  // getData();

  let getData = (callback) => {
    Axios.get("http://localhost:5000/related", {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5000",
      },
      params: { word },
    })
      .then((response) => {
        callback(response.data.translated_word);
        // translation = response.data.translated_word;
        callback(response.data.related_words);
        // console.log("first console log");
        // console.log(translation);
      })
      .then(console.log(translation));
  };

  getData(function (response) {
    if (typeof response === "string") {
      translation = response;
    } else {
      related_words = response;
    }
  });
  console.log(translation);
  console.log(related_words);
  // const word = JSONDATA["word"];
  // if (word === searchTerm) {
  //   translation = JSONDATA["translated_word"];
  //   related_words = JSONDATA["related_words"];
  // }

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
    <div className="related-words-area">
      <div className="translation-area">
        <div>{"Translation of "}</div>
        <div className="english-word">{searchTerm}</div>
        <div>{" is "}</div>
        <div className="arabic-word">{translation}</div>
        <h2 className="related-heading">{" Related Terms "}</h2>
      </div>
      <div className="word_cloud">{SimpleWordcloud()}</div>
      <div className="related_words">{reverse_word_items()}</div>
    </div>
  );
}
export default TranslatedRelatedWords;
