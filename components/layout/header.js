import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "../../styles/layout/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar
      className={styles.navbar}
      collapseOnSelect
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container fluid className="inner-section">
        <Link href="/">
          <Navbar.Brand>
            <img
              className={styles.brand}
              src="/images/brand.svg"
              alt="Eduway, Pedagogia e Educazione, logo"
            ></img>
          </Navbar.Brand>
        </Link>
        <Link href="/podcast">
          <Button
            variant="outline-warning"
            className={`ml-auto mr-3 button-font ${styles.podcastLeft}`}
          >
            <i class="fas fa-podcast"></i> <span>Podcast</span>
          </Button>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Nav.Link href="/#activities">Attività</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#contacts">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link href="/podcast">
          <Button
            variant="outline-warning"
            className={`ml-2 button-font ${styles.podcastRight}`}
          >
            <i class="fas fa-podcast"></i> <span>Podcast</span>
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
}
