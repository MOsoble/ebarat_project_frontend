import React from "react";

// function related_output()=>{
//   const x=2;

function relatedWords({ data }) {
  let sentence = "";
  for (let word in data) {
    console.log(word);
    sentence += word;
  }

  return <div className="dataResult"> {sentence}</div>;
}
export default relatedWords;
