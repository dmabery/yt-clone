import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)} >
            <div className="image">
                <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
                <h3 className="header">{video.snippet.title}</h3>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default VideoItem;