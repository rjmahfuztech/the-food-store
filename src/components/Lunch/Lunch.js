import React from 'react';
import { Card } from 'react-bootstrap';

const Lunch = (props) => {
    const { name, price, img } = props.lunch;
    return (
        <Card className="text-center card-style p-3 container">
            <div>
                <Card.Img variant="top" className="img-size" src={require(`../../images/lunch/${img}`).default} />
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

export default Lunch;