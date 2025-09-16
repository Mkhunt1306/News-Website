import React, { useState } from "react";

export default function Form(props) {
  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handleupChange = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Convert into UpperCase!", "success");
  };

  const handleloChange = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Convert into LowerCase!", "success");
  };

  const handlectChange = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear!", "success");
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Cpoy!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-5 " style={props.myStyle}>
        <h3>Enter Your Text!</h3>

        <div className="form-group">
          <textarea
            className="form-control mb-3"
            value={text}
            onChange={handleonChange}
            id="Textarea"
            rows="6"
          ></textarea>

          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.trim() === ""}
            onClick={handleupChange}
          >
            Convert To UpperCase
          </button>

          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.trim() === ""}
            onClick={handleloChange}
          >
            Convert To LowerCase
          </button>

          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handlecopy}
            disabled={text.trim() === ""}
          >
            Copy Text
          </button>

          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.trim() === ""}
            onClick={handlectChange}
          >
            Clear Text
          </button>

          <h2 className="my-4">Your Text Summery</h2>
          <p>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
            words and {text.length} charcters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => element.length !== 0)
                .length}{" "}
            Minutes in Read
          </p>
        </div>
      </div>
    </>
  );
}
