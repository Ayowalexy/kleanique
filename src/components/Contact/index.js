import React, { useState, useCallback, useEffect } from "react";
import { Stack } from "react-bootstrap";
import './contact.styles.css';
import styled from "@emotion/styled";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';




const Input = styled.input`
    width: 80%;
    height: 50px;
    padding-left: 20px;
    background: #FFFFFF;
    border: 1px solid #04749C;
    border-radius: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
`

const Select = styled.select`
    width: 80%;
    height: 50px;
    background: #FFFFFF;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #04749C;
    border-radius: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
`

const TextArea = styled.textarea`
    width: 80%;
    height: 200px;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #04749C;
    border-radius: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
`

const Button = styled.button`
    width: 80%;
    height: 50px;
    background: #ED5955;
    border: 1px solid #04749C;
    border-radius: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    outline: none;
    border: none;
`



const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [map, setMap] = useState(null)
    const [coords, setCords] = useState({
        lat: -3.745,
        lng: -38.523
    })

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_KEY}`
    })

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const containerStyle = {
        width: '650px',
        height: '650px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const getLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude
                const long = position.coords.longitude
                setCords({ lat, long })
            }, () => {
            });
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <>
            {isLoaded && (
                <div className="contact_us_container">
                    <div className="contact_us_container_header">Contact Us</div>
                    <div className="contact_us_container_text">
                        Give us a try – you’ll be glad you did!
                    </div>

                    <div className="contact_us_box">
                        <div className="contact_form">
                            <div className="form_header">
                                Get In Touch With Us
                            </div>


                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter name'
                            />

                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter Email'
                            />
                            <Input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter Phone Number'
                            />

                            <Select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value='Message 1'>Message 1</option>
                                <option value='Message 2'>Message 2</option>

                            </Select>

                            <TextArea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter message' />

                            <Button>
                                Submit
                            </Button>
                        </div>
                        <div>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={coords}
                                zoom={15}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                            </GoogleMap>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default ContactUs