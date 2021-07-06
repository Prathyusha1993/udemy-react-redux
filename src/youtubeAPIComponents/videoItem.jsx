import React, { Component } from 'react';
import './videoItem.css';

const VideoItem = (props) => {
    return (
    <div className='video-item item'>
        <img className='ui image' src={props.video.snippet.thumbnails.medium.url}/>
        <div className='content'>
            <div className='header'>
                {props.video.snippet.title}
            </div>
        </div>
    </div>
    );
};

export default VideoItem;