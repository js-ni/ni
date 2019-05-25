import React from 'react';
import {Box} from 'rebass';

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
      <img
        alt={props.member.login}
        src={props.member.avatar_url}
        style={{borderRadius: '8px'}}
        width="64px"
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
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {props.members.map(member => (
        <Box mx={2} my={2} key={member.login}>
          <MemberProfile member={member} />
        </Box>
      ))}
    </Box>
  );
}
