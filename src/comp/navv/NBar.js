import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';






const NBar = ({filter,setFilter, }) => {
  return (
    <div>
  <Navbar expand="lg" style={{backgroundColor:'rgb(123, 161, 118)',borderColor:'black', boxShadow: ' 0 4px 4px rgba(0, 0, 0, 0.5)'}}>
      <Container fluid>
        <Navbar.Brand href="#"><h1>ScreenScape</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '30px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact US</Nav.Link>
            <Nav.Link href="#">
              More Info
            </Nav.Link>
          </Nav>
                                    

                           {/* serch */}

          <Form className="d-flex"
                >
            <Form.Control
              type="text"
              placeholder="Search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <Button style={{backgroundColor:'rgb(123, 161, 118)',color:'black',borderColor:'black', boxShadow: ' 4px 4px rgba(0, 0, 0, 0.5)'}}>Search</Button>
          </Form>







        </Navbar.Collapse>
      </Container>
    </Navbar>
  ;


    </div>
  )
}

export default NBar
