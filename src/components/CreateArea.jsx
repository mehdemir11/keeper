import React, { useState } from "react";

export default function CreateArea(props){
    const [note,setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const {name,value} = event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input type="text" 
                onChange={handleChange} 
                value={note.title} 
                name="title" 
                placeholder="Title" 
                />
                <textarea name="content" 
                value={note.content} 
                onChange={handleChange}
                placeholder="Take a note.." 
                cols="30" 
                rows="3"></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}