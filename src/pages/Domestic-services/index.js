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
import Image8 from '../../assets/clean_8.png'

import Val from '../../assets/val.png';
import Footer from '../../components/Footer';
import { Box } from '../../components/Projects';
import CModal from '../../components/Modal';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MobileImage from '../../assets/m_1.png'
import { useMediaQuery } from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';


const Image = styled.div`
    width: 45%;
    height: 350px;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`



const Domestic = () => {

    const navigate = useNavigate()
    const [active, setActive] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')



    const handleClick = (val, img) => {
        // window.scrollTo(0, 0)
        setName(val)
        setImage(img)
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
                        <div className="header_text" style={{color: '#ED5955'}}>
                            Services
                        </div>
                        <div className="header_text_2">
                            Prime provider of quality and comfortable <br /> cleaning services at affordable prices
                        </div>

                    </div>
                    {!isLargerThan600 && <img src={MobileImage} className='mobile_image_' />}
                    <img src={HeroImage} className='hero_image' />

                </div>
                <div className='domestic_container'>
                    <div className='domestic_container_header'>Domestic Services</div>

                    <div className='card_container'>
                        <Image className='b_Image' url={Garden} />
                        <div className='card_box card__'>
                            <div className='card_header'>Garden Services</div>
                            <ul>
                                <li>Garden perimeter cleaning</li>
                                <li>General garden services</li>
                                <li>Topiary Services</li>
                            </ul>
                            <button onClick={() => handleClick('Garden Services', Garden)} >
                                Get a quote
                            </button>
                        </div>
                    </div>


                    <div className='card_container'>
                        <div className='card_box _2'>
                            <div className='card_header'>Home Cleaning Services</div>
                            <ul>
                                <li>For that special event you've been planning for.</li>
                                <li>When you're moving in or out of your home.</li>
                                <li>Or if you just want your house to sparkle.</li>
                            </ul>
                            <button onClick={() => handleClick('Home Cleaning Services', Image2)} >
                                Get a quote
                            </button>
                        </div>
                        <Image className='b_Image' url={Image2} />

                    </div>


                    <div className='card_container sp_cont'>
                        <Image className='b_Image' url={Image3} />
                        <div className='card_box card__' >
                            <div className='card_header'>Spring Cleaning Services</div>
                            <ul>
                                <li> Thorough dusting of the ceiling</li>
                                <li>Wall cleaning</li>
                                <li>Carpet and under-the-carpet cleaning</li>
                                <li>Floor dusting and cleaning</li>
                                <li>Surface polishing</li>
                                <li>Window cleaning</li>
                                <li>Doors, door handles and frame cleaning</li>
                                <li>Kitchen dusting and moping</li>
                            </ul>
                            <button onClick={() => handleClick('Spring Cleaning Services', Image3)} >
                                Get a quote
                            </button>
                        </div>
                    </div>


                    <div className='card_container'>
                        <div className='card_box _2'>
                            <div className='card_header'>Deep Cleaning Services</div>
                            <ul>
                                <li>Dusting of furniture and other surfaces such <br />as electronic screens and lampshades)</li>
                                <li>Straightening of rooms (clothes folded and <br /> packed away, picking-up of toys, etc.)</li>
                                <li>Wiping down of surfaces such as coffee tables,<br />  end tables and shelving units</li>
                            </ul>
                            <button onClick={() => handleClick('Deep Cleaning Services', Image8)} >
                                Get a quote
                            </button>
                        </div>
                        <Image className='b_Image' url={Image8} />
                    </div>

                    <div className='card_container'>
                        <Image className='b_Image' url={Image5} />
                        <div className='card_box card__'>
                            <div className='card_header'>One-time cleaning Services</div>
                            <ul>
                                <li>You’re planning an event</li>
                                <li>You’re moving out or into a new home.</li>
                                <li>You just want your house to sparkle</li>

                            </ul>
                            <button onClick={() => handleClick('One-time cleaning Services', Image5)} >
                                Get a quote
                            </button>
                        </div>
                    </div>

                    <div className='card_container'>
                        <div className='card_box _2'>
                            <div className='card_header'>Move-in/out Cleaning Services</div>
                            <ul>
                                <li>Dusting of furniture and other surfaces such as <br />electronic screens and lampshades)</li>
                            </ul>
                            <button onClick={() => handleClick('Move-In/Move-Out Cleaning Services', Image6)} >
                                Get a quote
                            </button>
                        </div>
                        <Image className='b_Image' url={Image6} />
                    </div>

                    <div className='commercial_serrvices' onClick={() => navigate('/commercial')}>
                        <div>Commercial Services</div>
                        <div className='arrow_box'>
                            <MdKeyboardArrowRight fill='#4DBDEF' />
                        </div>
                    </div>
                    <div className='revs'>
                        Client Reviews
                    </div>

                    <div className="project_testimonials">

                        <div className="project_box_container">
                            {
                                [
                                    { text: 'The service felt like it was done by a family member. So much care and effort was put in.', name: 'Mr Joe' },
                                    { text: 'I was a bit sceptical at first because affordable service sometimes come at a cost which would be a terrible service, but Kleanique offers value for money', name: 'Ms Maryke' },
                                    { text: 'There are many cleaning services out there , I’ve tried a few and so far Kleanique has met my expectations , i will be reaching out again in the near future', name: 'Mr Amos' }
                                ].map(_ => (
                                    <Box key={_} className='anime' id="anime_">

                                        <div className="project_text_2_container">{!isLargerThan600 && (<div className="column">“</div>)}

                                            <div>
                                                {_.text}
                                            </div>
                                            <div className="rating">
                                                {[1, 2, 3, 4, 5].map(_ => <AiFillStar fill="#ED5955" key={_} />)}
                                            </div>
                                            <div className="image_text_cont">
                                                <div className="image_text">{_.name}</div>
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
            <CModal image={image} name={name} type='domestic' active={active} setActive={setActive} />
        </Layout>
    )
}

export default Domestic