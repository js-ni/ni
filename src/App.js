import React from 'react';
import {Box} from 'rebass';
import MediumPosts from '@js-ni/medium-posts';

import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Box bg="#eff1f5">
        <Box m="0 auto" px={48} py={42} width={948}>
          <MediumPosts />
        </Box>
      </Box>
      <Events />
      <Footer />
    </>
  );
}

export default App;
