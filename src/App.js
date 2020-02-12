import React from 'react';
import {Box, CSSReset, ThemeProvider} from '@chakra-ui/core';

import Events from './components/Events';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/Welcome';
import OrgMembersDisplay from './components/Members';
import Talks from './components/Talks';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <Welcome />
      <Box bg="#eff1f5">
        <OrgMembersDisplay orgName="js-ni" />

        <Box m="0 auto" px={[3, 4, 0]} py={5}>
          <Feed />
        </Box>
      </Box>
      <Talks />
      <Events />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
