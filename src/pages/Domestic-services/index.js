import React from 'react';
import HeroImage from '../../assets/hero_2.png'
import Layout from '../../components/Layout';
import Card from './Card';
import './domestic.styles.css'
import styled from '@emotion/styled';
import Garden from '../../assets/garden.png'
import Image2 from '../../assets/clean_2.png'
import Image3 from '../../assets/clean_3.png'
import Image4 from '../../assets/clean_4.png'
import Image5 from '../../assets/clean_5.png'
import Image6 from '../../assets/clean_6.png'
import Val from '../../assets/val.png';
import Footer from '../../components/Footer';
import { Box } from '../../components/Projects';
import Modal from '../../components/Modal';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'




const Image = styled.div`
    width: 37%;
    height: 350px;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`



const Domestic = () => {

    const [active, setActive] = useState(false);
    const [name, setName] = useState("");

    const handleClick = (val) => {
        window.scrollTo(0,0)
        setName(val)
        setActive(true)
    }

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
                    <img src={HeroImage} className='hero_image' />

                </div>
                <div className='domestic_container'>
                    <div className='domestic_container_header'>Domestic Services</div>

                    <div className='card_container'>
                        <Image url={Garden} />
                        <div className='card_box'>
                            <div className='card_header'>Garden Services</div>
                            <ul>
                                <li>Garden perimeter cleaning</li>
                                <li>General garden services</li>
                                <li>Topiary Services</li>
                            </ul>
                            <button onClick={() => handleClick('Garden Services')} >
                                Get a quote
                            </button>
                        </div>
                    </div>


                    <div className='card_container'>
                        <div className='card_box'>
                            <div className='card_header'>Home Cleaning Services</div>
                            <ul>
                                <li>For that special event you've been planning for.</li>
                                <li>When you're moving in or out of your home.</li>
                                <li>Or if you just want your house to sparkle.</li>
                            </ul>
                            <button onClick={() => handleClick('Home Cleaning Services')} >
                                Get a quote
                            </button>
                        </div>
                        <Image url={Image2} />

                    </div>


                    <div className='card_container'>
                        <Image url={Image3} />
                        <div className='card_box'>
                            <div className='card_header'>Spring Cleaning Services</div>
                            <ul>
                                <li>Cleaning and organising your refrigerator</li>
                            </ul>
                            <button onClick={() => handleClick('Spring Cleaning Services')} >
                                Get a quote
                            </button>
                        </div>
                    </div>


                    <div className='card_container'>
                        <div className='card_box'>
                            <div className='card_header'>Deep Cleaning Services</div>
                            <ul>
                                <li>Dusting of furniture and other surfaces such as electronic screens and lampshades)</li>
                                <li>Straightening of rooms (clothes folded and packed away, picking-up of toys, etc.)</li>
                                <li>Wiping down of surfaces such as coffee tables, end tables and shelving units</li>
                            </ul>
                            <button onClick={() => handleClick('Deep Cleaning Services')} >
                                Get a quote
                            </button>
                        </div>
                        <Image url={Image4} />
                    </div>

                    <div className='card_container'>
                        <Image url={Image5} />
                        <div className='card_box'>
                            <div className='card_header'>One-time cleaning Services</div>
                            <ul>
                                <li>For that special event you've been planning for.</li>
                                <li>When you're moving in or out of your home.</li>
                                <li>Or if you just want your house to sparkle.</li>

                            </ul>
                            <button onClick={() => handleClick('One-time cleaning Services')} >
                                Get a quote
                            </button>
                        </div>
                    </div>

                    <div className='card_container'>
                        <div className='card_box'>
                            <div className='card_header'>Move-in/out Cleaning Services</div>
                            <ul>
                                <li>Dusting of furniture and other surfaces such as electronic screens and lampshades)</li>
                            </ul>
                            <button onClick={() => handleClick('Move-in/out Cleaning Services')} >
                                Get a quote
                            </button>
                        </div>
                        <Image url={Image6} />
                    </div>

                    <div className='commercial_serrvices'>
                        Commercial Services
                    </div>
                    <div className='revs'>
                        Client Reviews
                    </div>

                    <div className="project_testimonials">
                        <div className="project_box_container">
                            {
                                [1, 2, 3].map(_ => (
                                    <Box key={_} className='anime' id="anime_" align={_ % 2 === 0 ? 'flex-end' : 'flex-start'}>
                                        <div className="image_box">
                                            <img src={Val} className='box_image' />
                                            <div className="image_text">Mr Wakanda Walters</div>
                                        </div>

                                        <div className="project_text_2_container">
                                            <div>
                                                I like the services of kleanique, the did a very good job in my home at walter’s time and even played good piece of music from Mr kanda
                                            </div>
                                            <div className="rating">
                                                {[1, 2, 3, 4, 5].map(_ => <AiFillStar fill="#ED5955" key={_} />)}
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
            <Modal name={name} type='domestic' active={active} setActive={setActive} />
        </Layout>
    )
}

export default Domestic