import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = ({ categories, onCategorySelect }) => {
  const [expanded, setExpanded] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username === 'merve' && password === '1234') {
      setLoggedIn(true);
      handleCloseLoginModal();
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Navbar expanded={expanded} bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="font-weight-bold text-muted">
          Leziz Yemek Tarifleri
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Kategoriler" id="basic-nav-dropdown">
              {categories.map((category, idx) => (
                <NavDropdown.Item key={idx} onClick={() => { onCategorySelect(category); setExpanded(false); }}>
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {loggedIn ? (
              <Button variant="outline-secondary" className="ml-2" onClick={handleLogout}>Çıkış Yap</Button>
            ) : (
              <Button variant="outline-secondary" className="ml-2" onClick={handleShowLoginModal}>Giriş Yap</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Giriş Modalı */}
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Giriş Yap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control type="text" placeholder="Kullanıcı Adı" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Şifre</Form.Label>
              <Form.Control type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginModal}>
            İptal
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Giriş Yap
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavbarComponent;
