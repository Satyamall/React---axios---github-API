import { useState } from "react"


export default function Search({onTask}){

    const [text,SetText]=useState("");

    const handleChange=(e)=>{
        SetText(e.target.value);
    }

    const handleCLick=(e)=>{
        e.preventDefault();
        onTask(text);
        SetText("");
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <input type="text" 
            placeholder="Search by users name" 
            value={text}
            onChange={handleChange}
            style={{ padding: "10px 30px", border: "1px solid gray", borderRadius: "10px",background: "black",color: "white",fontSize: "20px"}}
            />
            <button style={{ padding: "10px 20px", border: "1px solid gray", borderRadius: "10px", fontSize: "20px", background: "black",color: "white"}} onClick={handleCLick}>+</button>
        </div>
    )
}