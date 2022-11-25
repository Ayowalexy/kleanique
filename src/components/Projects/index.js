import React, { useEffect } from "react";
import Slide1 from '../../assets/slide1.png';
import Slide2 from '../../assets/slide2.png'
import Slide3 from '../../assets/slide3.png'
import Slide4 from '../../assets/slide4.png'
import Carousel from "framer-motion-carousel";
import Val from '../../assets/val.png';
import styled from "@emotion/styled";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AiFillStar } from 'react-icons/ai'
import './projects.styles.css'

gsap.registerPlugin(ScrollTrigger);




const Image = styled.div`
    width: 100%;
    height: 534px;
    background-image: url(${(props) => (props.url)});
    background-repeate: no-repeat;

`

const Box = styled.div`
    width: 750px;
    height: 184px;
    background: #FFFFFF;
    border: 1px solid #1D7ECF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 70px;
    align-self: ${(props) => props.align}
`


const Project = () => {


    useEffect(() => {
        gsap.fromTo('.anime', {
            autoAlpha: 0,
            x: 40
        }, {
            duration: 0.7,
            autoAlpha: 1,
            x: 0,
            ease: 'power4.out',
            stagger: 0.2,
            scrollTrigger: {
                id: `anime_`,
                trigger: '.anime',
                start: 'top center+=100',
            }
        });

    }, []);

    return (
        <div className="project_container">
            <div className="project_container_header">Projects Done</div>
            <div className="project_container_text">Here are some cleaning service done for our clients in South Africa</div>

            <div className="carousel_container">
                <Carousel>
                    {[Slide1, Slide2, Slide3, Slide4].map((element, idx) => (
                        <Image url={element} key={idx} />
                    ))}
                </Carousel>
            </div>

            <div className="project_testimonials">
                <div className="project_testimonials_text">See what our clients are saying</div>

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
        </div>
    )
}

export default Project