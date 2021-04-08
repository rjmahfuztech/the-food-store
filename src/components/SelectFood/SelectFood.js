import React from 'react';
import './SelectFood.css';
import { useHistory, useParams } from 'react-router';
import foodData from '../../fakeData/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@material-ui/core';


const SelectFood = () => {
    const { byKey } = useParams();

    const specificFood = foodData.find(food => food.key === byKey);
    const { name, price, description, img } = specificFood;

    const decreaseFood = () => {
        const countFood = document.getElementById('count-food');
        // const price = document.getElementById('price');
        const addFood = parseInt(countFood.value);
        const newAddFood = addFood - 1;
        if (newAddFood && addFood >= -1) {
            countFood.value = newAddFood;
        }
        // const totalPrice = newAddFood * parseInt(`${price}`);
        // const totalPrice = newAddFood * 10;

        // price.innerText = totalPrice;
    }

    const increaseFood = () => {
        const countFood = document.getElementById('count-food');
        // const price = document.getElementById('price');
        const addFood = parseInt(countFood.value);
        const newAddFood = addFood + 1;
        countFood.value = newAddFood;
        // const totalPrice = newAddFood * parseFloat(`${price}`);
        // const totalPrice = newAddFood * 10;

        // price.innerText = totalPrice;
    }

    const history = useHistory();
    const handleAddFood = () => {
        history.push('/deliveryInfo')
    }
    return (
        <div className="container mt-5 mb-2">
            <h1>Food Info</h1>
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6 manage-food-style mb-3">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="d-flex align-items-center">
                        <h3 id="price" className="mr-3">${price}</h3>
                        <div className="d-flex food-count-design align-items-center">
                            <span className="pl-3" onClick={decreaseFood}><FontAwesomeIcon icon={faMinus} /></span>
                            <input className="form-control" id="count-food" type="text" value="1" />
                            <span onClick={increaseFood}><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Button onClick={handleAddFood} variant="contained" color="secondary">Add</Button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 img-size text-center">
                    <img src={require(`../../images/allImages/${img}`).default} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectFood;