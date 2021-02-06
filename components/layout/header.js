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
        <div className="ml-auto mr-3 ">
          <Link href="/podcast">
            <Button variant="outline-warning" className={styles.podcastLeft}>
              <svg className="icon icon-podcast">
                <title>Play Podcast</title>
                <use xlinkHref="/images/icons/sprite.svg#icon-podcast"></use>
              </svg>
              <span>Podcast</span>
            </Button>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/#activities" passHref>
              <Nav.Link>Attività</Nav.Link>
            </Link>
            <Link href="/#about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/#contacts" passHref>
              <Nav.Link>Contatti</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="ml-2 button-font">
          <Link href="/podcast">
            <Button variant="outline-warning" className={styles.podcastRight}>
              <svg className="icon icon-podcast">
                <title>Play Podcast</title>
                <use xlinkHref="/images/icons/sprite.svg#icon-podcast"></use>
              </svg>
              <span>Podcast</span>
            </Button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}
