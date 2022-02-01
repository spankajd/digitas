import * as React from "react";


import style from "./Button.module.scss";

const Button = ({label,  onClick, secondary, customClass  }) => {
    const onButtonClick = (e) => {
        console.log('onButtonClick',e)
        if(onClick) {
            onClick(e);
        } 
    }

    return (
        <div className={`${style.wrapper} ${secondary ? style.secondary : ''} ${customClass ? customClass : ''}`} onClick={onButtonClick}>{label}</div> 
    )
}
export default Button;