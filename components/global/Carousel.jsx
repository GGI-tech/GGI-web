

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};
const items = [
    <img src="/ylps5.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="/ylps6.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="/ylps7.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="/ylps5.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="/ylps6.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="/ylps7.jpg" onDragStart={handleDragStart} role="presentation" />
];

const Carousel = () => {
    return (
        <div className='mt-15 w-5/6 sm:w-4/5 lg:w-2/3 mx-auto'>
            <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </div>
    );
}

export default Carousel