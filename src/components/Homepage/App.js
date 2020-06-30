import React from 'react';
import './App.css';
import GlobalFonts from '../font';

import header from './header';
import hype from './hype';
import footer from './footer';
import nav from './navigation';
import hypeb from './hypeb';
import hypec from './hypec';

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

