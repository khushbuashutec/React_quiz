import React from "react";
import classes from './header.module.css'

function Header (props){
    return(
        <div>
        <header className={classes.header}>
                <p>Dynamic Quiz</p>
             </header>
             </div>
    )
}
export default Header