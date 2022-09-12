import React from "react";
import "./style.css"

export default () => {
    return <header>
        <a href="/"
         className="header_logo">DevsBlog</a>
         <nav className="header_menu">
            <a href="/" 
            className="header_btn">Create
            post</a>
         </nav>
    </header>
}