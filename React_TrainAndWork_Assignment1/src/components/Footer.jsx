// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Leziz Yemek Tarifleri. Tüm hakları saklıdır.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
