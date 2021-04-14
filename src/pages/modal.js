import React from "react";
import ComponentButton from "../components/Button";
import ComponentModal from "../components/Modal";

function action(){
    const myAlert = <ComponentModal />;
    myAlert.type()();
}

const Modal = () => {
    return (<div>
        <h1>My First Modal on React</h1>
        <ComponentButton label="Modal Button" action={action}/>
        </div>)
}

export default Modal;