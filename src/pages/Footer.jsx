

import { Footer } from "flowbite-react";
import { BsGithub, BsMailbox, BsWhatsapp } from "react-icons/bs";
import Logo from '../assets/Logotipo_BlancoNegro.svg';
import Modal from '../components/Modal';

export default function Component() {

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
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Contact" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-rojogmail font-bold">Gmail</Footer.Link>
                  <Footer.Link href="#" className="text-verdeWhatsapp font-bold">Whatsapp</Footer.Link>

                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://github.com/DeLaConcha232" className="text-colorGithub font-bold">Github</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Modal />
                  <Footer.Link href="#" className="text-primary font-bold">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Av-Skallet" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://github.com/DeLaConcha232" icon={BsGithub} />
              <Footer.Icon href="https://gmail.com" icon={BsMailbox} />
              <Footer.Icon href="#" icon={BsWhatsapp} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
