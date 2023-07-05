import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); //it prevents the reload of the page
        if (!title || !desc) {
            alert("Titles Or Descriptions can't be left blank");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");

        }
    }
    let myStyle = {
        margin: "10px auto",
        width: "80vh"
    }

    return (
        <div classNameName='container my-3' style={myStyle}>
            <h3>Add a Todo </h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title" className='form-label'>Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control form-label" id="title" aria-describedby="emailHelp" placeholder="Enter Todo Title" />

                </div>
                <div className="form-group">
                    <label htmlFor="desc" className='form-label'>Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="Enter Todo Description " />
                </div>

                <button type="submit" className="btn btn-success ">Add Todo</button>
            </form>
        </div>
    )
}
