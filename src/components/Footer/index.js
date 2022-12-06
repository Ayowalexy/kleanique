import React from "react";
import './footer.styles.css';
import Phone from '../../assets/svg/phone.svg'
import Email from '../../assets/svg/email.svg'
import FB from '../../assets/svg/fb.svg'
import Location from '../../assets/location.png'
import { useMediaQuery } from "@chakra-ui/react";
import Logo2 from '../../assets/logo_2.png'


const Footer = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <>
            {
                isLargerThan600 ?
                    (
                        <div className="footer_container" id="contact">
                            <div className="footer_box">
                                <div className="footer_icon_cont">
                                    <div className="footer_icon">
                                        <img src={Phone} />
                                        <div> 063 260 2448</div>
                                    </div>
                                    <div className="footer_icon">
                                        <img src={FB} />
                                        <div>Kleanique Cleaning service</div>
                                    </div>
                                </div>
                                <div className="f_image">
                                    <img src={Logo2} className='footer_image' />
                                </div>
                                <div className="footer_icon_cont">
                                    <div className="footer_icon">
                                        <img src={Email} />
                                        <div>info@kleanique.co.za</div>
                                    </div>
                                    <div className="footer_icon">
                                        <img src={Location} />
                                        <div>150 Langebrink Avenue,<br /> Lyttelton Manor, Centurion<br /> (0157)
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="footer_underline" />
                            <div className="footer_power">Powered by AR RAY Holdings</div>
                        </div>
                    )
                    :
                    (
                        <div className="footer_mobile">
                            <img src={Logo2} />
                            <div className="logos_mobile">
                                <img src={Phone} />
                                <img src={Email} />
                                <img src={FB} />
                                <img src={Location} />

                            </div>
                            <div className="mobile_num">063 260 2448</div>
                            <div className="mobile_divider" />
                            <div className="mbobile_footer">Powered by Array Holdings | All rights reserved</div>
                        </div>
                    )
            }
        </>
    )
}

export default Footer