import React from 'react';

const VideoListItem = ({ video }) => {
    // const video = props.video; <-- passing video as an argument is identical as using this line
    const ImageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={ImageUrl} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;