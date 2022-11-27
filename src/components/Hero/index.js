import React, { useState } from "react";
import HeroImage from '../../assets/hero.png';
import Modal from "../Modal";
import './hero.styles.css'


const Hero = () => {
    const [active, setActive] = useState(false);
    const [name, setName] = useState("");

    const handleClick = (val) => {
        window.scrollTo(0, 0)
        setName(val)
        setActive(true)
    }
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
                    <div class="button button-2" onClick={() => handleClick('Garden Services')}>Get a quote</div>
                    <a href="#contact">
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