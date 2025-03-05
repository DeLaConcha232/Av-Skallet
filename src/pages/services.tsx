import { Button, Timeline } from "flowbite-react";
import React from "react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import '../styles/Services.css'
// import Icon from '../assets/IconoCheck.svg';

export default function Component() {
  return (
    <Timeline className="w-full">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons">February 2022</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Diseño de interfaces responsive para Apps y Web Apps</Timeline.Title>
          <Timeline.Body className="text-second">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-buttons">March 2022</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Prototipos interactivos</Timeline.Title>
          <Timeline.Body className="text-second">
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-buttons">April 2022</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Analisis de accesiblidad y CEO</Timeline.Title>
          <Timeline.Body className="text-second">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item >
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content >
          <Timeline.Time className="text-buttons">April 2022</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Creacion de Logotipos y Marcas Personales</Timeline.Title>
          <Timeline.Body className="text-second">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}/>
        <Timeline.Content>
          <Timeline.Time className="text-buttons">April 2022</Timeline.Time>
          <Timeline.Title className="text-primary text-2xl">Analisis de accesiblidad y CEO</Timeline.Title>
          <Timeline.Body className="text-second">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}



