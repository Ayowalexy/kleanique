import React, { useRef, useEffect } from "react";
import './services.styles.css'
import Image1 from '../../assets/clean.png'
import Image2 from '../../assets/clean2.png'
import ServiceImage from '../../assets/service.png'
import Star from '../../assets/svg/star.svg'
import gsap from "gsap";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Services = () => {


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
                <div className="service_box" id="section_1">
                    <img src={Image1} className='service_image' />
                    <div className="services_text_1">Domestic services</div>
                    <div className="services_text_2">
                        Garden Services, Home Cleaining, Spring Cleaning, Deep Cleaning, One-time Cleaning, Move in/out see more
                    </div>
                </div>

                <div className="service_box">
                    <img src={Image2} className='service_image' />
                    <div className="services_text_1">Domestic services</div>
                    <div className="services_text_2 services_text_2_type_2">
                        Garden Services, Home Cleaining, Spring Cleaning, Deep Cleaning, One-time Cleaning, Move in/out see more
                    </div>
                </div>
            </div>

            <div className="section_2">
                <div className="header_text">Why Choose Us</div>
                <div className="header_text_2">Prime provider of quality and comfortable cleaning services at affordable prices.</div>

                <div className="service_container">
                    <div className="service_box_1">
                        <div className="service_container_box">
                            <div className="service_header" id='service_header_'>
                                <img src={Star} />
                                <div>OUR SERVICES</div>
                            </div>
                            <div className="service_subText" >
                                All services are tailored to the client’s specific needs and convenience.
                                We provide a wide range of services at competitive prices, at flexible working hours and schedules.
                            </div>
                        </div>

                        <div className="service_container_box">
                            <div className="service_header">
                                <img src={Star} />
                                <div>OUR VISION</div>
                            </div>
                            <div className="services_text_2_type_2" id="services_text_2_type_2_">
                                We strive to deliver quality service that spurs ease, comfort, and freshness into the world.
                            </div>
                        </div>
                    </div>

                    <div className="service_middle">
                        <img src={ServiceImage} className='service_image' />
                        <div className="service_container_box">
                            <div className="service_header">
                                <img src={Star} />
                                <div>OUR MISSION</div>
                            </div>
                            <div className="service_subText">
                                Our mission is to provide innovative products and quality services that care for today and tomorrow.
                            </div>
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