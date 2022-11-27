import React, { useState, useEffect } from "react";
import './modal.styles.css';
import Garden from '../../assets/garden.png';
import { IoIosClose } from 'react-icons/io'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styled from "@emotion/styled";


const Image = styled.div`
    width: 83%;
    height: 150px;
    background-image: url(${Garden});
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

const Modal = ({ name, type, active, setActive }) => {
    const target = document.querySelector('.b_layout')

    useEffect(() => {
        if(active){
            disableBodyScroll(target)
        } else {
            enableBodyScroll(target)
        }
    }, [active])

    return (
        <>
            {active && (
                <div className="modal_container">

                    <div className="modal_box">
                        <div className="modal_form">
                            <div className="modal_close" onClick={() => setActive(!active)}>
                                <IoIosClose fill="#000" size='40px' />
                            </div>
                            <div className="modal_form_header" style={{ color: type !== 'commercial' ? '#ED5955' : '#4DBDEF' }}>{name}</div>
                            <Image />
                            <div className="modal_input_container">
                                <div className="modal_input">
                                    <Input placeholder="Enter name" />
                                    <Input placeholder="Enter email address" />
                                    <Input placeholder="Enter Phone number" />
                                    <div className="modal_btn">
                                        <button
                                        style={{ backgroundColor: type !== 'commercial' ? '#ED5955' : '#4DBDEF' }}
                                        >
                                            Submit
                                        </button>
                                        <button
                                        style={{ border: type !== 'commercial' ? '1px solid #ED5955' : '1px solid #4DBDEF',
                                        color: type !== 'commercial' ? '#ED5955' : '#4DBDEF' }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                                <div className="modal_input">
                                    <TextArea placeholder="Enter Message" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Modal