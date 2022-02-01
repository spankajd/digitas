import {useEffect , React, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button/Button';
import {getDataFromFlickr} from '../helper';

import SlideShow from "../components/SlideShow/SlideShow";

import style from "./Slide.module.scss";

const Slide = () => {
    const { imageId } = useParams();
    const dispatch = useDispatch();
    const dataset = useSelector(state => state.dataset);
    const currentPage = useSelector(state => state.currentPage);
    const history = useNavigate();
    
    useEffect( () => {
        getDataFromFlickr(currentPage, response => {
            console.log('response >>' , response.data, currentPage);
            if(response.data) {
                dispatch({
                    type:'FETCH_DATA',
                    payload: response.data.photos
                });
            }
        });
    },[]);


    const onViewGridClick = () => {
        history('/');
    }

    return (
        <>
            <div className={style.toggleButtonWrapper}>
                <Button label="View Grid" customClass={style.toggleButton} onClick={onViewGridClick}/>
            </div>
            {dataset && (<SlideShow data={dataset} />)}
        </>
    );
}

export default Slide;