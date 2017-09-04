import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        email
      }
    }
  }
`;

let tempID = 0;

function commit(environment, data) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        ...data,
        clientMutationId: tempID++
      }
    },
    updater(store) {
    }
  });
}

export default { commit };
