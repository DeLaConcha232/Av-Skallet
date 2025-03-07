
import React from 'react';
import { Navbar } from "flowbite-react";
import '../styles/Navbar.css';

export default function Component() {
  return (
    <Navbar fluid rounded className='flex justify-between items-center w-full'>
      <Navbar.Brand  href='#'>
        <img src='/src/assets/Logotipo_BlancoNegro.svg' className="mr-3 w-11 h-auto" alt="Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
