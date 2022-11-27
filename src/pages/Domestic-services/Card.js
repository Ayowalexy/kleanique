import React from 'react';
import './card.styles.css'
import styled from '@emotion/styled';
import Garden from '../../assets/garden.png'


const Image = styled.div`
    width: 37%;
    height: 350px;
    background-image: url(${Garden});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`


const Card = () => {
    return (
        <div className='card_container'>
            <Image />
            <div className='card_box'>
                <div className='card_header'>Garden Services</div>
                <ul>
                    <li>Garden perimeter cleaning</li>
                    <li>General garden services</li>
                    <li>Topiary Services</li>
                </ul>
                <button>
                    Get a quote
                </button>
            </div>
        </div>
    )
}

export default Card