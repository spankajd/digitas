import * as React from "react";

import style from "./SlideNavButton.module.scss";

const NEXT_ARROW = '../../assets/images/Right_arrow.png';
const PREV_ARROW = '../../assets/images/Left_arrow.png';

const SlideNavButton = ({action = "next", onClick = () => {}}) => {
    return (
        <div className={`${style.wrapper} ${action === 'next' ? style.next : ''}`} onClick={onClick}> 
            <img src={action === 'next' ? require('../../assets/images/Right_arrow.png') : require('../../assets/images/Left_arrow.png')} alt="test" />
        </div> 
    )
}
export default SlideNavButton;