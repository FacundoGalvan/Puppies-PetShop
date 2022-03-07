import bannericbc from "../img/bannericbc.png"
import logo from "../img/logopuppis.png"
import { Navbar , Nav , NavDropdown , Button , ButtonGroup , DropdownButton , Dropdown, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget"
import bannertwo from '../img/envioprogramado.png'
import "./navBar.scss"


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
                            <Nav.Link className="Ayuda" href="#home">Ayuda</Nav.Link>
                            <Nav.Link className="miCuenta" href="#home">Mi Cuenta</Nav.Link>
                            <CartWidget/>
                           </Nav>
                             </Navbar.Collapse>

            </Navbar>
                          <Container className="Contenedorbotton">
                          <ButtonGroup className="MenudeBotones" >
                          <Link to='/productos/mascotas' ><Button>Alimentos</Button> </Link> 
                          <Link to ="/productos/marcas"><Button>Purina</Button></Link>
                          <Link to='/productos/servicios'><Button >Royal Canin</Button></Link>
                          <Link to='/productos/puppisone'><Button>Old Prince</Button></Link>
                          <Link to='/productos/sucursales'><Button>Vital Can</Button></Link>
                          </ButtonGroup>
                          </Container>
                <div className="envioprogr" >
                  <p className="diezOff">%10 OFF</p><img src={ bannertwo } alt="" /><Link to='#' className="conoceNav">Conoce mas</Link>
                </div>
        </header>
    )
}


