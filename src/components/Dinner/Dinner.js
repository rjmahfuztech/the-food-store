import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Dinner = (props) => {
    const { name, price, img, key } = props.dinner;
    const history = useHistory();

    const handleClick = (useKey) => {
        const url = `/food/${useKey}`;
        history.push(url);
    }
    return (
        <Card onClick={() => handleClick(key)} className="text-center p-3 card-style container">
            <div>
                <Card.Img className="img-size" variant="top" src={require(`../../images/Dinner/${img}`).default} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>${price}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Dinner;