import * as React from "react";
import { useDispatch  } from 'react-redux';

import Button from "../Button/Button";

import style from "./GoToPage.module.scss";

const GoToPage = ({data = {}}) => {
    const dispatch = useDispatch();

    const [inputVal, setInputVal] = React.useState('');

    const onKeyPress = e => {
        let newVal = (e.target.validity.valid) ? e.target.value : inputVal;
        newVal = Math.max(1, Math.min(data.pages, newVal));
        setInputVal(newVal);
    }

    const onGoClick = e => {
        console.log('onGoClick ' , e);
        dispatch({
            type:'UPDATE_CURRENT_PAGE',
            currentPage: inputVal 
        });
    }
    
    return (
        <div className={style.wrapper}>
            <div className={style.pageCount}> Showing page {data.page} of {data.pages}</div>
            <div className={style.inputBox}> 
                Go to page
                <input type="text" pattern='[0-9]{0,5}' onInput={onKeyPress} value={inputVal}/>
                <Button label={"Go"} onClick={onGoClick}/>
            </div>
        </div> 
    )
}
export default GoToPage;