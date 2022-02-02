import * as React from "react";

import Button from '../Button/Button';

const DownloadButton = ({imgPath = '', customClass='', secondary=false}) => {

    const downloadClick = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(imgPath) {
            const originalImage = imgPath;
            const image = await fetch(originalImage);
        
            //Split image name
            const nameSplit=originalImage.split("/");
            const  duplicateName=nameSplit.pop();
        
            const imageBlog = await image.blob()
            const imageURL = URL.createObjectURL(imageBlog)
            const link = document.createElement('a')
            link.href = imageURL;
            link.download = ""+duplicateName+"";
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)  
        }
    };

    return (
        <Button label="Download original" secondary={secondary} onClick={downloadClick} customClass={customClass}></Button> 
    )
}
export default DownloadButton;