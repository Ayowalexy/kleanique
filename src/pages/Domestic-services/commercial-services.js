import React, { useState } from 'react';
import HeroImage from '../../assets/hero_2.png'
import HeroImage_ from '../../assets/hero_3.png'

import Layout from '../../components/Layout';
import Card from './Card';
import CModal from '../../components/Modal';
import './domestic.styles.css'
import styled from '@emotion/styled';
import Garden from '../../assets/garden.png'
import Image2 from '../../assets/clean2.png'
import Image7 from '../../assets/clean_7.png'
import Image4 from '../../assets/clean_4.png'
import Image8 from '../../assets/clean_6_.png'
import Val from '../../assets/val.png';
import Footer from '../../components/Footer';
import { Box } from '../../components/Projects';
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';


const Image = styled.div`
    width: 45%;
    height: 350px;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`



const Commercial = () => {

    const [active, setActive] = useState(false);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [image, setImage] = useState("")

    const handleClick = (val, img) => {
        // window.scrollTo(0, 0)
        setImage(img)
        setName(val)
        setActive(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <div>
                <div className="hero_container">
                    <div className="hero_text">
                        <div className="header_text">
                            Services
                        </div>
                        <div className="header_text_2">
                            Prime provider of quality and comfortable <br /> cleaning services at affordable prices
                        </div>

                    </div>
                    <img src={HeroImage_} className='hero_image' />

                </div>
                <div className='domestic_container'>
                    <div className='domestic_container_header colored'>Commercial Services</div>

                    <div className='c_services'>
                        Our commercial services cover a wide range of business-related cleaning services, ranging from offices, through to shop floors, mini-assembly outfits, storerooms, and premises used purely for commerce. In case of a monthly, quarterly, or bi-annual cleaning, we strongly recommend our deep cleaning services. However, bi-annual or annual cleaning services should be composed of afterwards disinfection or “nuisance treatment”, which is fondly referred to as “fumigation”.
                    </div>
                    <div className='card_container c_bg'>
                        <Image url={Image2} />
                        <div className='card_box card__'>
                            <div className='card_header colored'>General Office cleaning Services</div>
                            <ul>
                                <li>Horizon Splash Polishing</li>
                                <li>General cleaning</li>
                                <li>Decontamination</li>
                                <li>Deep cleaning </li>
                                <li>Office desinfection</li>
                            </ul>
                            <button className='colored_bg' onClick={() => handleClick('General Office cleaning Services', Image2)}>
                                Get a quote
                            </button>
                        </div>
                    </div>


                    <div className='card_container c_bg'>
                        <div className='card_box'>
                            <div className='card_header colored'>Office Disinfection<br /> Services</div>
                            <ul>
                                <li>Surface disinfecting</li>
                                <li>Fogging surfaces.</li>
                                <li>Fumigation.</li>
                            </ul>
                            <button className='colored_bg' onClick={() => handleClick('Office Disinfection Services', Image4)}>
                                Get a quote
                            </button>
                        </div>
                        <Image url={Image4} />

                    </div>


                    <div className='card_container c_bg'>
                        <Image url={Image8} />
                        <div className='card_box card__'>
                            <div className='card_header colored'>Spring Cleaning Services</div>
                            <ul>
                                <li>Wet and Vacuum.</li>
                                <li>Decontamination.</li>
                                <li>Splash Cleaning.</li>
                                <li>Dry and Dust.</li>
                                <li>Deep Cleaning</li>
                            </ul>
                            <button className='colored_bg' onClick={() => handleClick('Spring Cleaning Services', Image8)}>
                                Get a quote
                            </button>
                        </div>
                    </div>


                    <div className='commercial_serrvices colored_bg_' onClick={() => navigate('/domestic')}>
                        <div>
                            Domestic Services
                        </div>
                        <div className='arrow_box'>
                            <MdKeyboardArrowRight fill='#ED5955' />
                        </div>
                    </div>
                    <div className='revs' style={{ color: '#4DBDEF' }}>
                        Client Reviews
                    </div>

                    <div className="project_testimonials">

                        <div className="project_box_container">
                            {
                                [1, 2, 3].map(_ => (
                                    <Box key={_} className='anime' id="anime_">
                                        <div className="project_text_2_container">
                                            <div>
                                                I like the services of kleanique, the did a very good job in my home at walter’s time and even played good piece of music from Mr kanda                                    </div>
                                            <div className="rating">
                                                {[1, 2, 3, 4, 5].map(_ => <AiFillStar fill="#ED5955" key={_} />)}
                                            </div>
                                            <div className="image_text_cont">
                                                <div className="image_text">Mr Wakanda Walters</div>
                                            </div>

                                        </div>
                                    </Box>
                                ))
                            }
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
            <CModal image={image} name={name} type='commercial' active={active} setActive={setActive} />

        </Layout>
    )
}

export default Commercial