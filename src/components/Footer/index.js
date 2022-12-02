import React from "react";
import './footer.styles.css';
import Phone from '../../assets/svg/phone.svg'
import Email from '../../assets/svg/email.svg'
import FB from '../../assets/svg/fb.svg'
import Location from '../../assets/location.png'
import Logo2 from '../../assets/logo_2.png'


const Footer = () => {
    return (
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
}

export default Footer