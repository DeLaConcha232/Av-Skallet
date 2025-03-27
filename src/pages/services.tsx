import { Timeline } from "flowbite-react";
import React from "react";
import { HiCalendar } from "react-icons/hi";
import '../styles/Services.css'


export default function Component() {
  return (
    <Timeline className="w-full h-auto">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons font-Bona">Diseño</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl font-Rubik font-medium">Diseño de interfaces responsive para Apps Moviles y Web Apps</Timeline.Title>
          <Timeline.Body className="text-second font-Bona">
          Desarrollo de páginas web con tecnologías modernas, listas para su implementación inmediata con asesoría en la selección de hostings, dominios y despliegue en la nube.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons font-Bona">Desarrollo</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl font-Rubik font-medium">Desarrollo de Paginas Web</Timeline.Title>
          <Timeline.Body className="text-second font-Bona">
          Creación de páginas web con tecnologías actuales y modernas para su implementación inmediata en la web.<br />
          Recomendación y asesoramiento de hostings y dominio.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-buttons font-Bona">Diseño UX / UI</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl font-Rubik font-medium">Prototipos interactivos</Timeline.Title>
          <Timeline.Body className="text-second font-Bona">
          Diseño y creación de prototipos interactivos con herramientas como Figma o Adobe XD, permitiendo la validación y prueba de usabilidad antes del desarrollo final.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-buttons font-Bona">Gestión</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl font-Rubik font-medium">Gestion y creacion de proyectos de software</Timeline.Title>
          <Timeline.Body className="text-second font-Bona">
          Desarrollo de soluciones de software a medida para la automatización de procesos, gestión empresarial, startUps, utilizando metodologías ágiles como Scrumban.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item >
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content >
          <Timeline.Time className="text-buttons font-Bona">Diseño Grafico</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl font-Rubik font-medium">Creacion de Logotipos y Marcas Personales</Timeline.Title>
          <Timeline.Body className="text-second font-Bona">
          Diseño de logotipos y marcas personales con identidad visual única para redes sociales, páginas web y proyectos digitales.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons font-Bona">Optimización</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl font-Rubik font-medium">Analisis de accesiblidad y CEO</Timeline.Title>
          <Timeline.Body className="text-second font-Bona">
          Evaluación y mejora del rendimiento web, optimización de accesibilidad y estrategias para mejorar el posicionamiento en buscadores (SEO).
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}



