import React from "react";
import './styles.css';

const ComponentButton = ({label, action}) => {
    return <button onClick={action} class="button">{label}</button>
}

export default ComponentButton;