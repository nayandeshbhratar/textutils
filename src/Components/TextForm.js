import React, { useState } from 'react';
  
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  } 
  const handleClearClick = () => {
    console.log("Clear was clicked" + text);
    let newText = '';
    setText(newText);
  } 
  const handleOnChange = (event) => {
    console.log("On Change ");
    setText(event.target.value);
  }
    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}  ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
