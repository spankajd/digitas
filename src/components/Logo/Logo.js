import * as React from "react";

import style from "./Logo.module.scss";

const Logo = ({digitas=false}) => {
    return (
        <div className={style.wrapper}>
            <img src={digitas ? require(`../../assets/images/LBi_Logo.png`) : require(`../../assets/images/Flickr_Logo.png`)} alt="ds" />
        </div> 
    )
}
export default Logo;