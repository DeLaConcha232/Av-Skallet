

import { Navbar } from "flowbite-react";
import '../styles/Navbar.css';
import Languague from './Languague'
import LogotipoIcon from '/assets/Logotipo.svg'

export default function Component() {

  return (
    <Navbar fluid rounded className='flex justify-between items-center w-full md:mx-4 lg:mx-5'>
      <Navbar.Brand href='#'>
        <img src={LogotipoIcon} className="mr-5 w-11 h-auto" alt="Logo" />
      </Navbar.Brand>
      <div>
        <Languague />
      </div>
    </Navbar>
  );
}
