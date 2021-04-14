import React from "react";
import './styles.css';

const ComponentImage = ({picSource, altText}) => {
    return <img src={picSource} alt={altText} class="pic"/>
}

export default ComponentImage;