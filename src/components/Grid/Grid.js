import {useEffect , React, useState} from "react";
import GridItem from "../GridItem/GridItem";


import style from "./Grid.module.scss";
// { "id": "25840126520",
// "owner": "77449999@N00",
// "secret": "6a67284a0e",
// "server": "1651",

const Grid = ({data}) => {
    useEffect( () => {
        console.log('data ' , data);
    },[data])
    return (
        <div className={style.wrapper}>
            {
                data.photo.map( (ele, i) => ( <GridItem dataset={data.photo} index={i} key={i} />)) 
            }
        </div> 
    )
}
export default Grid;