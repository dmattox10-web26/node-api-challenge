import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap'

const Navigation = props => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Projects</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                </Nav>
                <NavbarText>Welcome.</NavbarText>
            </Collapse>
        </Navbar>
    )
}

export default Navigation