import Link from "next/link"
import { Navbar, Nav, Container } from "react-bootstrap"
import { pages } from "./../helper"

export default function ({ active = 'index' }: { active: String }) {

  return (
    <Navbar bg="light" expand="lg" id="top-nav"
      className="shadow-sm fixed-top bg-gradient" style={{ height: 70 }}>
      <Container className="bg-transparent">
        <Navbar.Brand href="/" className="gracelya me-0 fs-2 me-5">
          <img src="/images/NX-gold.png" style={{
            width: 64,
            // height: 256
          }} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ background: 'rgb(248,249,250)' }}>
          <Nav className="me-auto align-items-center">
            {
              pages.map((page, i) => (
                <Link key={i} href={page.path}><a className={`fs-5 px-3 ${page.active === active && 'bold'}`}>{page.title}</a></Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}