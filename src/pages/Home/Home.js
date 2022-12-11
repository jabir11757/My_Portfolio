import React from 'react';
import About from '../About/About';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <Projects />
            <About />
            <Contacts />
        </div>
    );
};

export default Home;