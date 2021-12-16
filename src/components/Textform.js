import React,{useState} from 'react'


export default function Textform(props) {
    const [text, setxText] = useState("");
    const handleUpClick = () =>{
        let newtext=text.toUpperCase();
        setxText(newtext);
        props.showAlert("Converted to UpperCase!","success")
    } 
    const handleLowClick = () =>{
        let newtext=text.toLowerCase();
        setxText(newtext);
        props.showAlert("Converted to LowerCase!","success")
    } 
    const handleOnChange = (event) =>{
        //console.log("OnChange");
        setxText(event.target.value);
    }
    const handleClearClick = () =>{
        let newtext='';
        setxText(newtext);
        props.showAlert("Text Cleared!","success")
    } 
    const handleCopyClick = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success")
    }
    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setxText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success")
    }

    return (
        <>
        <div className="conatiner" style={{color:props.mode=== 'dark' ? 'white':'#042743'}} >
        <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'grey':'white',color:props.mode=== 'dark' ? 'white':'#042743'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>
                Convert to LowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                Clear text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
                Copy text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>
        </div>
        <div className="container my-2"  style={{color:props.mode=== 'dark' ? 'white':'#042743'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>
        </>
    )
}
