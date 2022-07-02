import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick= ()=>{
        const newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick= ()=>{
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleSenClick= ()=>{
        const sentence=text.split(".");
        for(let i=0;i<sentence.length;i++){
            sentence[i] = sentence[i][1].toUpperCase() + sentence[i].slice(2).toLowerCase();
        }
        setText(sentence.join(". "));
        props.showAlert("Converted to Sentence Case","success");
    }

    const handleTitleClick= ()=>{
        const sentence=text.split(" ");
        for(let i=0;i<sentence.length;i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1).toLowerCase();
        }
        setText(sentence.join(" "));
        props.showAlert("Converted to Title Case","success");
    }

    const handleAltClick= ()=>{
        const sentence=text.toLowerCase().split("");
        for(let i=0;i<sentence.length;i+=2){
                sentence[i]=sentence[i].toUpperCase();

            }
            setText(sentence.join(""));
            props.showAlert("Converted to Alternate Case","success");
    }

    const handleClearClick= ()=>{
        const newText="";
        setText(newText);
        props.showAlert("Cleared Textbox","warning");
    }

    const handleCopy= ()=>{
        navigator.clipboard.writeText(text);      
        props.showAlert("Copied to Clipboard","success");
    }

    const handleOnChange= (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#aeadad':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'secondary'} my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-2 my-2`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-2 my-2`} onClick={handleSenClick}>Convert to Sentence Case</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-2 my-2`} onClick={handleTitleClick}>Convert to Title Case</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-2 my-2`} onClick={handleAltClick}>Convert to Alternate Case</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-2 my-2`} onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-2 my-2`} onClick={handleClearClick}>Clear</button>
                
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
        
    )
}
