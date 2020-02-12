import React from 'react';
import {For} from 'react-loops';
import {Box, Flex} from '@chakra-ui/core';

/**
 * Element that displays a Github profile card. For now it only displays
 * the member profile picture with a link to member profile.
 *
 * Props required:
 * - member: A dictionay of a Github profile that has at least the avatar and username
 */
export function MemberProfile(props) {
  return (
    <a href={props.member.html_url} title={props.member.login}>
      <Box
        as="img"
        alt={props.member.login}
        rounded={4}
        src={props.member.avatar_url}
        width={16}
      />
    </a>
  );
}

/**
 * Displays a list of github profiles. Each profile is displayed in a MemberProfile element
 *
 * Props required:
 * - members: An array of github dictinaries profiles
 */
export function OrganizationMembers(props) {
  return (
    <Flex justify="center" wrap="wrap">
      <For
        of={props.members}
        as={member => (
          <Box mx={2} my={2}>
            <MemberProfile member={member} />
          </Box>
        )}
      />
    </Flex>
  );
}
