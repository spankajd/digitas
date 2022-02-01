import {useEffect , React, useState} from "react";
import { useSelector, useDispatch  } from 'react-redux';
import { useNavigate  } from "react-router-dom";

import {getDataFromFlickr} from '../helper';
import GoToPage from "../components/GoToPage/GoToPage";
import Grid from "../components/Grid/Grid";
import Button from "../components/Button/Button";

import style from "./Home.module.scss";

const Home = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const dataset = useSelector(state => state.dataset);
    const currentPage = useSelector(state => state.currentPage);
    
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

    useEffect( () => {
        console.log('response >!>' , dataset , currentPage, dataset !== undefined);
        if(dataset !== undefined) {
            featchData();
        }
        
    },[currentPage]);

    const onViewSlideShowClick = () => {
        history('/slide/12');
    }

    const onPrevClick = () => {
        dispatch({
            type:'UPDATE_CURRENT_PAGE',
            payload: currentPage - 1
        });
    }

    const onNextClick = () => {
        dispatch({
            type:'UPDATE_CURRENT_PAGE',
            payload: currentPage + 1
        });
    }

    const featchData = () => {
        
        getDataFromFlickr(currentPage, response => {
            if(response.data) {
                dispatch({
                    type:'FETCH_DATA',
                    payload: response.data.photos
                });
            }
        });
    }

    return (<>
        { dataset && dataset.photo && ( <>  
        <div className={style.toggleButtonWrapper}>
            <Button label="View Slideshow" customClass={style.toggleButton} onClick={onViewSlideShowClick}/>
        </div>
        <Grid data={dataset}/>
        <div className={style.buttonBar}> 
            <GoToPage data={dataset}/>
            <div className={style.navBar}>
                <Button customClass={style.navButton} label={"Previous Page"} onClick={onPrevClick} />
                <Button customClass={style.navButton} label={"Next Page"}  onClick={onNextClick}/>
            </div>
        </div>
        </>)}
    </>)

}
export default Home;