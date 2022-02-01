import {useEffect, React, useState} from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { useParams } from 'react-router-dom';
import SlideNavButton from "../SlideNavButton/SlideNavButton";

import {findIndex} from "lodash";

import style from "./SlideShow.module.scss";

const SlideShow = ({data}) => {

    const [index, setIndex] = useState();
    const { id } = useParams();

    useEffect( () => {
        console.log('id ' , id);
    },[]);
    
    useEffect( () => {
        if(id && data) {
            console.log('>>>>>>>> ' , id , data , findIndex(data.photo, item => (item.id == id)), data.photo[1]);
            setIndex(findIndex(data.photo, item => (item.id === id)));
        }   
    },[id, data]);

    const onPrevClick = () => {

    }

    const onNextClick = () => {

    }

    return (
        <div className={style.wrapper}>
            { data && data.photo && index && 
                (<div className={style.imageWrapper}>
                    <SlideNavButton action="prev" onPrevClick={onPrevClick}></SlideNavButton>
                    {/* <StaticImage src={`${list[index].url}`} alt="Slide Show"/> */}
                    <img className={style.image} src={`https://live.staticflickr.com/${data.photo[index].server}/${data.photo[index].id}_${data.photo[index].secret}.jpg`} alt={data.photo[index].title}/>
                    <SlideNavButton action="next" onNextClick={onNextClick}></SlideNavButton>
                </div>)
            }
            <div className={style.detailsWrapper}>
                <div className={style.row}>
                    <div className={style.caption}>Picture caption if available</div>
                    <div className={style.countDetails}>11 of 1231</div>
                </div>
                <div className={style.row}>
                    <div className={style.owner}>By Owner Name</div>
                    <div className={style.downloadLink}>Download link</div>
                </div> 
            </div> 
        </div> 
    )
}
export default SlideShow;