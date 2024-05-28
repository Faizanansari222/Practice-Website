// Header.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <header className="w-full overflow-hidden">
            <Slider {...settings} className="w-full">
                <div>
                    <img className="w-full h-auto" src="https://www.w3schools.com/w3images/chicago.jpg" alt="Image 1" />
                </div>
                <div>
                    <img className="w-full h-auto" src="https://www.w3schools.com/w3images/ny.jpg" alt="Image 2" />
                </div>
                <div>
                    <img className="w-full h-auto" src="https://www.w3schools.com/w3images/la.jpg" alt="Image 3" />
                </div>
            </Slider>
        </header>
    );
};

export default Header;