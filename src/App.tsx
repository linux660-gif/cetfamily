
import React, { Component } from 'react';
import Footer from './Components/Footer';
import Navigaitionbar from './Navigaitionbar'
import Announcements from './Components/Announcements';
import Carousel from './Carousel';
import CardStyles from './Components/CardStyles.css'
import ThemeSwitch from './ThemeSwitch';
import { useTheme } from './ThemeContext';
import { useEffect } from 'react';




const App: React.FC = () => {
     const { isDarkMode } = useTheme();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
    return (
      <>
    <div style={{ paddingTop: '56px' }}>
          <Navigaitionbar />
          <Carousel />
          
           <p className="Welcome-message">Welcome to the Official Central Evangelistic Website</p>
        <p className="Welcome-message">John 3:16</p>
        <p className="Welcome-message">For God so loved the World that he gave His only begotten Son Who
            believes in Him
         </p>


          <Announcements />
      <Footer />
            </div>
            </>
  );
};

export default App;
