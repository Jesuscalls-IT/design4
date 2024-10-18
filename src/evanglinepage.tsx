import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import EvangelinePage from './components/evangiline';

const DrPaulPage: React.FC = () => {
  return (
    <div>
      <Header />
      <EvangelinePage />
      <Footer />
    </div>
  );
};

export default DrPaulPage;
