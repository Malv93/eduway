import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import styles from "../../styles/layout/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar
      className={styles.navbar}
      collapseOnSelect
      variant="dark"
      expand="md"
      sticky="top"
    >
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
        <Button variant="outline-warning" className="ml-auto mr-3">
          <i class="fas fa-podcast"></i>
        </Button>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
          <Nav.Link href="/#activities">Attività</Nav.Link>
          <Nav.Link href="/#methodology">Metodo</Nav.Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#contacts">Contatti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
