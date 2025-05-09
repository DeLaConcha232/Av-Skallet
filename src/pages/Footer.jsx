

import { Footer } from "flowbite-react";
import { BsGithub, BsMailbox, BsWhatsapp } from "react-icons/bs";

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

      <Footer container className="">
        <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-0">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-10 md:gap-0">
            <div>
              <Footer.Brand
                href="/"
                src="/src/assets/Logotipo_horizontal.svg"
                alt="Flowbite Logo"
                className="text-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <Footer.Title title="Contact" className="font-Rubik font-medium"/>
                <Footer.LinkGroup col>
                  <div className="flex gap-3">
                    <img src="/src/assets/IconoGmail.svg" alt="" className="w-5 h-auto" />
                    <Footer.Link href="#" className="text-primary font-Rubik" onClick={redirectToGmail}>Gmail</Footer.Link>
                  </div>
                  <div className="flex gap-3">
                    <img src="/src/assets/IconoWhatsApp.svg" alt="" className="w-5 h-auto" />
                    <Footer.Link href="#" className="text-primary font-Rubik" onClick={redirectToWhatsApp}>Whatsapp</Footer.Link>
                  </div>

                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow" className="font-Rubik font-medium "/>
                <Footer.LinkGroup col>
                  <div className="flex gap-3">
                    <img src="/src/assets/IconoGitHub.svg" alt="" className="w-5 h-auto" />
                    <Footer.Link href="https://github.com/DeLaConcha232" className="text-primary font-Rubik">Github</Footer.Link>
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between ">
            <Footer.Copyright href="#" by="Av-Skallet" year={2025} className="font-Bona text-buttons"/>
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
