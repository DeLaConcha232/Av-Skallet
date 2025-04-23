import { useState, useEffect } from "react";
import "/src/styles/CircleMenu.css"; // Archivo CSS externo
import CaoruselProjects from '/src/components/CarouselProjects'

import IconCircle from '../components/IconCircle'

const CircleMenu = () => {
  const [angle, setAngle] = useState(0);
  const [translateValue, setTranslateValue] = useState("15rem");


  const items = [
    "/assets/Node.jsICON.svg",
    "/assets/HTMLicon.svg",
    "/assets/CSSicon.svg",
    "/assets/JSicon.svg",
    "/assets/ReactICON.svg",
    "/assets/TailwindCSSicon.svg",
    "/assets/Bootstrapicon.svg",
    "/assets/IconoGit.svg",
  ];

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 1);
    }, 150); // Ajusta la velocidad de rotación aquí
    return () => clearInterval(interval);
  }, []);

  // Ajustar el valor de translate según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTranslateValue("10rem");
      } else {
        setTranslateValue("15rem");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamar a la función al montar el componente

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <main className="flex justify-center items-center flex-col w-full h-full z-1 gap-44 lg:flex-row">
        <div className="circle-container">
          <div className="circle border-2 border-primary">
            <IconCircle />
            {items.map((item, index) => (
              <div
                key={index}
                className="circle-item text-primary font-Rubik"
                style={{
                  transform: `
                rotate(${index * (360 / items.length) + angle}deg) 
                translate(${translateValue}) 
                rotate(-${index * (360 / items.length) + angle}deg)
                `,
                }}
              >
                <img key="icons" src={item} alt="" className=" w-14 h-auto overflow-hidden md:w-20 lg:w-20 lg:h-auto" />
              </div>
            ))}

          </div>
          <div className="flex justify-center flex-wrap gap-5">
          </div>
        </div>
        <section className="w-full h-96 flex justify-center items-center border border-collapse border-second p-4 shadow-2xl rounded-lg sm:mt-10">
          <CaoruselProjects />
        </section>
      </main>
    </>

  );
};

export default CircleMenu;
