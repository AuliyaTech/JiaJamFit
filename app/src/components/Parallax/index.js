import React from 'react';
import "./style.css";

function Parallax(props) {
    return(
        <div className="parallax">

            {props.children}

        </div>

    )
}

export default Parallax;