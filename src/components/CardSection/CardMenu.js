import React from 'react'
import { data1 } from '../data/data';
import { CardGroup } from 'react-bootstrap';
import './Card.css'
import CardItem from './CardItem';

const CardMenu = () => {

    const cardData1 = data1.map((item) => {
        // const { id, src, title, description } = item;
        return <CardItem
            item={item}
        />
    })


    return (
        <div className='mr-empire' >
            <h1> MR - EMPIRE </h1>
            <CardGroup className='cardGroup' >
                {cardData1}
            </CardGroup>
        </div>

    )
}

export default CardMenu
