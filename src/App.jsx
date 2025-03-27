import './App.css'
import React from 'react'

const Navbar = React.lazy(() => import('./components/Navbar'))
const Dashboard = React.lazy(() => import('./pages/dashboard'))
const Services = React.lazy(() => import('./pages/services'))
const Projects = React.lazy(() => import('./pages/projects'))
const Footer = React.lazy(() => import('./pages/Footer'))
const Card = React.lazy(() => import('./components/Card'))
const CardAuto = React.lazy(() => import('./components/CardAuto'))
const IconWhatsapp = React.lazy(() => import('./components/IconWhatsapp'))


function App() {
  return (
    <>
      <main className='bg-background w-full h-full flex flex-col'>
        <article className=' w-full h-auto flex justify-between'>
          <Navbar />
        </article>
        <article className='flex justify-center items-center px-10 mb-20 w-auto h-full mt-16 lg:mt-0'>
          <Dashboard />
        </article>
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
        <article className='flex justify-center items-center p-5 pb-20 w-full h-auto pt-60 sm:p-20'>
          <Projects />
        </article>
        <article className='flex overflow-x-auto my-20 scroll-containerCard mr-5'>
          <div className='flex gap-10 p-10 flex-wrap'>
            <Card title='Seguridad y Privacidad' description='La información y los datos proporcionados se manejan con total confidencialidad.' src='/src/assets/IconoTarjeta.svg' />
            <Card title='Cotizaciones' description='Solicita una cotización personalizada según las necesidades de tu proyecto.' src='/src/assets/budget.svg' />
            <Card title='Contacto' description='Comunicación directa a través de WhatsApp o correo electrónico' src='/src/assets/IconoContactos.svg' />
            <Card title='Validación de calidad ' description='Diseño y desarrollo siguiendo las últimas tendencias y estándares tecnológicos' src='/src/assets/iconovalidation.svg' />
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
