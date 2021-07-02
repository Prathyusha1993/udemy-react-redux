import React, { Component } from "react";

const ImageList = (props) => {
    console.log(props.images);
    return props.images.map((img)=> {
        return <img key={img.id} src={img.urls.regular} alt={img.description}/>
    })
};

export default ImageList;
