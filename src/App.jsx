import React from 'react';
import Header from './components/Header'; // Import your Builder.io components
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ProducePals from './components/ProducePals';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProducePals />{/* Add other components as needed */}
      <Footer />
    </div>
  );
}

export default App;
