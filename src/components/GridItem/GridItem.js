import * as React from "react";
import {Link} from "react-router-dom";

import DownloadButton from "../DownloadButton/DownloadButton";


import style from "./GridItem.module.scss";

const GridItem = ({dataset=[], index=0}) => {
    return (
        <Link to={`slide/${dataset[index].id}`} className={style.wrapper}>
            { dataset[index] && (<img src={`https://live.staticflickr.com/${dataset[index].server}/${dataset[index].id}_${dataset[index].secret}.jpg`} alt={dataset[index].title}/>) }
            <div className={style.onHover}>
                <DownloadButton customClass={style.grideDownloadButton} imgPath={`https://live.staticflickr.com/${dataset[index].server}/${dataset[index].id}_${dataset[index].secret}.jpg`}></DownloadButton> 
            </div> 
        </Link> 
    )
}
export default GridItem;