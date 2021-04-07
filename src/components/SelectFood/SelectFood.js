import React from 'react';
import { useParams } from 'react-router';
import foodData from '../../fakeData/data';
console.log(foodData);

const SelectFood = () => {
    const {byKey} = useParams();
    return (
        <div>
            <h2>selected: {byKey}</h2>
        </div>
    );
};

export default SelectFood;