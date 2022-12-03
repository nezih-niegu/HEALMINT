import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client';
import LoginButton from "../components/LoginButton";
import client from "../components/ClientApollo"
import {GET_TOKEN} from "../src/graphql/queries"

type Props = {};

function LoginContainer({}: Props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [getToken, {data}] = useMutation(GET_TOKEN)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setUsername("")
    setPassword("")
    setError("")
    console.log(username)
    console.log(password)

    if (error){
      alert(`Ocurrio un error`)
    } else {
      if (username && password) {
        getToken({
          variables: {
            user: username, 
            pass: password},
          })
    
        console.log(data)
        if(data){
          alert(`Login exitoso`);
        }else{
          alert(`Este usuario o contraseña es incorrecto`);
        }
      } else {
        alert(`Por favor ingresa un nombre de usuario y contraseña es`);
      }
    }
    
  }

  return (
    <div>
      <div className="absolute flex w-full max-w-full">
        <section className="relative flex h-[100vh] items-center justify-center text-center bg-white md:w-[50vw] overflow-hidden">
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex-row"
          >
            <h1>Wenas tardes aquí va una foto chida promocional</h1>
            <Link
              href="/"
              className="underline transition-all font-bold text-slate-400 hover:text-blue-400"
            >
              Regresar al inicio
            </Link>
          </motion.div>
        </section>
        <section className="relative flex h-[100vh] items-center text-center bg-svg_cruces_azul_verde justify-center md:w-[50vw] overflow-hidden">
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full md:max-w-md bg-white rounded-lg"
          >
            <form
              action="login"
              className="px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="text-4xl text-center font-bold font-sans py-4 mb-10">
                Iniciar Sesión
              </div>
              <div className="my-8">
                <label htmlFor="username" className="block text-left pb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                />
              </div>
              <div className="my-8">
                <label htmlFor="password" className="block text-left pb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-center">
                <LoginButton />
              </div>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default LoginContainer;
