import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words, {text.length} characters,{" "}
          {text.split(/\n\s*\n/).length} paragraphs
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </>
  );
}
