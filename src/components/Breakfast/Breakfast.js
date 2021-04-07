import React from 'react';
import './Breakfast.css';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Breakfast = (props) => {
    const { name, price, img, key } = props.breakfast;
    const history = useHistory();

    const handleClick = (useKey) => {
        const url = `/food/${useKey}`;
        history.push(url);
    }
    return (
        <Card onClick={() => handleClick(key)} className="text-center p-3 container card-style">
            <div>
                <Card.Img className="img-size" variant="top" src={require(`../../images/Breakfast/${img}`).default} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>${price}</Card.Title>
            </Card.Body>
        </Card>

    );
};

export default Breakfast;