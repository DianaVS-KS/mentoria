import React from "react";
import ComponentImage from "../components/Image";
import picture from '../assets/FotoCV.jpg';

const Image = () => {
    return (<div>
        <h1>My Picture on React</h1>
        <ComponentImage picSource={picture} altText="Diana" />
        </div>)
}

export default Image;