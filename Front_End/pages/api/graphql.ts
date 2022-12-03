import {gql, ApolloServer} from "apollo-server-micro";


const typeDefs = gql`

type Journal{
    id: String
    title: String
    body: String
    Posted_by: String
}

type Query{
    journasl: [Journal]
}

type Mutation{
    tokenAuth(username: String, password: String): String
}
`