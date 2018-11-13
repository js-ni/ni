import React from 'react'
import {Box} from 'rebass';

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


