import React, { createContext, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { data1, data2 } from '../data/data';
import { CardGroup } from 'react-bootstrap';
import './Card.css'
import CardItem from './CardItem';

export const ContextAPI = createContext();

const CardMenu = () => {

    const [cnxtValue, setValue] = useContext('');

    const handleSeeDesign = (item) => {
        //  const item = 
        setValue()

    }

    const cardData1 = data1.map((item) => {
        // const { id, src, title, description } = item;
        return <CardItem
            item={item}
            handleSeeDesign={handleSeeDesign}
        />
    })
    const cardData2 = data2.map((item) => {
        return <CardItem
            item={item}
            handleSeeDesign={handleSeeDesign}
        />
    })

    return (
        <div>
            <h1> MR - EMPIRE </h1>
            <CardGroup className='cardGroup' >
                {cardData1}
            </CardGroup>
            <CardGroup className='cardGroup'>
                {cardData2}
            </CardGroup>
        </div>
    )
}

export default CardMenu
