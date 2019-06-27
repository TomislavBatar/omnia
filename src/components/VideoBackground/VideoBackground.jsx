import React, { Component } from 'react';
import Cover from 'react-video-cover';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Typist from 'react-typist';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './VideoBackground.css';
import Logo from './imgVideoBackground/logo-omnia-2.svg';
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
			src: 'https://omniamarketing.ba/omniaVideo.mp4',
			autoPlay: true,
			muted: true,
			loop: true
		};

		return (
			<React.Fragment>
				<Container>
					<Row className="justify-content-between padding-section">
						<Link to="/">
							<Col lg={6} md={6} sm={4} xs={4} className="logo-pozicija">
								<Image className="kartica-logo" src={Logo} />
							</Col>
						</Link>

						<Col lg={6} md={6} sm={8} xs={8} className="d-flex justify-content-end">
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
									<Typist
										className="blinker"
										cursor={{
											hideWhenDone: true
										}}
										startDelay={800}
										avgTypingDelay={100}
									>
										Strategija.
										<br />
										<Typist.Delay ms={500} />
										Kreativnost. <br />
										<Typist.Delay ms={500} />
										Rezultat.
										<Typist.Backspace count={1} delay={800} />
										i.
									</Typist>
								</h1>

								<Link className="btn2 cta2 bg2 ml-3 mt-4" to="/kontakt">
									Kontaktirajte nas
								</Link>
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
