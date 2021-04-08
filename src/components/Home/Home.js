import React from 'react';
import './Home.css';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Header from '../Header/Header';
import Lunch from '../Lunch/Lunch';
import DeliverType from '../DeliverType/DeliverType';
import Footer from '../Footer/Footer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import breakfast from '../../fakeData/breakfast';
import lunch from '../../fakeData/lunch';
import dinner from '../../fakeData/dinner';
import deliver from '../../fakeData/deliver';

const Home = () => {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleBreakfast = () => {
        const breakfast = document.getElementById('breakfast-show');
        const lunch = document.getElementById('lunch-show');
        const dinner = document.getElementById('dinner-show');
        breakfast.style.display = 'block';
        lunch.style.display = 'none';
        dinner.style.display = 'none';
    }
    const handleLunch = () => {
        const breakfast = document.getElementById('breakfast-show');
        const lunch = document.getElementById('lunch-show');
        const dinner = document.getElementById('dinner-show');
        breakfast.style.display = 'none';
        lunch.style.display = 'block';
        dinner.style.display = 'none';
    }
    const handleDinner = () => {
        const breakfast = document.getElementById('breakfast-show');
        const lunch = document.getElementById('lunch-show');
        const dinner = document.getElementById('dinner-show');
        breakfast.style.display = 'none';
        lunch.style.display = 'none';
        dinner.style.display = 'block';
    }


    return (
        <div className="container">
            <Header></Header>
            <div className="mt-4 mb-4 text-center">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    <Tab onClick={handleBreakfast} label="Breakfast" />
                    <Tab onClick={handleLunch} label="Lunch" />
                    <Tab onClick={handleDinner} label="Dinner" />
                </Tabs>
            </div>
            <div id="breakfast-show" className="breakfast">
                <div className="home-style mb-4">
                    {
                        breakfast.map(breakfast => <Breakfast key={breakfast.key} breakfast={breakfast}></Breakfast>)
                    }
                </div>
            </div>
            <div id="lunch-show" className="lunch">
                <div className="home-style mb-4">
                    {
                        lunch.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>)
                    }
                </div>
            </div>
            <div id="dinner-show" className="dinner">
                <div className="home-style mb-4">
                    {
                        dinner.map(dinner => <Dinner key={dinner.key} dinner={dinner}></Dinner>)
                    }
                </div>
            </div>
            <div>
                <h2>Why you choose us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum <br /> dolores obcaecati fugit? Totam, recusandae delectus.</p>
                <div className="home-style">
                    {
                        deliver.map(deliver => <DeliverType key={deliver.key} deliver={deliver}></DeliverType>)
                    }
                </div>
            </div>

            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;