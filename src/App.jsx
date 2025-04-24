import './App.css'

import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import Services from './pages/services'
import Projects from './pages/projects'
import Footer from './pages/Footer'
import Card from './components/Card'
import CardAuto from './components/CardAuto'
import IconWhatsapp from './components/IconWhatsapp'


function App() {
  return (
    <>
      <main className='bg-background w-full h-full flex flex-col'>
        <div className='bg-custom-backwhite bg-blend-multiply'>
          <article className=' w-full h-auto flex justify-between bg-transparent'>
            <Navbar />
          </article>
          <article className='flex justify-center items-center px-10 pb-40 w-auto h-full pt-16 lg:mt-0 lg:pt-0'>
            <Dashboard />
          </article>
        </div>
        <article id='service' className='flex justify-center items-center px-20 py-20 w-full h-auto mt-20 lg:mt-0'>
          <Services />
        </article>
        <article className='flex overflow-hidden relative items-center whitespace-nowrap my-12 lg:my-10'>
          <div className='flex scroll-container'>
            <CardAuto title='Flexiblidad' />
            <CardAuto title='Transparencia' />
            <CardAuto title='Comunicación' />
            <CardAuto title='Adaptabilidad' />
            <CardAuto title='Atención Personalizada' />
            <CardAuto title='Tecnologías actualizadas y recientes' />
            <CardAuto title='Metodologías de trabajo efectivas' />
          </div>
        </article>
        <article className='flex justify-center items-center p-5 pb-20 w-full h-auto pt-40 sm:p-20 sm:pt-28'>
          <Projects />
        </article>
        <article className='flex overflow-x-auto my-20 w-full scroll-containerCard mr-5 bg-custom-backwhite bg-blend-overlay'>
          <div className='flex gap-10 p-10 flex-wrap justify-center items-center'>
            <Card title='Seguridad y Privacidad' description='La información y los datos proporcionados se manejan con total confidencialidad.' src='/assets/IconoTarjeta.svg' alt='CardIcon' />
            <Card title='Cotizaciones' description='Solicita una cotización personalizada según las necesidades de tu proyecto.' src='/assets/budget.svg' alt='Budgeticon'/>
            <Card title='Contacto' description='Comunicación directa a través de WhatsApp o correo electrónico' src='/assets/IconoContactos.svg' alt='ContactIcon'/>
            <Card title='Validación de calidad ' description='Diseño y desarrollo siguiendo las últimas tendencias y estándares tecnológicos' src='/assets/iconovalidation.svg' alt='validationIcon'/>
          </div>
        </article>
        <article className=''>
          <Footer />
        </article>
        <article className='absolute'>
          <IconWhatsapp />
        </article>
      </main>
    </>
  )
}

export default App
