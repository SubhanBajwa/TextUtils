import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("UpperCase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text conveted to upper case","success");
    }

    const handleTextclr = ()=> {
        // console.log("UpperCase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleLoClick = ()=> {
        // console.log("UpperCase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text conveted to lower case","success")
    }

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success")
    } 

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")

    }

    const [text, setText] = useState('Enter text here');
    //text = "new text"; //Wrong way to set text
    //setText('New Text'); //Correct way to set text
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode === 'dark'?'grey':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} value={text} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleTextclr}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>RemoveExtraSpaces</button> 
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
