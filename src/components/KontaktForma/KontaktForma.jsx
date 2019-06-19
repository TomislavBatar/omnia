import React, { Component } from 'react';
import './css/lg.css';
import './css/sm.css';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import logoOmnia from './imgKontaktForma/omnia logo filled.svg';

export default class KontaktForma extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="bg-kontakt">
					<Container>
						<Row className="justify-content-between padding-section-kontakt">
							<Col lg={6} md={6} sm={4} xs={4} className="logo-pozicija-kontakt">
								<Image className="kartica-logo-kontakt" src={logoOmnia} />
							</Col>
							<Col lg={6} md={6} sm={8} xs={8} className="d-flex justify-content-end">
								<div className="position-linija-kontakt">
									<div className="linija-kontakt" />
								</div>
								<span className="u-izradi-tekst-kontakt">web stranica u izradi</span>
							</Col>
						</Row>
						<Row className="align-items-center aaa">
							<Col lg={6}>
								<Card className="box-shadow">
									<Card.Body>This is some text within a card body.</Card.Body>
								</Card>
							</Col>

							<Col lg={6}>
								<Card className="box-shadow">
									<Card.Body>This is some text within a card body.</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
