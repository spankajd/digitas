import * as React from "react";

import style from "./Logo.module.scss";

const Logo = ({imgPath}) => {
    console.log('path !!' , imgPath);
    return (
        <div className={style.wrapper}>
            {/* {imgPath && (<img  src={require(`${imgPath}`)} alt={"ds"}/>)} */}
            <img src={require(`../../assets/images/Flickr_Logo.png`)} alt="ds" />
        </div> 
    )
}
export default Logo;