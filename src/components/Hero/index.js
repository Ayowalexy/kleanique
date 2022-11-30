import React, { useState, useEffect } from "react";
import HeroImage from '../../assets/hero.png';
import Modal from "../Modal";
import { usePageContext } from "../context";
import { useLocation, useNavigate } from 'react-router-dom'
import './hero.styles.css'


const Hero = () => {
    const [active, setActive] = useState(false);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const { page, setPage } = usePageContext()

    const handleClick = (val) => {
        window.scrollTo(0, 0)
        setName(val)
        setActive(true)
    }

    useEffect(() => {
        if(page === '#contact_2'){
            const doc = document.querySelector('#contact_2')
            doc.scrollIntoView();
            setTimeout(() => {
                setPage("")
            }, 200)
        }
    }, [page])
    return (
        <div className="hero_container">
            <div className="hero_text">
                <div className="header_text">
                    Unlimited<br />
                    Cleanliness
                </div>
                <div className="header_text_2">
                    Prime provider of quality and comfortable <br /> cleaning services at affordable prices
                </div>
                <div className="buttons">
                    <div class="button button-2" onClick={() => navigate('/domestic')}>Get a quote</div>
                    <a aphref="#contact">
                        <div class="button button-1" >Contact Us</div>
                    </a>
                </div>

            </div>
            <img src={HeroImage} className='hero_image' />
            <Modal name={name} type='domestic' active={active} setActive={setActive} />

        </div>
    )
}

export default Hero