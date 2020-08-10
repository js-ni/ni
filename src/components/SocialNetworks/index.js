import React from 'react';
import {Box, Flex, Heading, Text, Stack, Image} from '@chakra-ui/core';

export default function Welcome() {
  return (
    <Flex backgroundAttachment="fixed" justify="center" px={4} py={[4, 8]}>
      <Box color="white" maxWidth={600} textAlign="center">
        <Stack isInline>
          <a
            href="https://www.facebook.com/javascriptni/"
            target="_blank"
            style={{marginRight: '10px', marginTop: '10px'}}
          >
            <Image
              rounded="full"
              size="64px"
              src="/assets/img/social-networks/facebook.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://chat.whatsapp.com/KdKrEt9RKPG7fGtRHnVgVA"
            target="_blank"
            style={{marginRight: '10px', marginTop: '10px'}}
          >
            <Image
              rounded="full"
              size="64px"
              src="/assets/img/social-networks/whatsapp.png"
              alt="WhatsApp"
            />
          </a>
          <a
            href="https://t.me/joinchat/T9QmVEsRCS14IX8hMKVhYw"
            target="_blank"
            style={{marginRight: '10px', marginTop: '10px'}}
          >
            <Image
              rounded="full"
              size="64px"
              src="/assets/img/social-networks/telegram.webp"
              alt="Telegram"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC2qZ0Fvw9NNN5ROdKydeV8Q"
            target="_blank"
            style={{marginRight: '10px', marginTop: '10px'}}
          >
            <Image
              rounded="full"
              size="64px"
              src="/assets/img/social-networks/youtube.png"
              alt="YouTube"
            />
          </a>
          <a
            href="https://www.instagram.com/javascript_ni/"
            target="_blank"
            style={{marginRight: '10px', marginTop: '10px'}}
          >
            <Image
              rounded="full"
              size="64px"
              src="/assets/img/social-networks/instagram.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.twitter.com/javascript_ni/"
            target="_blank"
            style={{marginRight: '10px', marginTop: '10px'}}
          >
            <Image
              rounded="full"
              size="64px"
              src="/assets/img/social-networks/twitter.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://join.slack.com/t/javascript-nicaragua/shared_invite/zt-eyj6vlp2-0efY~7pLTqWVmLAmfTzVag"
            target="_blank"
            style={{marginTop: '10px'}}
          >
            <Image
              rounded="full"
              size="64px"
              src="/assets/img/social-networks/slack.png"
              alt="Slack"
            />
          </a>
        </Stack>
      </Box>
    </Flex>
  );
}
