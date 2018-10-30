import React from 'react';
import {Flex, Text} from 'rebass';

function Footer() {
  return (
    <Flex alignItems="center" bg="#273531" justifyContent="space-between" p={4}>
      <Text color="#6d7d79">
        Comunidad de desarrolladores JavaScript de Nicaragua
      </Text>
      <a
        href="http://js.org"
        rel="noopener noreferrer"
        target="_blank"
        title="JS.ORG | JavaScript Community"
      >
        <img
          alt="JS.ORG Logo"
          src="https://logo.js.org/bright_horz.png"
          width="102"
        />
      </a>
    </Flex>
  );
}

export default Footer;
