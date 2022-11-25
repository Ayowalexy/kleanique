import React from "react";
import HeroImage from '../../assets/hero.png';
import './hero.styles.css'


const Hero = () => {
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
                    <div class="button button-2">Get a quote</div>
                    <div class="button button-1">Contact Us</div>
                </div>

            </div>
            <img src={HeroImage} className='hero_image' />

        </div>
    )
}

export default Hero