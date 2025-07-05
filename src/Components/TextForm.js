import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    //console.log("Upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event) =>{
   // console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text here');
  //setText("new text")
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
