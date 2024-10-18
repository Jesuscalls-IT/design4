import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import MainSection from './components/MainSection'; // Assume MainSection contains content for the homepage


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainSection />   
      <Footer />
    </div>
  );
};

export default HomePage;
