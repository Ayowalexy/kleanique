import React from 'react';
import Logo from '../../assets/logo_1.png'
import './header.styles.css'
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header_container'>
            <img src={Logo} className='logo_image' />

            <div className='header_links'>
                <div className="container">
                    <div className="links">
                        <a href="#" className="link active header_link">Home</a>
                        <a href="#" className="link header_link">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='header_link'>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </a>
                        <a href="#" className="link header_link">Project done</a>
                        <a href="#" className="link header_link">Contact Us</a>
                    </div>
                </div>
               

            </div>
        </div>
    )
}


export default Header