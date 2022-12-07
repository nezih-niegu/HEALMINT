import {useQuery, gql } from '@apollo/client';




export const GET_JOURNALS = gql`
{
	journals{
		id
		title
		body
	       }
    
}`;

export const GET_TOKEN = gql`
  mutation GetToken($user: String! , $pass: String!){
       	tokenAuth(username: $user, password: $pass){
       		token
	}
}`;
  
  
export const GET_LINEAR = gql`
	query LinearPredictions($values:String!){
		linearPredictions(values:$values) 
	  	}`;


export const GET_RESNET = gql `
   	query ResnetPredictions($values:String!){
      		resnetPredictions(photourl:$values)
		}`;
