import { Button, Timeline } from "flowbite-react";
import React from "react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import '../styles/Services.css'
// import Icon from '../assets/IconoCheck.svg';

export default function Component() {
  return (
    <Timeline className="w-full h-auto">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons">Diseño</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Diseño de interfaces responsive para Apps Moviles y Web Apps</Timeline.Title>
          <Timeline.Body className="text-second">
          Desarrollo de páginas web con tecnologías modernas, listas para su implementación inmediata con asesoría en la selección de hostings, dominios y despliegue en la nube.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons">Desarrollo</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Desarrollo de Paginas Web</Timeline.Title>
          <Timeline.Body className="text-second">
          Creacion de paginas web con tecnologias actuales y modernas para su implementacion inmediata en la web. <br />
          Recomendacion y asesoramiento de hostings y dominios.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-buttons">Diseño UX / UI</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Prototipos interactivos</Timeline.Title>
          <Timeline.Body className="text-second">
          Diseño y creación de prototipos interactivos con herramientas como Figma o Adobe XD, permitiendo la validación y prueba de usabilidad antes del desarrollo final.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-buttons">April 2022</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Gestion y creacion de proyectos de software</Timeline.Title>
          <Timeline.Body className="text-second">
          Desarrollo de soluciones de software a medida para la automatización de procesos, gestión empresarial, startUps, utilizando metodologías ágiles como Scrumban.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item >
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content >
          <Timeline.Time className="text-buttons">April 2022</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Creacion de Logotipos y Marcas Personales</Timeline.Title>
          <Timeline.Body className="text-second">
          Diseño de logotipos y marcas personales con identidad visual única para redes sociales, páginas web y proyectos digitales.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons">Optimizacion</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Analisis de accesiblidad y CEO</Timeline.Title>
          <Timeline.Body className="text-second">
          Evaluación y mejora del rendimiento web, optimización de accesibilidad y estrategias para mejorar el posicionamiento en buscadores (SEO).
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}



