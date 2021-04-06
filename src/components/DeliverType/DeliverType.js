import React from 'react';
import { Card } from 'react-bootstrap';

const DeliverType = (props) => {
    const {name, img} = props.deliver;
    return (
        // <div>
        //     <h2>{name}</h2>
        // </div>
        <Card className="p-3 card-style container">
            <div className="text-center">
                <Card.Img className="" variant="top" src={require(`../../images/delever/${img}`).default} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias iusto excepturi fugit.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
};

export default DeliverType;