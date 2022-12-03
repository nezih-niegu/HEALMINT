import {useQuery, gql } from '@apollo/client';




export const GET_JOURNALS = gql`
{
  journals{
        id
        title
        body
       }
    
}
`

export const GET_TOKEN = gql`
  mutation GetToken($user: String! , $pass: String!){
    tokenAuth(username: $user, password: $pass){
        token
       }
}
  `;
