import React from 'react';
import {Box} from '@chakra-ui/core';

export default function Container(props) {
  return (
    <Box m="0 auto" maxWidth={948} px={[3, 4, 4, 0]} py={[4, 8]} {...props} />
  );
}
