import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Basket from './Basket';
import { Link } from 'react-router-dom'





function NavigationBar(props){

  //For autofill search
 
  function onSearch(product){
    //sets the value of the input field to the product when the product is clicked.
    props.setSearchValue(product)
    console.log("search", product)
  }


    return(
      <>
        <Navbar bg="light" expand="lg" id='navbar-banner'>
      <Container fluid>
        <Navbar.Brand href="#" className='brand'>HomeTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"className='brand'>Home</Nav.Link>
            <Nav.Link href="#action2"className='brand'>Technology</Nav.Link>
            <div className='brand'>
              <p className='brand'><Link to={`/Basket`} >Basket</Link></p>
            </div>
            <Basket incrementCount = {props.incrementCount}/>
            <p className='total'>Total:£{props.total}</p>
            <Button className='empty'variant='outline-danger' onClick={props.clearBasket}>Empty</Button>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={props.searchValue} //second value is from the use state on line 16.
              onChange={(event) => props.handleSearchValue(event)} //uses this function to change state, which allows our onchange to work as we're typing.
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='s-dropdown'>
          {props.search.filter((item) => {
            const searchTerm = props.searchValue.toLowerCase()
            const name = item.productName.toLowerCase()
            return searchTerm && name.startsWith(searchTerm)
          })
          .map((item) => <div onClick={() => onSearch(item.productName)} className='s-dropdown-row' key={item.id}>{item.productName}</div>)}
    </div>
  </>
    )
}

export default NavigationBar;

// <div >
// {props.search.map((item) => <div key={item.id}>{item.productName}</div>)}
// </div>

//Line 71 logic for dropdown 
// <Link to={`/Basket`}></Link>