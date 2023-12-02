import React from 'react'
import imageLoadStyle from './ImageLoad.css'
import ImageResultContainer from './ImageResult/ImageResultContainer';
const ImageLoad = (props) => {
    const { image, output } = props;
    return (
        <>
            <div className='container'>
                <ImageResultContainer image={image} extras={{"alt":"Old Image","message":"This is Your old Image"}}/>
                <ImageResultContainer image={output} extras={{"alt":"Old Image","message":"This is Your new Image"}}/>
            </div>
        </>
    )
}

export default ImageLoad