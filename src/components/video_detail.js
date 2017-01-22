import React from 'react';

const VideoDetail = (props) => {
	if (!props.video) {
		return <div>Video is Loading...</div>;
	};
	const video = props.video;
	const videoId = video.id.videoId;
	const url = `http://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item embed-video" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>

	);	
};

export default VideoDetail;