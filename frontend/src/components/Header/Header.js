import React from 'react'
import { 
    Nav,
    Navbar,
    Container,
    Button
} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">News Feed</Nav.Link>
            <Nav.Link href="#pricing">Contribute</Nav.Link>
            <Nav.Link href="#standings">Standings</Nav.Link>
          </Nav> 
        <Button variant="outline-success">Signup</Button>
        <Button variant="outline-success"> Login</Button>
        </Container>
      </Navbar>
  )
}

export default Header
