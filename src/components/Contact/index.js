import React, { useState, useCallback, useEffect } from "react";
import { Stack } from "react-bootstrap";
import './contact.styles.css';
import styled from "@emotion/styled";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export const sendEmail = async (data) => {
    try {
        const response = await axios.post('https://elated-tux-pike.cyclic.app/email', data)
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please, enter your full name'),
    phone: Yup.string().required('Please, enter your phone number'),
    email: Yup.string().email().required('Please, enter your email'),
    msg: Yup.string().required('Please, enter your message')
})



const Input = styled.input`
    width: 100%;
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
    width: 100%;
    height: 200px;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #04749C;
    border-radius: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
`

// const Button = styled.button`

// `



const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [map, setMap] = useState(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast();
    const [coords, setCords] = useState({
        lat: 28.201622412276866,
        lng: -25.83611107578315
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
        width: '100%',
        height: '100%'
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

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        resetForm,

        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            msg: ''
        },

        validationSchema,
        onSubmit: async (values) => {
            setLoading(true)
            await sendEmail({ ...values, subject: "Service enquiry" })
            toast({
                title: 'Email service.',
                description: "Your email has been received successfully, out team will attent to it and get back to you in the shortest possible time",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false)
        },
    });

    return (
        <>
            {isLoaded && (
                <div className="contact_us_container" id="contact">
                    <div className="contact_us_container_header">Contact Us</div>
                    <div className="contact_us_container_text">
                        Give us a try – you’ll be glad you did!
                    </div>

                    <div className="contact_us_box">
                        <div className="contact_form">
                            <div className="form_header">
                                Get In Touch With Us
                            </div>


                            <div className="inp_cont">
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='name'
                                    // onChange={(e) => setName(e.target.value)}
                                    placeholder='Enter name'
                                />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    {errors.name}
                                </div>
                            </div>

                            <div className="inp_cont">
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='email'
                                    placeholder='Enter email'
                                />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    {errors.email}
                                </div>
                            </div>
                            <div className="inp_cont">
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='phone'
                                    placeholder='Enter phone number'
                                />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    {errors.phone}
                                </div>
                            </div>

                            <div className="inp_cont">
                                <TextArea
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='msg'
                                    placeholder='Enter message' />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    {errors.msg}
                                </div>
                            </div>

                            <Button
                                isLoading={loading}
                                width='80%'
                                height='50px'
                                background='#ED5955'
                                borderRadius='20px'
                                color='#fff'
                                display= 'flex'
                                justifyContent='center'
                                alignItems= 'center'
                                fontWeight={600}
                                fontSize='16px'
                                outline='none'
                                border= 'none'
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                        <div className="g_map">
                            <div className="address__">Our Physical Address</div>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={coords}
                                zoom={5}
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