import { useState } from "react";
import "../styles/CircleMenu.css"; // Archivo CSS externo
import Carousel from '../components/Carousel'

const CircleMenu = () => {
  const [angle, setAngle] = useState(0);
  const items = [
    "Sheet From Form",
    "Zetio",
    "IMCalculator",
    "BodyCalculator",
    "Deportiva-X",
    "StartConsulting",
    "Sistema de ecuaciones de cramer"
  ];

  // const items2 = [
  //   {"name": "Sheet From Form", "img": "https://swiperjs.com/demos/images/nature-2.jpg"},
  //   {"name": "Zetio", "img": "https://swiperjs.com/demos/images/nature-3.jpg"},
  //   {"name": "IMCalculator", "img": "https://swiperjs.com/demos/images/nature-4.jpg"},
  //   {"name": "BodyCalculator", "img": "https://swiperjs.com/demos/images/nature-5.jpg"},
  //   {"name": "Deportiva-X", "img": "https://swiperjs.com/demos/images/nature-5.jpg"},
  //   {"name": "StartConsulting", "img": "https://swiperjs.com/demos/images/nature-5.jpg"},
  //   {"name": "Sistema de ecuaciones de cramer", "img": "https://swiperjs.com/demos/images/nature-5.jpg"},
  // ];


  const imageItems = [
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
  ];

  // Calcular el índice del texto central
  const centralIndex = ((items.length - Math.round(angle / 60)) % items.length + items.length) % items.length;

  const handleRotate = (direction) => {
    // Incrementa o decrementa el ángulo según la dirección
    setAngle((prev) => prev + (direction === "left" ? -60 : 60));
  };

  return (
    <>
      <main className="flex justify-center items-center flex-col w-auto h-auto">
        <div className="circle-container">
          <div className="circle">
            {items.map((item, index) => (
              <div
                key={index}
                className="circle-item text-secondary"
                style={{
                  transform: `
                rotate(${index * (360 / items.length) + angle}deg) 
                translate(10rem) 
                rotate(-${index * (360 / items.length) + angle}deg)
              `,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="central-text">
            <h2 className="text-primary">{items[centralIndex]}</h2>
          </div>
          <div className="flex flex-wrap p-5 gap-5">
            <button onClick={() => handleRotate("left")}>⟲</button>
            <button onClick={() => handleRotate("right")}>⟳</button>
          </div>
        </div>
        <section className="py-36">
          <Carousel 
          one={imageItems[0]} 
          two={imageItems[1]} 
          three={imageItems[2]} 
          four={imageItems[3]} 
          five={imageItems[4]}
          six={imageItems[5]}
          seven={imageItems[6]}
          />
        </section>
      </main>
    </>

  );
};

export default CircleMenu;
