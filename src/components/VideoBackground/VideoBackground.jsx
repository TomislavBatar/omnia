import React, { Component } from 'react';
import Cover from 'react-video-cover';
import { Navbar, Nav, Row, Col, Container, Image, Button } from 'react-bootstrap';

import './VideoBackground.css';
import Logo from './imgVideoBackground/logo-omnia.svg';
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
			<React.Fragment>
				<Container>
					<Row className="justify-content-between">
						<Col className="logo-pozicija">
							<Image className="kartica-logo" src={Logo} />
						</Col>
						<Col className="d-flex justify-content-end">
							<div className="position-linija">
								<div className="linija" />
							</div>
							<span className="u-izradi-tekst">web stranica u izradi</span>
						</Col>
					</Row>

					<Row className="">
						<Col className="pozicija-glavnog-sadrzaja">
							<div className="">
								<h2 className="full-service">Full service marketing agencija</h2>
								<div className="linija-2" />
								<h1 className="strategija">
									Strategija. <br />
									Kreativnost. <br />
									Rezultat.
								</h1>
								<Button className="kontaktirajte-nas">Kontaktirajte nas</Button>
							</div>
						</Col>
					</Row>
				</Container>
				<div className="overlay" />

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
			</React.Fragment>
		);
	}
}
