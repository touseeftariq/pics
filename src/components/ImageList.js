import './imageList.css'
import React from 'react';
import imageCard from './ImageCard'

const ImageList = props => {
        const images = props.images.map(({id, description, urls}) => {
            // return <img key={id} src={urls.regular} alt={description} />; 
            return <img key={id} src={urls.regular} alt={description} />; 
        });

    return <div className='image-list'>{images}</div>;
}

export default ImageList;