import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GlobalFonts from '../font';

import header from './header';
import hype from './hype';
import footer from '../footer';
import nav from '../navigation';
import hypeb from './hypeb';
import hypec from './hypec';
import { BrowserRouter } from 'react-router-dom';

const Nav = nav;
const Header = header;
const Footer= footer;
const Hype = hype;
const Hypeb = hypeb;
const Hypec = hypec;

const App = () => {
  return (
      <div>
        <GlobalFonts />
        < Nav />
        < Header />
        < Hype />
        < Hypeb />
        < Hypec />
        < Footer />
      </div>
  );
};

export default App;

