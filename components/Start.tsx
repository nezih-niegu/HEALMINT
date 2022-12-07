import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";


function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "¡Hola Mundo!",
      "Hello World!",
      "Bonjour le monde!",
      "Hallo Welt!",
      "こんにちは世界!",
      "Ciao mondo!",
      "你好世界",
      "Olá mundo!",
      "Привет мир!",
      "헬로 월드!",
      "مرحبا بالعالم"
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Image
        src="/../public/img/healmint.png"
        alt="/../public/img/healmint.png"
        height={300}
        width={300}
        className="relative mx-auto object-cover"
      />
      <div className="z-20">
        <h1 className="text-md uppercase tracking-[10px] font-bold text-gray-500">
          HEALMINT
        </h1>
        <h2 className="text-3xl md:text-5xl max-w-xl">
          <span>{text}</span>
          <Cursor cursorColor="#CCA700" />
        </h2>
      </div>
    </div>
  );
}

export default Hero;
