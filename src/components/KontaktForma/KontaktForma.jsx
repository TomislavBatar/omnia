import React, { Component } from 'react';
import './KontaktForma.css';
import { Row, Col, Container, Image } from 'react-bootstrap';
import logoOmnia from './imgKontaktForma/logo-omnia-2.svg';
export default class KontaktForma extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="bg-kontakt">
					<Container>
						<Row className="justify-content-between padding-section">
							<Col lg={6} md={6} sm={4} xs={4} className="logo-pozicija">
								<Image className="kartica-logo" src={logoOmnia} />
							</Col>
							<Col lg={6} md={6} sm={8} xs={8} className="d-flex justify-content-end">
								<div className="position-linija">
									<div className="linija" />
								</div>
								<span className="u-izradi-tekst">web stranica u izradi</span>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
