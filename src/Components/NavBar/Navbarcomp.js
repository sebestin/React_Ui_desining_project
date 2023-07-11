import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, } from "react-router";
import {NavLink} from "react-router-dom"
import { useUserAuth } from "../../context/UserAuthContext";
function Navbarcomp() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (

<div className='text-white navdiv'>
    <Navbar className='text-white' bg="dark" expand="lg">
      <Container fluid>
        <NavLink className='text-white linkdiv p-2' to="/HomeCompo"> Sab-Goa</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/foodstore" className='text-white linkdiv p-2'>Food Store</NavLink>
            <NavLink to="/loginmern" className='text-white linkdiv p-2'>Login</NavLink>
                
            <NavLink to="/details"className='text-white linkdiv p-2' >
  Details
            </NavLink> 
            <NavLink  to="/service" className='text-white linkdiv p-2' >
    Service
            </NavLink> 
          </Nav>
          <Form className="d-flex">
            
            <Button variant="outline-danger" onClick={handleLogout} className='text-white linkdiv' >Logout</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbarcomp;