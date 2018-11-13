const cache = require('./cache')

/**
 * Provides methods to access public organization data on Github
 */
export default class GithubOrg {
    constructor (organizationName) {
        this.organization = organizationName
    }

    /**
     * Returns a promise which resolves in an array of org public members
     */
    publicMembers = () => {
        const API_ENDPOINT = ` https://api.github.com/orgs/${this.organization}/public_members`
        const request = fetch(API_ENDPOINT)

        return request.then(response => {
            if (response.ok) {
                return response.json()
            }

            return cache.KNOWN_MEMBERS
        })
    }
}
