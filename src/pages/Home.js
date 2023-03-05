import React from 'react';
import {Link} from "react-router-dom";
import BannerPizza from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home(props) {
    return (
        <div
            className={'home'}
            style={{backgroundImage: `url(${BannerPizza})`}}
        >
            <div className="headerContainer">
                <h1>VikSy's Pizzeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to={'/menu'}>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;