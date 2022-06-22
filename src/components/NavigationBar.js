import React,{useState} from 'react'
import {Container,Navbar,Offcanvas,Nav,NavDropdown} from 'react-bootstrap'
import {NavLink,Link} from "react-router-dom"
import Logo from "../assets/logo.svg"
export default function NavigationBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const categories = ["Tiyatro","Sergi","Konser"]
  return (
    <>
    {['lg'].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="navigationContainer">
        <Container fluid className="mx-1">
          <Navbar.Brand className="logoArea"><Link to="/"><img src={Logo} alt="ets logo" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  onClick={handleShow}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show===true||false ? show : undefined}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton className=''>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <div className='offcanvasLogo'><Link to="/"><img src={Logo} alt="ets logo" height={50} width={100} /></Link></div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvasBody">
              <Nav className="justify-content-start flex-grow-1 pe-3 navLinks">
                <Nav.Link as={NavLink} to="/" ><span className="text-dark">Anasayfa</span></Nav.Link>
                <Nav.Link as={NavLink} to="/hakkimizda"><span className="text-dark">Hakkımızda</span></Nav.Link>
                <NavDropdown
                  title="Kategoriler"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
             
                >
                  {
                      categories.map((category,index)=>(
                       <NavDropdown.Item as={NavLink} to={`/kategori/${category.toLowerCase()}`} key={index}>{category}</NavDropdown.Item>
                             )
                      )
                  }
                  <NavDropdown.Item as={NavLink} to={`/gecmisetkinlik`}>Geçmiş Etkinlikler</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
 
  </>
  )
}
