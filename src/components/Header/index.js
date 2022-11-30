import React from 'react';
import Logo from '../../assets/logo_1.png'
import './header.styles.css';
import { usePageContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();
    const { setPage } = usePageContext()
    return (
        <div className='header_container'>
            <img onClick={() => navigate('/')} src={Logo} className='logo_image' />

            <div className='header_links'>
                <div className="container">
                    <div className="links">
                        <a href="/" className="link active header_link">Home</a>
                        <a href="#" className="link header_link">
                            <NavDropdown title="Services" id="basic-nav-dropdown" className='header_link'>
                                <NavDropdown.Item href="/domestic">Domestic Services</NavDropdown.Item>
                                <NavDropdown.Item href="/commercial">
                                    Commercial Services
                                </NavDropdown.Item>
                            </NavDropdown>
                        </a>
                        <a href="#contact_2" className="link header_link" onClick={() => {
                            setPage('#contact_2')
                            navigate('/')
                        }}>Projects done</a>
                        <a href="#contact" className="link header_link">Contact Us</a>

                    </div>
                </div>
               

            </div>
        </div>
    )
}


export default Header