import React, { useState } from 'react';
import Logo from '../../assets/logo_1.png'
import './header.styles.css';
import { usePageContext } from '../context';
import { useMediaQuery } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import SideMenu from '../Drawer/SideMenu';
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const navigate = useNavigate();
    const { setPage } = usePageContext()
    const [show, setShow] = useState(false)
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <div className='header_container'>
            <img onClick={() => navigate('/')} src={Logo} className='logo_image' />

            {
                isLargerThan600 ?
                    (
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
                                    <a href="#contact" className="link header_link">Contact us</a>

                                </div>
                            </div>


                        </div>
                    )
                    :
                    (
                        <div className='sideMenu_cont'>
                            
                            <a href='tel:063 260 2448'><div>Call now</div></a>
                            <AiOutlineMenu onClick={() => setShow(!show)} size='30px' />
                            <SideMenu show={show} setShow={setShow} />
                        </div>
                    )
            }
        </div>
    )
}


export default Header