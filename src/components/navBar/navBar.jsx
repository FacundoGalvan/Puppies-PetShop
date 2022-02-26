import bannericbc from "../img/bannericbc.png"
import logo from "../img/logopuppis.png"
import { Navbar , Nav , NavDropdown , Button , ButtonGroup , DropdownButton , Dropdown, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget"
import bannertwo from '../img/envioprogramado.png'

export const NavBarOne = () => {
    return (
        <header>
        <img className="banner" src={ bannericbc } alt="" />
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
                          
                           <Link to ="/productos/marcas">
                             <DropdownButton as={ButtonGroup} title="Ofertas" id="bg-nested-dropdown">
                             <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                             </DropdownButton>
                           </Link>
                                                      
                            <Link to='/productos/servicios'><Button >Servicios</Button></Link>

                            <Link to='/productos/puppisone'><Button>Puppis One</Button></Link>

                            <Link to='/productos/sucursales'>
                               <DropdownButton   as={ButtonGroup} title="Sucursales" id="bg-nested-dropdown">
                               <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                               </DropdownButton>
                            </Link>
                            </ButtonGroup>

                          </Container>
                <div className="envioprogr" >
                  <p>%10 OFF</p>   <img src={ bannertwo } alt="" /> <button>conoce mas</button>
                </div>
        </header>
    )
}


