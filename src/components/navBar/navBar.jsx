import bannericbc from "../img/bannericbc.png"
import logo from "../img/logopuppis.png"
import { Navbar , Nav , NavDropdown , Button , ButtonGroup , DropdownButton , Dropdown, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget"
import bannertwo from '../img/envioprogramado.png'
import "./navBar.scss"
import bannermarcas from "../img/bannermarcas.png"

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
                                 <NavDropdown.Item href="#action/3.1">22-4444-3334</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="miCuenta" href="#home">Mi Cuenta</Nav.Link>
                            <CartWidget/>
                           </Nav>
                             </Navbar.Collapse>

            </Navbar>
                          <Container className="Contenedorbotton">
                          <ButtonGroup className="MenudeBotones" >
                          <Link to='/productos/mascotas' ><Button>Mascotas</Button> </Link> 
                          <Link to ="/productos/marcas"><Button>Marcas</Button></Link>
                          <Link to='/productos/servicios'><Button >Servicios</Button></Link>
                          <Link to='/productos/puppisone'><Button>Puppis One</Button></Link>
                          <Link to='/productos/sucursales'><Button>Sucursales</Button></Link>
                          </ButtonGroup>
                          </Container>
                <div className="envioprogr" >
                  <p className="diezOff">%10 OFF</p><img src={ bannertwo } alt="" /><Link to='#' className="conoceNav">Conoce mas</Link>
                </div>
        </header>
    )
}


