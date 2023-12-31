import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import learnItLogo from '../../assets/logo.svg';
import logOutIcon from '../../assets/logout.svg';
import { AuthContext } from '../../contexts/AuthContext';

function NavbarMenu() {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Container>
        <Navbar.Brand to="/dashboard" className="fw-bolder text-white" as={Link}>
          <img src={learnItLogo} alt="LearnIt Logo" width="32" height="32" className="me-2" />
          HariLearn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bolder text-white" to="/dashboard" as={Link}>
              Dashboard
            </Nav.Link>
            <Nav.Link className="fw-bolder text-white" to="/about" as={Link}>
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="fw-bolder text-white" disabled>
              Welcome {username}
            </Nav.Link>
            <Button variant="secondary" className="fw-bolder text-white" onClick={logoutUser}>
              <img src={logOutIcon} alt="Logout icon" width="32" height="32" className="me-2" />
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;