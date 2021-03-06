import React from 'react';
import {Box, CSSReset, theme, ThemeProvider} from '@chakra-ui/core';

import customIcons from 'customIcons';
import Events from './components/Events';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/Welcome';
import SocialNetworks from './components/SocialNetworks';
import OrgMembersDisplay from './components/Members';
import Talks from './components/Talks';

const customTheme = {
  ...theme,
  icons: customIcons,
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      <Welcome />
      <SocialNetworks />
      <Box bg="#eff1f5">
        <OrgMembersDisplay orgName="js-ni" />
        <Feed />
      </Box>
      <Talks />
      <Events />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
