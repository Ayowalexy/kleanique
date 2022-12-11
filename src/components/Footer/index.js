import React from "react";
import './footer.styles.css';
import Phone from '../../assets/svg/phone.svg'
import Email from '../../assets/svg/email.svg'
import FB from '../../assets/fb.png'
import Wh from '../../assets/wh.png'
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
                        <div className="footer_container" >
                            <div className="footer_box">
                                <div className="footer_icon_cont">
                                    <div >
                                        <a className="footer_icon" href="tel:063 260 2448">
                                            <img src={Phone} />
                                            <div> 063 260 2448</div>
                                        </a>

                                    </div>
                                    <div >
                                        <a className="footer_icon" href="https://web.facebook.com/profile.php?id=100087360549776&mibextid=ZbWKwL&_rdc=1&_rdr">
                                            <img src={FB} />
                                            <div>Kleanique Cleaning service</div>

                                        </a>
                                    </div>
                                </div>
                                <div className="f_image">
                                    <img src={Logo2} className='footer_image' />
                                </div>
                                <div >
                                    <div >
                                        <a className="footer_icon" style={{marginBottom: '20px'}} href="mailto:info@kleanique.co.za">
                                            <img src={Email} />
                                            <div>info@kleanique.co.za</div>
                                        </a>
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
                        <div className="footer_mobile" id='f_tter'>
                            <img src={Logo2} className='f_logo' />
                            <div className="logos_mobile">
                                <a href="https://wa.me/27632602448">
                                    <img src={Wh} />
                                </a>
                                <a href="mailto:info@kleanique.co.za">
                                    <img src={Email} />
                                </a>
                                <a href="https://web.facebook.com/profile.php?id=100087360549776&mibextid=ZbWKwL&_rdc=1&_rdr">
                                    <img src={FB} />
                                </a>
                                <a href='https://www.google.com/maps?z=12&t=m&q=loc:-25.83611107578315+28.201622412276866'>
                                <img src={Location} />
                                </a>

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