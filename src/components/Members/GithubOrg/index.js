const cache = require('./cache');

/**
 * Provides methods to access public data of a Github organization
 */
export default class GithubOrg {
  constructor(organizationName) {
    this.organization = organizationName;
  }

  /**
   * Returns a promise which resolves in an array of org public members
   */
  publicMembers = () => {
    const API_ENDPOINT = `https://api.github.com/orgs/${
      this.organization
    }/public_members`;
    const request = fetch(API_ENDPOINT);

    return request.then(response => {
      if (response.ok) {
        return response.json();
      }

      return cache.KNOWN_MEMBERS;
    });
  };

  /**
   * Returns a promise which resolves in an array of org public repositories.
   * The array is sorted by the number of repository stargazers
   */
  publicRepos = () => {
    const API_ENDPOINT = `https://api.github.com/orgs/${
      this.organization
    }/repos`;
    const request = fetch(API_ENDPOINT);

    return request.then(response => {
      if (response.ok) {
        const repos = response.json();

        return repos.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
      }

      return [];
    });
  };
}
