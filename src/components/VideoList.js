import React from 'react';
import VideoItem from './VideoItems';

const VideoList = ({ videos }) => {
    // this function will be called once for every video object in the video array
   const renderedList =   videos.map((video) => {
        return <VideoItem video={video} />
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;