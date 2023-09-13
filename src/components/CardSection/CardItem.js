import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = (props) => {

    return (
        <div>
            <Card style={{ width: '18rem', padding: '30px' }}  >
                <Card.Img variant="top" src={props.item.src} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>
                        {props.item.description}
                    </Card.Text>
                    <Button onClick={() => { props.handleSeeDesign(props.item) }} variant="primary">See Design</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardItem
