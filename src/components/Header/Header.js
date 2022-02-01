import * as React from "react"
import Logo from "../Logo/Logo";

import style from "./Header.module.scss";

const LBI_LOGO_PATH = "../../assets/images/LBi_Logo.png";
const FLICKR_LOGO_PATH = "../../assets/images/Flickr_Logo.png";

const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <Logo imgPath={LBI_LOGO_PATH}></Logo>
                <Logo imgPath={FLICKR_LOGO_PATH}></Logo>
            </div> 
        </div> 
    )
}
export default Header;