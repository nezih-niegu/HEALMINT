import React from "react";
import Link from "next/link";
import {AUTH_TOKEN } from '../constants';


type Props = {};

function Header({}: Props) {
const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 shadow bg-teal-100 rounded-lg bg-opacity-70 backdrop-blur-sm">
      <div className="flex flex-row items-center">
        <div className="mx-4">
          <Link href="/CreateRegistry">Nuevo registro</Link>
        </div>
        <div className="mx-4">
          <Link href="/Historial"> Historial </Link>
        </div>
        <div className="mx-4">
          <Link href="/"> Inicio </Link>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div>
        {authToken ?(
          <div
          onClick={() => {
            localStorage.removeItem(AUTH_TOKEN);
            <Link href="/LoginContainer">Iniciar sesión</Link>
          }}
          >
            logout
          </div>
        ): (
          <Link 
          to="/login"
          className="ml1 no-underline black"
          >
            login
          </Link>
        )}
        </div>
      </div>
    </div>
  );
}

export default Header;
