import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import DrPaulDhinakaran from './components/DrPaulDhinakaran';

const DrPaulPage: React.FC = () => {
  return (
    <div>
      <Header />
      <DrPaulDhinakaran />
      <Footer />
    </div>
  );
};

export default DrPaulPage;
