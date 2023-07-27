/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Carousel, Image } from 'antd';
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
            <Image style={contentStyle} src="https://www.pchouse.com.bd/image/cache/catalog/banner/slider/main%20slider/laptop/WEB-1270x420w.png.webp"
            />
        </div>
        <div>
            <Image style={contentStyle} src="https://www.pchouse.com.bd/image/cache/catalog/banner/slider/main%20slider/gpu/Web-slider-01-1270x420w.png.webp"
            />
        </div>
        <div>
            <Image style={contentStyle} src="https://www.pchouse.com.bd/image/cache/catalog/%20Adata%20128GB%20A1%20Class%2010/April/16-04-23/sandisk-ssd-+-memory-slider-1270x420h.png.webp"
            />
        </div>
        <div>
            <Image style={contentStyle} src="https://www.pchouse.com.bd/image/cache/catalog/0%20AA/xp-pen-slider-1270x420h.png.webp"
            />
        </div>
    </Carousel>
);
export default Hero;