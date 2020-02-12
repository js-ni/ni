import React from 'react';
import {Box, Heading} from '@chakra-ui/core';

export default function Header() {
  return (
    <Box bg="#f7df1f" py={4}>
      <Heading
        as="h1"
        color="gray.700"
        children="Comunidad JavaScript de Nicaragua"
        fontWeight="normal"
        textAlign="center"
      />
    </Box>
  );
}
