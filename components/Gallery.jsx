
import React from 'react';
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';


const Gallery = ({ heading }) => {
    return (
        <div className="p-8 flex justify-center">
            <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-8">

                <div class="bg-[url('/ig-img-1.jpeg')] h-80 my-4 w-64 bg-video bg-cover bg-center shadow-lg cursor-pointer">
                    <div class="bg-black bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-300">
                        <h1 class="uppercase text-xl text-golden font-black group-hover:text-secondary transition-all duration-300"></h1>
                    </div>
                </div>
                <div class="bg-[url('/ig-img-1.jpeg')] h-80 my-4 w-64 bg-video bg-cover bg-center shadow-lg cursor-pointer">
                    <div class="bg-black bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-300">
                        <h1 class="uppercase text-xl text-golden font-black group-hover:text-secondary transition-all duration-300"></h1>
                    </div>
                </div>
                <div class="bg-[url('/ig-img-1.jpeg')] h-80 my-4 w-64 bg-video bg-cover bg-center shadow-lg cursor-pointer">
                    <div class="bg-black bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-300">
                        <h1 class="uppercase text-xl text-golden font-black group-hover:text-secondary transition-all duration-300"></h1>
                    </div>
                </div>
                <div class="bg-[url('/ig-img-1.jpeg')] h-80 my-4 w-64 bg-video bg-cover bg-center shadow-lg cursor-pointer">
                    <div class="bg-black bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-300">
                        <h1 class="uppercase text-xl text-golden font-black group-hover:text-secondary transition-all duration-300"></h1>
                    </div>
                </div>
      
                <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">2</div>
                <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">3</div>
                <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">4</div>
                <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">5</div>
                <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">6</div>
                <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">7</div>
                <div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
            </div>
        </div>
    );
};

export default Gallery;
