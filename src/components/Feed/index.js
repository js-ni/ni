import {formatDistanceToNow, parseISO} from 'date-fns';
import esLocale from 'date-fns/locale/es';
import React from 'react';
import {For} from 'react-loops';
import {Box, Flex, Heading, Text} from '@chakra-ui/core';

import {usePosts} from './effects';

const JSNIC_MEDIUM_RSS_FEED = 'https://medium.com/feed/javascript-nicaragua';

export default function Feed() {
  const [loading, posts] = usePosts(JSNIC_MEDIUM_RSS_FEED);

  return (
    <Box m="0 auto" maxWidth={948} px={[3, 4, 4, 0]} py={[4, 8]}>
      <Flex align="flex-end" justify="space-between">
        <Heading fontWeight="normal" size="lg">
          Blog
        </Heading>
        <Text as="a" href="https://medium.com/javascript-nicaragua">
          Ver más artículos
        </Text>
      </Flex>

      {loading ? (
        <Text mt={4}>Cargando publicaciones...</Text>
      ) : (
        <For of={posts} as={post => <Article post={post} mt={3} />} />
      )}
    </Box>
  );
}

function Article({post, ...props}) {
  const parsedDate = formatDistanceToNow(parseISO(post.pubDate), {
    locale: esLocale,
  });

  return (
    <Box {...props} as="article" bg="white" rounded={4} p={4} shadow="md">
      <Text as="a" href={post.guid}>
        <Heading as="h3" fontWeight="normal" size="lg">
          {post.title}
        </Heading>
      </Text>
      <Text as="time" color="#aaa">
        {parsedDate}
      </Text>
      <Text color="#888" mt={4}>
        {post.descriptionPlain.split('.').slice(0, 1)}
      </Text>
    </Box>
  );
}
