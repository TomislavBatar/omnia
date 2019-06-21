import React, { Component } from 'react';
import './css/lg.css';
import './css/sm.css';
import { Row, Col, Container, Image, Card, Form, Button } from 'react-bootstrap';
import logoOmnia from './imgKontaktForma/omnia logo filled.svg';

import ig from './imgKontaktForma/ig.svg';
import fb from './imgKontaktForma/fb.svg';
import li from './imgKontaktForma/li.svg';
import goreTrokut from './imgKontaktForma/gore.svg';
import donjiTrokut from './imgKontaktForma/donji.svg';

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
						<Row className="padding-forma-sadrzaj">
							<Col lg={6} className="">
								<Card className="box-shadow">
									<Image className="pozicija-trokut-gornji" src={goreTrokut} alt="kontakt omnia" />
									<Image className="pozicija-trokut-donji" src={donjiTrokut} alt="kontakt omnia" />
									<Card.Body>
										<Form
											action="https://formspree.io/tomislav.batar@omniamarketing.ba"
											method="POST"
										>
											<Form.Group controlId="">
												<Form.Control
													type="text"
													name="ime-i-prezime"
													placeholder="IME I PREZIME"
													className="input-forma"
												/>
											</Form.Group>
											<Form.Group controlId="">
												<Form.Control
													type="text"
													className="input-forma"
													name="firma"
													placeholder="FIRMA"
												/>
											</Form.Group>
											<Form.Group controlId="">
												<Form.Control
													type="text"
													className="input-forma"
													name="email-adresa"
													placeholder="E-MAIL"
												/>
											</Form.Group>
											<Form.Group controlId="">
												<Form.Control
													type="tel"
													className="input-forma"
													name="telefon"
													placeholder="TELEFON"
												/>
											</Form.Group>
											<Form.Group controlId="">
												<Form.Control
													as="textarea"
													className="input-forma"
													name="poruka"
													placeholder="PORUKA"
													rows="5"
												/>
											</Form.Group>
										</Form>
									</Card.Body>
								</Card>
								<Button type="submit" className="dugme-posalji">
									<Image
										className="pozicija-trokut-mali-gornji"
										src={goreTrokut}
										alt="kontakt omnia"
									/>
									<Image
										className="pozicija-trokut-mali-donji"
										src={donjiTrokut}
										alt="kontakt omnia"
									/>
									Pošaljite
								</Button>
							</Col>

							<Col lg={6} className="flex-pozicija">
								<div className="">
									<h1 className="naslov-kontakt">
										Kontaktiraj nas.<br />
										Živećeš noormalnoo.
									</h1>
								</div>

								<div className="">
									<div className="ikonice-drustvene-mreze form-inline">
										<div className="icon1">
											<Image src={ig} className="icon-h" alt="instagram" />
										</div>
										<div className="icon2">
											<Image src={fb} className="icon-h" alt="facebook" />
										</div>
										<div className="icon3">
											<Image src={li} className="icon-h" alt="linkedin" />
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
