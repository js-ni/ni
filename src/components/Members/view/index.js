import React from 'react'
import {Box} from 'rebass';

/**
 * Element that displays a Github profile card. For now it only displays
 * the member profile picture with a link to member profile.
 *
 * Props required:
 * - member: A dictionay of a Github profile that has at least the avatar and username
 */
export class MemberProfile extends React.Component {
    render() {
        return (
            <a href={this.props.member.html_url}
               title={this.props.member.login}
               style={{display: "inline-block"}}>
                <img src={this.props.member.avatar_url} width="64px"
                     alt={this.props.member.login} />
            </a>
        )
    }
}


/**
 * Displays a list of github profiles. Each profile is displayed in a MemberProfile element
 *
 * Props required:
 * - members: An array of github dictinaries profiles
 */
export class OrganizationMembers extends React.Component {
    render() {
        return (
            <Box px={20}
                style={{display: 'flex', flexDirection: 'row', justifyContent: "center", flexWrap: "wrap"}}>
                {
                    this.props.members.map(member => (
                        <Box mx={2} my={2} style={{borderRadius: "8px", overflow: "hidden"}} key={`member-${member.login}`}>
                            <MemberProfile member={member} />
                        </Box>
                    ))
                }
            </Box>
        )
    }
}


