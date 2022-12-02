import React, { useEffect } from "react";
import Slide1 from '../../assets/slide1.png';
import Slide2 from '../../assets/slide2.png'
import Slide3 from '../../assets/slide3.png'
import Slide4 from '../../assets/slide4.png'
import Slide5 from '../../assets/slide5.png'
import Slide6 from '../../assets/slide6.png'
import Slide7 from '../../assets/slide7.png'
import Slide8 from '../../assets/slide8.png'

import Location from '../../assets/l2.png'
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
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 80px;

`

export const Box = styled.div`
    width: 30%;
    height: 259px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 70px;
    align-self: ${(props) => props.align};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
        <div className="project_container" id="contact_2">
            <div className="project_container_header" >Projects Done</div>
            <div className="project_container_text">Here are some cleaning service done for our clients in South Africa</div>

            <div className="carousel_container">
                <Carousel>
                    {[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8].map((element, idx) => (
                        <Image url={element} key={idx}>
                            <div className="before_cont">
                                <div className="before_box"/>
                                <div className="before">
                                    {
                                    idx % 2 === 0
                                    ? 'Before'
                                    : 'After'
                                    }
                                </div>
                            </div>
                        </Image>
                    ))}
                </Carousel>

            </div>
            <div className="l_p">
                <img src={Location} />
                <div>
                    Pretoria, SouthAfrica
                </div>

            </div>

            <div className="project_testimonials">
                <div className="project_testimonials_text">See what our clients are saying</div>

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
        </div>
    )
}

export default Project