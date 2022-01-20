import React from 'react';
import VideoItem from './VideoItems';

const VideoList = ({ videos, onVideoSelect }) => {
    // this function will be called once for every video object in the video array
   const renderedList =   videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;