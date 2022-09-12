import React from "react";
import "./style.css";

export default () => {
    return <footer>
        <span className="footer__copy">
            &copy;{new Date().getFullYear()}
        </span>
        <span> Made by&nbsp;
            <a href="https://github.com/Goryunov1" 
                className="footer_autor"
                target="_blank"
            >Alex</a>
        </span>
    </footer>
}