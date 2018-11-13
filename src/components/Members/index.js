import React from 'react'
import GithubOrg from './GithubOrg'
import {OrganizationMembers} from './view'

export default class OrgMembersDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {members: [], pending: true, error: false}

        // Load the organization members
        this.org = new GithubOrg('js-ni')
        this.org.publicMembers().then(members => {
            this.setState({members, pending: false})

        })
        .catch(error => {
            console.error(error)
            this.setState({error: true})
        })
    }

    componentWillMount = () => {

    }

    render = () => {
        return (
            <OrganizationMembers members={this.state.members} />
        )
    }
}

