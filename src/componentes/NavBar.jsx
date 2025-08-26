import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GerenciadorLogin } from './GerenciadorLogin';

function MinhaNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{color: "white"}} href="/">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color: "white"}} href="login">Login</Nav.Link>
            <Nav.Link style={{color: "white"}} href="produtos">Produtos</Nav.Link>
          </Nav>
          <GerenciadorLogin/>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export { MinhaNavBar };