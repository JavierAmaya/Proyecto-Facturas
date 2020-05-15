import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgFacebook from "../img/facebook.png"



const Footer: React.FC = () =>(
    <div className="site-footer">   
        <Container>
            <Row>
                <Col sm="12" md="6">
                    <h6 className="titleFooter">ABOUT</h6>
                    <p>
                      Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                    </p>
                </Col>
                <Col xs="6" md="3">
                    <h6 className="titleFooter">CATEGORIES</h6>
                    <ul className="footer-links">
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                    </ul>
                </Col>
                <Col xs="6" md="3">
                    <h6 className="titleFooter">QUICK LINKS</h6>
                    <ul className="footer-links">
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                        <li>Item #</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md="8" sm="6" xs="12">
                    <p>Copyright © 2020 All Rights Reserved by Grupo BDI</p>
                </Col>
                <Col md="4" sm="6" xs="12">
                    <ul className="social-icons">
                      <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                      <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                    </ul>
                </Col>
            </Row>
        </Container>
        
    </div>
)

export default Footer;