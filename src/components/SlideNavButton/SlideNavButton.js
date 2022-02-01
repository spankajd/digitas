import * as React from "react";

import style from "./SlideNavButton.module.scss";

const NEXT_ARROW = '../../assets/images/Right_arrow.png';
const PREV_ARROW = '../../assets/images/Left_arrow.png';

const SlideNavButton = ({action = "next"}) => {
    return (
        <div className={`${style.wrapper} ${action === 'next' ? style.next : ''}`}> 
            <img src={require('../../assets/images/Left_arrow.png')} alt="test" />
        </div> 
    )
}
export default SlideNavButton;