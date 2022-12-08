import React, { useRef, useEffect, useState } from "react";
import './services.styles.css'
import Image1 from '../../assets/clean.png'
import Image2 from '../../assets/clean2.png'
import ServiceImage from '../../assets/service.png'
import House from '../../assets/house.png'
import Star from '../../assets/svg/star.svg'
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Services = () => {
    const navigate = useNavigate();
    const [seeMore, setSeeMore] = useState(false);
    const [seeMore_2, setSeeMore_2] = useState(false)
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')




    useEffect(() => {
        gsap.fromTo('.service_box', {
            autoAlpha: 0,
            y: 40
        }, {
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'power4.out',
            stagger: 0.2,
            scrollTrigger: {
                id: `section_1`,
                trigger: '.service_box',
                start: 'top center+=100',
                // toggleActions: 'play none none reverse'
            }
        });

    }, []);


    useEffect(() => {
        gsap.fromTo('.service_header', {
            autoAlpha: 0,
            y: -40
        }, {
            duration: 1.6,
            autoAlpha: 1,
            y: 0,
            ease: 'ease-in',
            // stagger: 0.7,
            scrollTrigger: {
                id: `service_header_`,
                trigger: '.service_header',
                start: 'top center+=100',
                // toggleActions: 'play none none reverse'
            }
        });


        gsap.fromTo('.service_subText', {
            autoAlpha: 0,
            y: 40
        }, {
            duration: 1.6,
            autoAlpha: 1,
            y: 0,
            ease: 'ease-in',
            // stagger: 0.7,
            scrollTrigger: {
                // markers:true,
                id: `service_subText_`,
                trigger: '.service_subText',
                start: 'top bottom-=80',
            }
        });



        gsap.fromTo('.services_text_2_type_2', {
            autoAlpha: 0,
            y: -30
        }, {
            duration: 1.6,
            autoAlpha: 1,
            y: 0,
            ease: 'ease-in',
            // stagger: 0.7,
            scrollTrigger: {
                // markers:true,
                id: `services_text_2_type_2_`,
                trigger: '.services_text_2_type_2',
                start: 'top bottom-=80',
            }
        });


    }, []);


    return (
        <div className="services">
            <div className="header_text">Our Services</div>
            <div className="header_box">
                <div style={{ height: seeMore ? '490px' : "408px" }} className="service_box" id="section_1" >
                    <img src={Image1} className='service_image' onClick={() => navigate('/domestic')} />
                    <div className="services_text_1" onClick={() => navigate('/domestic')}>Domestic services</div>
                    <div className="services_text_2">
                        {
                            isLargerThan600 ?
                                <>
                                    Garden Services, Home Cleaining, Spring Cleaning, Deep Cleaning, One-time Cleaning, Move in/out <span onClick={() => setSeeMore(!seeMore)} style={{ color: 'red' }}>{seeMore ? 'see less' : 'see more'}</span>
                                </>
                                :
                                <>
                                    Homes, Move In and out, Deep
                                    cleaning, Spring Cleaning
                                    Garden services
                                </>
                        }
                        {
                            !isLargerThan600 && (
                                <div className="div_p" >
                                    <div className="see_more_mobile" onClick={() => navigate('/domestic')}>
                                        see more
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>

                <div className="service_box" style={{ height: seeMore_2 ? '490px' : "408px" }} >
                    <img src={Image2} className='service_image' onClick={() => navigate('/commercial')} />
                    <div className="services_text_1" onClick={() => navigate('/commercial')}>Commercial services</div>
                    <div className="services_text_2 services_text_2_type_2">
                        General Office Cleaning, Office Disinfection, Shop Floor Cleaning  {isLargerThan600 && <span onClick={() => setSeeMore_2(!seeMore_2)} style={{ color: 'red' }}>{seeMore_2 ? 'see less' : 'see more'}</span>}
                        {
                            !isLargerThan600 && (
                                <div className="div_p">
                                    <div className="see_more_mobile" onClick={() => navigate('/commercial')}>
                                        see more
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="section_2">
                <div className="header_text why_choose">Why Choose Us</div>
                <div className="header_text_2">Prime provider of quality and comfortable cleaning { !isLargerThan600 && <br />}services at affordable prices.</div>

                <div className="service_container">
                    <div className="service_box_1">
                        {!isLargerThan600 && <div className="house_image"><img src={House} /></div>}
                        <div className="service_container_box">
                            <div className="service_header" id='service_header_'>
                                <img src={Star} />
                                <div>OUR VISION</div>
                            </div>
                            <div className="service_subText" >
                                We strive to deliver quality service that spurs ease, comfort, and freshness into the world.
                            </div>
                        </div>

                        <div className="service_container_box">
                            <div className="service_header">
                                <img src={Star} />
                                <div>OUR SERVICES</div>
                            </div>
                            <div className="services_text_2_type_2" id="services_text_2_type_2_">
                                All services are tailored to the client’s specific needs and convenience.
                                We provide a wide range of services at competitive prices, at flexible working hours and schedules.
                            </div>
                        </div>
                    </div>

                    <div className="service_middle">
                        {isLargerThan600 && <img src={ServiceImage} className='service_image' />}
                        <div className="service_container_box">
                            <div className="service_header">
                                <img src={Star} />
                                <div>LEADING TECHNOLOGIES</div>
                            </div>
                            <div className="service_subText cat_2">
                                We use safe hospital-grade disinfectants, HEPA filtrations and microfiber cleaning cloths.                            </div>
                        </div>
                    </div>



                    <div className="service_box_1 box_2">


                        <div className="service_container_box">
                            <div className="service_header">
                                <img src={Star} />
                                <div>OUR MISSION</div>
                            </div>
                            <div className="service_subText">
                                Our mission is to provide innovative products and quality services that care for today and tomorrow.
                            </div>
                        </div>

                        <div className="service_container_box">
                            <div className="service_header">
                                <img src={Star} />
                                <div>RELIABLE CREW</div>
                            </div>
                            <div className="service_subText">
                                Our reliable and stable crews understand your specific cleaning service needs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services