import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    //console.log("Upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
  }

   const handleLowClick = () =>{
    //console.log("Upper case was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
  }
   const handleClearClick = () =>{
    //console.log("Upper case was clicked"+text);
    setText("");
   }
   const handleCopyClick = () =>{
    navigator.clipboard.writeText(text);
   }

  const handleOnChange = (event) =>{
   // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  //setText("new text")
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary my-2 mx-3" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
    <button className="btn btn-primary my-2 mx-3" onClick={handleLowClick} disabled={text.length === 0}>Convert to Lowercase</button>
    <button className="btn btn-primary my-2 mx-3" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
    <button className="btn btn-primary my-2 mx-3" onClick={handleCopyClick} disabled={text.length === 0}>Copy Text</button>
      </div>
    </div>
    <div className="container my-3">
      <h2>Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
