

import { Footer } from "flowbite-react";
import { BsGithub, BsMailbox, BsWhatsapp } from "react-icons/bs";
import Logo from '../assets/Logotipo_BlancoNegro.svg';
import Whatsapp from '../assets/IconoWhatsApp.svg';
import Gmail from '../assets/IconoGmail.svg';
import Github from '../assets/IconoGitHub.svg';

export default function Component() {
  const redirectToWhatsApp = () => {
    const phoneNumber = "4491431962"; // Reemplaza con tu número de teléfono
    const message = "Hola, me gustaría obtener más información."; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const redirectToGmail = () => {
    const email = "diegodiazdelaconcha23@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    const subject = "Solicitud de Información"; // Asunto predefinido
    const body = "Hola, me gustaría obtener más información sobre sus servicios."; // Cuerpo del mensaje predefinido
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };
  return (
    <>

      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src={Logo}
                alt="Flowbite Logo"
                name="AV-SKALLET"
                className="text-primary font-Rubik"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <Footer.Title title="Contact" />
                <Footer.LinkGroup col>
                  <div className="flex gap-3">
                    <img src={Gmail} alt="" className="w-5 h-auto" />
                    <Footer.Link href="#" className="text-primary font-bold" onClick={redirectToGmail}>Gmail</Footer.Link>
                  </div>
                  <div className="flex gap-3">
                    <img src={Whatsapp} alt="" className="w-5 h-auto" />
                    <Footer.Link href="#" className="text-primary font-bold" onClick={redirectToWhatsApp}>Whatsapp</Footer.Link>
                  </div>

                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow" />
                <Footer.LinkGroup col>
                  <div className="flex gap-3">
                    <img src={Github} alt="" className="w-5 h-auto" />
                    <Footer.Link href="https://github.com/DeLaConcha232" className="text-primary font-bold">Github</Footer.Link>
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Av-Skallet" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://github.com/DeLaConcha232" icon={BsGithub} />
              <Footer.Icon icon={BsMailbox} onClick={redirectToGmail}/>
              <Footer.Icon icon={BsWhatsapp} onClick={redirectToWhatsApp}/>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
