import React from 'react';
import Hero from '../../components/atom/Hero';
import Navbar from '../../components/atom/Navbar';
import Carousel from '../../components/atom/Carousel';
import FormMerge from '../../components/atom/FormMerge';
import Footer from '../../components/atom/Footer';
const Home = () => {
  return (
    <div className="bg-santorini-s_light h-full flex-col">
      <div>
        <Navbar />
        <Hero />
        <Carousel />
        <FormMerge />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
