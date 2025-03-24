
import React from 'react';
import { Navbar } from "flowbite-react";
import '../styles/Navbar.css';
import Languague from '../components/Languague'

export default function Component() {

  return (
    <Navbar fluid rounded className='flex justify-between items-center w-full md:mx-4 lg:mx-5'>
      <Navbar.Brand href='#'>
        <img src='/src/assets/Logotipo.svg' className="mr-5 w-11 h-auto" alt="Logo" />
      </Navbar.Brand>
      <div>
        <Languague />
      </div>
      {/* <Navbar.Collapse>
        <Navbar.Link href="#" active>
          <Languague />
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
}
