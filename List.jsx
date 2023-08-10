import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const List = (props) =>{
    const [line, setLine] = useState(false);

    const cut =()=>{
        setLine(true);
    }
    return(
        <>
            <div className="todo_style">
                <span onClick={cut}>
                    <DeleteOutlineIcon className="deleteIcon"/>
                </span>
                <li style={{textDecoration:line ? "line-through" : "none"}}>
                    {props.text}
                </li>
            </div>
        </>
    )
}

export default List;
