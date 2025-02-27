import { useState, useEffect } from "react";
import "../styles/CircleMenu.css"; // Archivo CSS externo
import CaoruselProjects from '../components/CarouselProjects'

import IconCircle from '../components/IconCircle'

import IconNodejs from '../assets/Node.jsICON.svg'
import Html from '../assets/HTMLicon.svg'
import Css from '../assets/CSSicon.svg'
import JS from '../assets/JSicon.svg'
import React from '../assets/ReactICON.svg'
import Tailwind from '../assets/TailwindCSSicon.svg'
import Bootstrap from '../assets/Bootstrapicon.svg'
import git from '../assets/IconoGit.svg'


const CircleMenu = () => {
  const [angle, setAngle] = useState(0);
  const items = [
    IconNodejs,
    Html,
    Css,
    JS,
    React,
    Tailwind,
    Bootstrap,
    git
  ];

  // const urls = [
  //   "https://example.com/sheet-from-form",
  //   "https://example.com/zetio",
  //   "https://calculatorimc.surge.sh/",
  //   "https://bodycalculator.surge.sh/",
  //   "https://deportivax.surge.sh/",
  //   "https://startconsulting.surge.sh/",
  //   "/"
  // ];

  // Calcular el índice del texto central
  // const centralIndex = ((items.length - Math.round(angle / 60)) % items.length + items.length) % items.length;

  // const handleRotate = (direction) => {
  //   // Incrementa o decrementa el ángulo según la dirección
  //   setAngle((prev) => prev + (direction === "left" ? -60 : 60));
  // };

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 1);
    }, 150); // Ajusta la velocidad de rotación aquí
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="flex justify-center items-center flex-col w-full h-full z-1 gap-44 lg:flex-row">
        <div className="circle-container">
          <div className="circle border-2 border-primary">
            {/* <div className="flex justify-center flex-wrap gap-5 lg:ml-56">
              <button className="w-full text-buttons" onClick={() => handleRotate("right")}>⟳</button>
            </div> */}
            <IconCircle />
            {items.map((item, index) => (
              <div
                key={index}
                className="circle-item text-primary font-Rubik"
                style={{
                  transform: `
                rotate(${index * (360 / items.length) + angle}deg) 
                translate(15rem) 
                rotate(-${index * (360 / items.length) + angle}deg)
              `,
                }}
              >
                <img key="nodejs-icon" src={item} alt="" className="w-20 h-auto" />
              </div>
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-5">
            {/* <button className="w-full text-buttons bg-backgroundSecond" onClick={() => handleRotate("left")}>⟲</button> */}
            {/* <button className="w-full text-buttons bg-backgroundSecond" onClick={() => handleRotate("right")}>⟳</button> */}
          </div>
        </div>
        {/* <section className="py-28 w-auto h-auto lg:py-0">
          <Carousel
            images={[
              imageItems[centralIndex],
            ]}
            url={urls[centralIndex]}
          />
          <h2 className="text-primary font-Bona text-4xl text-center mt-10">{items[centralIndex]}</h2>
        </section> */}
        <section className="w-3/4 h-96 flex justify-center items-center border border-collapse border-white p-2 rounded-lg lg:w-full lg:h-80">
          <CaoruselProjects />
        </section>
      </main>
    </>

  );
};

export default CircleMenu;
