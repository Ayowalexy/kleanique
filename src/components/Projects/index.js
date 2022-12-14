import React, { useEffect, useState } from "react";
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
import { useMediaQuery } from "@chakra-ui/react";
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

    const [idx, currentIndex] = useState(0);
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')


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
        <div className="project_container" id="project_done">
            <div className="project_container_header" >Projects Done</div>
            {
                isLargerThan600 && (<div className="project_container_text">Here are some cleaning service done for our clients in South Africa</div>)
            }

            <div className="carousel_container">
                <Carousel renderDots={() => null} renderArrowLeft={() => null} renderArrowRight={() => null}>
                    {[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8].map((element, idx) => (
                        <div>
                            <Image className="caroul_image" url={element} key={idx}>
                                <div className="before_cont">
                                    <div className="before_box" style={{ backgroundColor: idx % 2 == 0 ? "#FBD6D4" : "#5EFFC9" }} />
                                    <div className="before">
                                        {
                                            idx % 2 === 0
                                                ? 'Before'
                                                : 'After'
                                        }
                                    </div>
                                </div>

                            </Image>
                            <div className="l_p">
                                <img src={Location} />
                                <div style={{
                                    color:
                                        idx === 0 || idx == 1
                                            ? '#190BE2'
                                            : idx === 2 || idx == 3
                                                ? '#1D7ECF'
                                                : idx === 4 || idx === 5
                                                    ? '#ED5955'
                                                    : idx === 6 || idx === 7
                                                        ? '#190BE2'
                                                        : null
                                }}>
                                    {
                                        idx === 0 || idx == 1
                                            ? 'Pretoria, SouthAfrica'
                                            : idx === 2 || idx == 3
                                                ? "Valhalla"
                                                : idx === 4 || idx === 5
                                                    ? "Centurion"
                                                    : idx === 6 || idx === 7
                                                        ? "Pretoria"
                                                        : null
                                    }
                                </div>

                            </div>

                        </div>
                    )
                    )}
                </Carousel>

            </div>


            <div className="project_testimonials">
                <div className="project_testimonials_text">See what our clients are saying</div>

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
        </div>
    )
}

export default Project