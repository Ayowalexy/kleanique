import React, { useState, useEffect } from "react";
import './modal.styles.css';
import Garden from '../../assets/garden.png';
import { IoIosClose } from 'react-icons/io'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useMediaQuery
} from '@chakra-ui/react'
import styled from "@emotion/styled";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useToast } from "@chakra-ui/react";
import { sendEmail } from "../Contact";


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please, enter your full name'),
    phone: Yup.string().required('Please, enter your phone number'),
    email: Yup.string().email().required('Please, enter your email'),
    msg: Yup.string().required('Please, enter your message')
})



const Image = styled.div`
    width: 83%;
    height: 270px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Input = styled.input`
    height: 70px;
    border: none;
    width: 100%;
    font-family: 'Poppins';
    outline: none;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    background: #EEEDED;
    border-radius: 20px;
    margin-top: 30px;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 240px;
    font-family: 'Poppins';
    outline: none;
    font-weight: 400;
    font-size: 14px;
    padding: 20px;
    margin-top: -90px;
    background: #EEEDED;
    border-radius: 20px;
    border: none;
`

const CModal = ({ name, type, active, setActive, image }) => {
    const target = document.querySelector('.b_layout');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
    const toast = useToast();
    const [loading, setLoading] = useState(false);

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
            await sendEmail({ ...values, subject: name })
            toast({
                title: 'Email service.',
                description: "Your email has been received successfully, out team will attent to it and get back to you in the shortest possible time",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            setActive(!active)
            setLoading(false)
        },
    });

    useEffect(() => {
        if (active) {
            // disableBodyScroll(target)
        } else {
            enableBodyScroll(target)
        }
    }, [active])

    return (
        <>
            <Modal isOpen={active} size='full' onClose={() => setActive(!active)}>
                <ModalOverlay />
                <ModalContent
                    boxShadow='none'
                    backgroundColor='transparent' height='fit-content'>
                    {/* <ModalCloseButton color="#fff" onClick={() => setActive(!active)}/> */}
                    <ModalBody

                    >
                        <div className="modal_container">

                            <div className="modal_box">
                                <div className="modal_form">
                                    <div className="modal_close" onClick={() => setActive(!active)}>
                                        <IoIosClose fill="#fff" size='40px' />
                                    </div>
                                    <div className="modal_form_header" style={{ color: type !== 'commercial' ? '#ED5955' : '#4DBDEF' }}>{name}</div>
                                    <Image className="modal_image__" img={image} />
                                    {
                                        name === 'General Office cleaning Services' && (
                                            <div className="data__">
                                                <div >
                                                    Our commercial services cover a wide range of business-related cleaning services, ranging from offices, through to shop floors, mini-assembly outfits, storerooms, and premises used purely for commerce. In case of a monthly, quarterly, or bi-annual cleaning, we strongly recommend our deep cleaning services. However, bi-annual or annual cleaning services should be composed of afterwards disinfection or “nuisance treatment”, which is fondly referred to as “fumigation”.
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li> General surface cleaning</li>
                                                        <li>Deep cleaning</li>
                                                        <li>Decontamination</li>
                                                        <li>Horizon splash polishing</li>
                                                        <li>Office disinfection</li>
                                                        <li>Surface Disinfecting Services</li>
                                                        <li>Fogging Services</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        name === 'Deep Cleaning Services' && (
                                            <div className="data__">
                                                <div >
                                                    Deep cleaning is a specialized type of cleaning that is fondly referred to as lavation aseptic care. As the name suggests, deep cleaning is synonymous with removal of engine clogs, while routine cleaning is simply akin to soap-washing the outer part of the auto engine. Given its specialised nature, sensitivity and intensity, high-pressure washers and specific clientele-tailored products are deployed in a methodological manner to remove accumulated and build-up stubborn dirt, grease, and stains that are obscured to routine cleaning tasks. Our deep cleaning services include, but are not limited to:
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li>Removal of noticeable dirt, dust, and surface nuisance</li>
                                                        <li>Pressured machine scrubbing</li>
                                                        <li>Thorough machine and vacuum suck-up</li>
                                                        <li>Floor tiles polish (on request)</li>
                                                        <li>Friendly chemical scrubbing and scaling of bathroom and toilet monobloc taps and basins, shower head, kitchen sink and basins sparkle-cleaning.</li>
                                                        <li>Toilets washing and disinfecting Clean obscure and hidden areas</li>
                                                        <li>Water-based washing of window frames and glasses Water-based cleaning of doors and other furniture</li>
                                                        <li>Wipe kitchen cupboards and related storages</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        name === 'Move-In/Move-Out Cleaning Services' && (
                                            <div className="data__">
                                                <div >
                                                    Moving into a new or used apartment or a house would generally require a deep cleaning service rather than the normal routine cleaning.
                                                    The same goes for moving out of an apartment or a house. After deep cleaning, the following services are also render for a new entrant into
                                                    an apartment of a house:

                                                </div>
                                                <div>
                                                    <ul>

                                                        <li>Wipe down surfaces (coffee table, end tables, shelving units) </li>
                                                        <li>Make beds and straighten rooms to the best of your ability (clothes folded and put away, toys picked up, etc.)</li>
                                                        <li>Dust furniture and other surfaces like flat electronics screens and lampshades</li>
                                                        <li>Take out trash unless it’s an office or craft room area</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        name === 'Spring Cleaning Services' && (
                                            <div className="data__">
                                                <div >
                                                    Spring-cleaning is typically done to remove any hidden or conspicuous dirt and stubborn stains – from ceiling-top to the ground, and the perimeter. It is meant to sparkle a surface, the entire house, surrounding or office:
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li>Thorough dusting of the ceilingo</li>
                                                        <li>Wall cleaningo</li>
                                                        <li>Carpet and under-the-carpet cleaningo</li>
                                                        <li>Floor dusting and cleaningo Surface polishingo</li>
                                                        <li>Window cleaningo</li>
                                                        <li>Doors, door handles and frame cleaningo</li>
                                                        <li>Kitchen dusting and mopping</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }


                                    <div className="modal_input_container">
                                        <div className="modal_input">
                                            <Input
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name='name'
                                                placeholder="Enter name"
                                            />
                                            <div style={{ color: 'red', fontSize: '15px' }}>
                                                {!!errors.name && touched.name ? errors.name : null}
                                                
                                            </div>
                                            <Input
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name='email'
                                                placeholder="Enter email address" />
                                            <div style={{ color: 'red', fontSize: '15px' }}>
                                                {!!errors.email && touched.email ? errors.email : null}

                                            </div>
                                            <Input
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name='phone'
                                                placeholder="Enter phone number" />
                                            <div style={{ color: 'red', fontSize: '15px' }}>
                                                {!!errors.phone && touched.phone ? errors.phone : null}

                                            </div>
                                            {
                                                isLargerThan600 && (
                                                    <div className="modal_btn">
                                                        <Button
                                                            isLoading={loading}
                                                            onClick={handleSubmit}
                                                            style={{ backgroundColor: type !== 'commercial' ? '#ED5955' : '#4DBDEF' }}
                                                        >
                                                            Submit
                                                        </Button>

                                                        <button
                                                            onClick={() => setActive(!active)}
                                                            style={{
                                                                border: type !== 'commercial' ? '1px solid #ED5955' : '1px solid #4DBDEF',
                                                                color: type !== 'commercial' ? '#ED5955' : '#4DBDEF'
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                )

                                            }

                                        </div>
                                        <div className="modal_input text_area">
                                            <TextArea
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name='msg'
                                                placeholder="Enter message" />
                                            <div style={{ color: 'red', fontSize: '15px' }}>
                                                {!!errors.msg && touched.msg ? errors.msg : null}

                                            </div>
                                            {
                                                !isLargerThan600 && (
                                                    <div className="modal_btn">
                                                         <Button
                                                            isLoading={loading}
                                                            onClick={handleSubmit}
                                                            style={{ backgroundColor: type !== 'commercial' ? '#ED5955' : '#4DBDEF' }}
                                                        >
                                                            Submit
                                                        </Button>
                                                        <button
                                                            onClick={() => setActive(!active)}
                                                            style={{
                                                                border: type !== 'commercial' ? '1px solid #ED5955' : '1px solid #4DBDEF',
                                                                color: type !== 'commercial' ? '#ED5955' : '#4DBDEF'
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                )

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}

export default CModal