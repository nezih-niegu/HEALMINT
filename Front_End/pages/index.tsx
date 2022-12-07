import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Historial from "./Historial";
import LoginContainer from "./LoginContainer";
import Link from "next/link";
import CreateRegistry from "./CreateRegistry";
import {useQuery, gql } from '@apollo/client';
import Journal from "../components/Journals";
import { Component, useState } from "react";
import { GET_JOURNALS,GET_LINEAR, GET_RESNET } from "../src/graphql/queries";
import ButtonContainer from "../components/ButtonContainer"; 
import Client from "../components/ClientAI";



export default function Home() {
  let data1:any;
  let data2:any;

  try{
    let {data}= useQuery(GET_RESNET, {variables: {values: "https://i.pinimg.com/originals/c3/0e/f6/c30ef6903b2a5369cc6e9ca95b9f6e91.jpg"},}); 
    data1=data;
  }catch{
    data1="UNABLE TO GET ANY PREDICTION";
  }
  try{
    let {data}= useQuery(GET_LINEAR, {variables: {values: "[[10.0],[20.0],[30.0]]"},});
    data2=data;
  }catch{
    data2="UNABLE TO ANY PREDICTION";
  }

  
  const {loading, error, data} = useQuery(GET_JOURNALS)

    if(loading){
      return "loading"
  
    }
    if(error){
      return "error"
    }
   

  console.log(data);
  
  return ( 
    <div className="relative flex-col">
      <Header/>
      <div className="h-[100vh] justify-center text-center items-center bg-gray-300 w-full max-w-7xl mx-auto rounded-lg">
        <div>Esta es la pagina principal</div>
            <div className="text-center">
            <ButtonContainer {...{ name: "TMB", onClickAction: (() => {alert(data2)}) }}/> 
            <ButtonContainer {...{ name: "Resnet", onClickAction: (() => {alert(data1)}) }}/>
          </div>
      </div>
      <Footer/>
    </div>
  );
}



