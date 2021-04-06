import React from 'react';
import './Breakfast.css';
import { Card } from 'react-bootstrap';

const Breakfast = (props) => {
    const { name, price, img } = props.breakfast;
    return (
        // <div>
        //     <img src={require(`../../images/Breakfast/${img}`).default} alt=""/>
        //     <h2>{name}</h2>
        // </div>
        <Card className="text-center p-3 container card-style">
            <div>
                <Card.Img className="img-size" variant="top" src={require(`../../images/Breakfast/${img}`).default} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>${price}</Card.Title>
                <Card.Text>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>

    );
};

export default Breakfast;