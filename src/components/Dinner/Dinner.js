import React from 'react';
import { Card } from 'react-bootstrap';

const Dinner = (props) => {
    const { name, price, img } = props.dinner;
    return (
        <Card className="text-center p-3 card-style container">
            <div>
                <Card.Img className="img-size" variant="top" src={require(`../../images/Dinner/${img}`).default} />
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

export default Dinner;