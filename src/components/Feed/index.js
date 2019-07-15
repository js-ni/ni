import React from 'react';
import {Box, Card, Flex, Heading, Link, Text} from 'rebass';

import {usePosts} from './effects';

function Feed() {
  const JSNIC_MEDIUM_RSS_FEED = 'https://medium.com/feed/javascript-nicaragua';
  const [loading, posts] = usePosts(JSNIC_MEDIUM_RSS_FEED);

  return (
    <React.Fragment>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <Heading fontSize={28} fontWeight="normal">
          Blog
        </Heading>
        <Text
          as="a"
          fontSize={14}
          href="https://medium.com/javascript-nicaragua"
        >
          Ver más artículos
        </Text>
      </Flex>

      {loading ? (
        <Text fontSize={16} mt={15}>
          Cargando publicaciones...
        </Text>
      ) : (
        posts.map(post => (
          <Box key={post.url} mt={16}>
            <Article {...post} />
          </Box>
        ))
      )}
    </React.Fragment>
  );
}

function Article(props) {
  const parsedDate = moment(props.pubDate).fromNow();
  return (
    <Card
      as="article"
      bg="white"
      borderRadius={4}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      p={20}
    >
      <Link color="#222" href={props.guid}>
        <Heading as="h3" children={props.title} fontWeight="normal" mb="4px" />
      </Link>
      <Text as="time" color="#aaa" children={parsedDate} />
    </Card>
  );
}

export default Feed;
export {Article};
