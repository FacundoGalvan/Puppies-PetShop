import banner from "../img/banner.png"
import logo from "../img/logopuppis.png"
import { Navbar , Nav , NavDropdown , Button , ButtonGroup , DropdownButton , Dropdown, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBarOne = () => {
    return (
        <header>
        <img className="banner" src={ banner } alt="" />
        <Navbar className="navBar" expand="lg">
                          <Navbar.Brand> 
                              <Link to="/"> <img src={ logo } alt="" /></Link>
                          </Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                          <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                             <NavDropdown title="Ayuda" id="basic-nav-dropdown">
                                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="miCuenta" href="#home">Mi Cuenta</Nav.Link>
                            <CartWidget className="Carrito"  />
                           </Nav>
                             </Navbar.Collapse>

            </Navbar>
                          <Container className="Contenedorbotton">
                          <ButtonGroup className="MenudeBotones" >
                          <Link to='/productos/mascotas' ><Button to="/productos/mascotas"  >Mascotas</Button> </Link>
                           <Button>Marcas</Button>
                            <DropdownButton as={ButtonGroup} title="Ofertas" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            </DropdownButton>
                            <Link to='/productos/servicios'><Button >Servicios</Button></Link>
                           <Button>Puppis One</Button>
                           <DropdownButton   as={ButtonGroup} title="Sucursales" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            </DropdownButton>

                            </ButtonGroup>
                          </Container>

        </header>
    )
}


