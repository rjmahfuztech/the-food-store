import React from 'react';
import './Home.css';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Header from '../Header/Header';
import HomeInfo from '../HomeInfo/HomeInfo';
import Lunch from '../Lunch/Lunch';
import DeliverType from '../DeliverType/DeliverType';

const Home = () => {

    const breakfast = [
        {
            "name": "Eggs Benedict",
            "img": "breakfast1.png",
            "price": 9.12
        },
        {
            "name": "Breakfast Sandwich",
            "img": "breakfast2.png",
            "price": 9.92
        },
        {
            "name": "Bake Chicken",
            "img": "breakfast3.png",
            "price": 11.17
        },
        {
            "name": "Bagel and cream cheese",
            "img": "breakfast4.png",
            "price": 6.66
        },
        {
            "name": "Full Breakfast Fried Egg Toast Brunch",
            "img": "breakfast5.png",
            "price": 3.45
        },
        {
            "name": "Toast Croissant Fried egg",
            "img": "breakfast6.png",
            "price": 19.33
        },
    ];

    const lunch = [
        {
            "name": "Beef Steak",
            "img": "lunch1.png",
            "price": 15.23
        },
        {
            "name": "Honey-Soy-Glazed Salmon with Peppers",
            "img": "lunch2.png",
            "price": 7.12
        },
        {
            "name": "Tarragon-Rubbed-Salmon",
            "img": "lunch3.png",
            "price": 6.9
        },
        {
            "name": "Indian Lunch",
            "img": "lunch4.png",
            "price": 8.77
        },
        {
            "name": "Fried Chicken Bento",
            "img": "lunch5.png",
            "price": 18.57
        },
        {
            "name": "Healthy Meal Plan",
            "img": "lunch6.png",
            "price": 24.55
        },
    ];

    const dinner = [
        {
            "name": "Baked Chicken",
            "img": "dinner1.png",
            "price": 9.99
        },
        {
            "name": "Lemony Salmon Piccata",
            "img": "dinner2.png",
            "price": 10.95
        },
        {
            "name": "Garlic Butter Baked Salmon",
            "img": "dinner3.png",
            "price": 6.89
        },
        {
            "name": "French fries with cheese",
            "img": "dinner4.png",
            "price": 8.89
        },
        {
            "name": "Pork Tenderloin With Quinoa Pilaf",
            "img": "dinner5.png",
            "price": 12.99
        },
        {
            "name": "Almon with Grapefruit and Lentil Salad",
            "img": "dinner6.png",
            "price": 7.79
        },
    ];

    const deliver = [
        {
            "name": "Fast Delivery",
            "img": "adult-blur-blurred-background-687824.png"
        },
        {
            "name": "A Good Auto Responder",
            "img": "chef-cook-food-33614.png"
        },
        {
            "name": "Home Delivery",
            "img": "architecture-building-city-2047397.png"
        }
    ]

    /*
    const foodData = [
        // { "bannerImg": "bannerbackground.png" },
        {
            "breakfast": [
                {
                    "name": "Eggs Benedict",
                    "img": "breakfast1.png",
                    "price": 9.12
                },
                {
                    "name": "Breakfast Sandwich",
                    "img": "breakfast2.png",
                    "price": 9.92
                },
                {
                    "name": "Bake Chicken",
                    "img": "breakfast3.png",
                    "price": 11.17
                },
                {
                    "name": "Bagel and cream cheese",
                    "img": "breakfast4.png",
                    "price": 6.66
                },
                {
                    "name": "Full Breakfast Fried Egg Toast Brunch",
                    "img": "breakfast5.png",
                    "price": 3.45
                },
                {
                    "name": "Toast Croissant Fried egg",
                    "img": "breakfast6.png",
                    "price": 19.33
                },
            ]
        },
        {
            "Lunch": [
                {
                    "name": "Beef Steak",
                    "img": "lunch1.png",
                    "price": 15.23
                },
                {
                    "name": "Honey-Soy-Glazed Salmon with Peppers",
                    "img": "lunch2.png",
                    "price": 7.12
                },
                {
                    "name": "Tarragon-Rubbed-Salmon",
                    "img": "lunch3.png",
                    "price": 6.9
                },
                {
                    "name": "Indian Lunch",
                    "img": "lunch4.png",
                    "price": 8.77
                },
                {
                    "name": "Fried Chicken Bento",
                    "img": "lunch5.png",
                    "price": 18.57
                },
                {
                    "name": "Healthy Meal Plan",
                    "img": "lunch6.png",
                    "price": 24.55
                },
            ]
        },
        {
            "Dinner": [
                {
                    "name": "Baked Chicken",
                    "img": "dinner1.png",
                    "price": 9.99
                },
                {
                    "name": "Lemony Salmon Piccata",
                    "img": "dinner2.png",
                    "price": 10.95
                },
                {
                    "name": "Garlic Butter Baked Salmon",
                    "img": "dinner3.png",
                    "price": 6.89
                },
                {
                    "name": "French fries with cheese",
                    "img": "dinner4.png",
                    "price": 8.89
                },
                {
                    "name": "Pork Tenderloin With Quinoa Pilaf",
                    "img": "dinner5.png",
                    "price": 12.99
                },
                {
                    "name": "Almon with Grapefruit and Lentil Salad",
                    "img": "dinner6.png",
                    "price": 7.79
                },
            ]
        }

    ];*/

    console.log(breakfast);
    return (
        <div className="container">
            <Header></Header>
            <div className="m-5 text-center">
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
            <div className="home-style m-5">
                {
                    breakfast.map(breakfast => <Breakfast breakfast={breakfast}></Breakfast>)
                }

                {
                    lunch.map(lunch => <Lunch lunch={lunch}></Lunch>)
                }

                {
                    dinner.map(dinner => <Dinner dinner={dinner}></Dinner>)
                }
            </div>
            {/* <div className="home-style">
                {
                    lunch.map(lunch => <Lunch lunch={lunch}></Lunch>)
                }
            </div> */}
            {/* <div className="home-style">
                {
                    dinner.map(dinner => <Dinner dinner={dinner}></Dinner>)
                }
            </div> */}
            <div>
                <h2>Why you choose us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum <br/> dolores obcaecati fugit? Totam, recusandae delectus.</p>
                <div className="home-style">
                    {
                        deliver.map(deliver => <DeliverType deliver={deliver}></DeliverType>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;