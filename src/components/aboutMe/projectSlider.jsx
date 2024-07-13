import React, { useState, useEffect } from 'react';

function Slide() {
  return (
    <div className='sliderContainer flex justify-center items-center flex-col min-w-full min-h-full mt-2 p-2'>
      <div className="photo w-4/4 h-[180px]">
        <img src="./src/assets/photo/resturant.jpg" alt="" className='w-full h-full object-cover' />
      </div>
      <div className="description flex flex-col w-full items-center mt-7 overflow-hidden h-full rounded-md text-white">
        <div className='w-full flex justify-around items-center  border-b  p-3'>
          <div className='px-2 w-1/4 text-sm mr-auto'>Features:</div>
          <div className='w-3/4 flex justify-end'>
            <div className='px-2 text-[rgb(37,37,37)] text-sm rounded-sm'>Viewed: 1M</div>
            <div className='px-2 text-[rgb(37,37,37)] text-sm rounded-sm'>Live demo</div>
          </div>
        </div>
        <div className='innerDescription flex flex-col justify-around w-full h-full list-none p-3'>
          <div className='featureItem'>Order System</div>
          <div className='featureItem'>Payment Integration</div>
          <div className='featureItem'>Fully responsive and pixel perfect</div>
          <div className='featureItem'>Admin dashboard</div>
        </div>
      </div>
      <div className="dots flex p-2 justify-center items-center ">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="controls flex justify-around items-center w-full  "> 
<div className="pre shadow-lg px-2 rounded-full bg-white">&lt;</div>
<div className="Next  px-2 rounded-full bg-white">&gt;</div>

      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="carousel w-full shadow-lg rounded-md flex flex-col max-w-[350px] h-[500px] overflow-hidden">
      <div className='font-bold m-2 rounded-lg px-3 border text-white'>Business type: Restaurant</div>
      <div className="flex flex-row w-full">
        <Slide />
        <Slide />
      </div>
    </div>
  );
}

export default Slider;
