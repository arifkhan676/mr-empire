import React from 'react'
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = (props) => {

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
                    <Link to={`/Product/${id}`} >   <Button variant="primary"> See Design  </Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardItem
