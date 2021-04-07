import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Lunch = (props) => {
    const { name, price, img, key } = props.lunch;
    const history = useHistory();

    const handleClick = (useKey) => {
        const url = `/food/${useKey}`;
        history.push(url);
    }
    return (
        <Card onClick={() => handleClick(key)} className="text-center card-style p-3 container">
            <div>
                <Card.Img variant="top" className="img-size" src={require(`../../images/lunch/${img}`).default} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>${price}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Lunch;