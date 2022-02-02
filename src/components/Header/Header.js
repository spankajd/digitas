import * as React from "react"
import Logo from "../Logo/Logo";

import style from "./Header.module.scss";

const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <Logo digitas={true} ></Logo>
                <Logo></Logo>
            </div> 
        </div> 
    )
}
export default Header;