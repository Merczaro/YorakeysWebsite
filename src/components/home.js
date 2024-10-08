import React from 'react';
import Carousel from './carousel.js';
import gamebg from '../images/game-bg.jpg';
import gamebanner from '../images/gamebg.jpg';
const Home = () => {
  return (
    <div className="mt-8">
      <div className="w-full mb-8">
        <Carousel />
      </div>
      <div className="mt-8 max-w-8xl mx-auto flex justify-center items-center h-32 bg-cover bg-center" style={{ backgroundImage: `url(${gamebanner})` }}>
        <a href="/games" className="bg-gray-200 text-black font-bold uppercase py-4 px-8 rounded-full shadow-md border border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-300">
          Explore Our Games
        </a>
      </div>
      <div className="flex flex-col md:flex-row pt-2 p-8 bg-black text-white max-w-8xl">
        <div className="flex-1 text-left p-4 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl mb-2 text-center">Turning Imaginary Dreams into Reality</h2>
          <p className="mt-2 text-justify">
            At Yorakeys, we are dedicated to transforming imagination into reality. Our mission is to bring you
            innovative games that are crafted with both passion and precision. Each game we create is a labor of love, designed to
            transport you into exciting new worlds and immersive experiences. Immerse yourself in captivating stories that unfold
            with every level, and discover gameplay that is meticulously crafted to challenge and inspire. Whether you’re a seasoned
            gamer or new to the scene, our games are built to ignite your creativity and provide endless hours of enjoyment.
            Explore our diverse collection and find your next adventure with us.
          </p>
        </div>
        <div className="flex-1 p-4 mt-8 md:mt-0 flex justify-center items-center">
          <img src={gamebg} alt="Game" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
