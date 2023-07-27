import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    // marginLeft: '150px',
    // marginRight: '150px',


};
const Hero = () => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);
export default Hero;