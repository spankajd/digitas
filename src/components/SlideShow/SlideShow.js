import {useEffect, React, useState} from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { useParams, useNavigate } from 'react-router-dom';
import SlideNavButton from "../SlideNavButton/SlideNavButton";

import {findIndex} from "lodash";

import style from "./SlideShow.module.scss";
import DownloadButton from "../DownloadButton/DownloadButton";

const SlideShow = ({data}) => {

    const [index, setIndex] = useState();
    const { id } = useParams();
    const history = useNavigate();

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
        history(`/slide/${data.photo[index-1].id}`);
    }

    const onNextClick = () => {
        history(`/slide/${data.photo[index+1].id}`);
    }

    return (
        <>
            {data && data.photo && index && data.photo[index] && 
                (<div className={style.wrapper}>
                    <div className={style.imageWrapper}>
                        <SlideNavButton action="prev" onClick={onPrevClick}></SlideNavButton>
                        <img className={style.image} src={`https://live.staticflickr.com/${data.photo[index].server}/${data.photo[index].id}_${data.photo[index].secret}.jpg`} alt={data.photo[index].title}/>
                        <SlideNavButton action="next" onClick={onNextClick}></SlideNavButton>
                    </div>
                    <div className={style.detailsWrapper}>
                        <div className={style.row}>
                            <div className={style.caption}><strong>{data.photo[index].title}</strong></div>
                            <div className={style.countDetails}>{data.page+index} of {data.total}</div>
                        </div>
                        <div className={style.row}>
                            <div className={style.owner}>By {data.photo[index].ownername}</div>
                            <DownloadButton customClass={style.downloadButton} secondary={true} imgPath={`https://live.staticflickr.com/${data.photo[index].server}/${data.photo[index].id}_${data.photo[index].secret}.jpg`}/>
                        </div> 
                    </div> 
                </div> )
            }
        </>
    )
}
export default SlideShow;