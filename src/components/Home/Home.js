import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import img1 from '../Image/4.jpg'
import img2 from '../Image/6.jpg'
import img3 from '../Image/7.jpg'

import './home.css'

function Home() {


    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="slide-img"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mr Empire Design</h3>
                        <p>Quality and Customers are our first priority</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slide-img"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Mr Empire Design</h3>
                        <p>Quality and Customers are our first priority</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slide-img"
                        src={img3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Mr Empire Design</h3>
                        <p>Quality and Customers are our first priority</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;