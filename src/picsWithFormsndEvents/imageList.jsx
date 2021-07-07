import { image } from "faker";
import React, { Component } from "react";
import ImageCard from "./imageCard";
import './imageList.css';

const ImageList = (props) => {
    console.log(props.images);
    const images = props.images.map((img)=> {
        return <ImageCard key={img.id} image={img} />
    });
    return <div className='image-list'>{images}</div>
};

export default ImageList;
