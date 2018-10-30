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
        <Box m="0 auto" px={[3, 4, 0]} py={5} css={{maxWidth: '948px'}}>
          <MediumPosts />
        </Box>
      </Box>
      <Events />
      <Footer />
    </>
  );
}

export default App;
