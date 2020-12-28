import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../../styles/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar className={styles.navbar} variant="dark" expand="lg" sticky="top">
      <Link href="/">
        <Navbar.Brand>
          <img
            className={styles.brand}
            src="/images/brand.svg"
            alt="Eduway, Pedagogia e Educazione, logo"
          ></img>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
          <Nav.Link href="#activities">Attività</Nav.Link>
          <Nav.Link href="#methodology">Metodo</Nav.Link>
          <Nav.Link href="#mission">Mission</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
