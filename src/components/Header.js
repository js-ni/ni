import React from 'react';
import {Box, Heading} from 'rebass';

function Header() {
  return (
    <Box bg="#f7df1f" py={20} css={{borderBottom: '1px solid #bdbdbd'}}>
      <Heading
        as="h1"
        color="#2d2d2d"
        children="Comunidad JavaScript de Nicaragua"
        fontSize={5}
        fontWeight="normal"
        textAlign="center"
      />
    </Box>
  );
}

export default Header;
