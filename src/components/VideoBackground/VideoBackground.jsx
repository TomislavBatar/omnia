import React, { Component } from 'react';
import Cover from 'react-video-cover';

const style = {
	width: '100vw',
	height: '100vh',
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: -1
};

export default class VideoBackground extends Component {
	state = {
		resizeNotifier: () => {}
	};
	render() {
		const videoOptions = {
			src: 'http://omnia-web.com/omniaVideo.mp4',
			autoPlay: true,
			muted: true,
			loop: true
		};

		return (
			<div style={style}>
				<Cover
					videoOptions={videoOptions}
					remeasureOnWindowResize
					getResizeNotifier={(resizeNotifier) => {
						this.setState({
							resizeNotifier
						});
					}}
				/>
			</div>
		);
	}
}
