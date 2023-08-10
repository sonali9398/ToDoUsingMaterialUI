import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./App.css"
import List from "./List.jsx";

const ToDoList = () =>{
    const [item, setItem] = useState();
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (e) =>{
        setItem(e.target.value)
    }

    const listItem = () =>{
        setNewItem((prev) =>{
            return [...prev, item]
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text"
                            value={item}
                            placeholder="Enter Text"
                            onChange={itemEvent}
                            />
                    <Button className="Button" onClick={listItem}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {newItem.map((val, index) =>{
                            return <List key={index} text={val}/>;
                        })}
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    )
}

export default ToDoList;
