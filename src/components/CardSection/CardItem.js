import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = (props) => {

    const [btn, setBtn] = useState(true);

    const { id, src, title, description } = props.item;

    return (
        <div>
            <Card style={{ width: '18rem', padding: '10px', marginRight: '100px', marginTop: '40px' }}  >
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <Link to={`/Product/${id}`} onClick={() => { setBtn(!btn) }} >   <Button variant="primary"  > {btn === true ? 'See Design' : 'Call for order'}   </Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardItem
