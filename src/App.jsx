import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import Services from './pages/services'
import Projects from './pages/projects'
import Footer from './pages/Footer'
import Card from './components/Card'
import CardAuto from './components/CardAuto'

import Payment from './assets/IconoTarjeta.svg'
import IconoContact from './assets/IconoContactos.svg'
import IconoValidation from './assets/iconovalidation.svg'
import IconBudget from './assets/budget.svg'

function App() {

  return (
    <>
      <main className='bg-background w-full h-full flex flex-col '>
        <article className=' w-full h-auto flex justify-between'>
          <Navbar />
        </article>
        <article className='flex justify-center items-center px-10 mb-20 w-auto h-full mt-16 lg:mt-0'>
          <Dashboard />
        </article>
        <article id='service' className='flex justify-center items-center px-20 py-20 w-full h-auto mt-20 lg:mt-0'>
          <Services />
        </article>
        <article className='flex overflow-hidden items-center whitespace-nowrap my-12 lg:my-0'>
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
          <div className='flex gap-10 p-10'>
            <Card title='Seguridad y Privacidad' description='La información y los datos proporcionados se manejan con total confidencialidad.' src={Payment} />
            <Card title='Cotizaciones' description='Solicita una cotización personalizada según las necesidades de tu proyecto.' src={IconBudget} />
            <Card title='Contacto' description='Comunicación directa a través de WhatsApp o correo electrónico' src={IconoContact}/>
            <Card title='Validación de calidad ' description='Diseño y desarrollo siguiendo las últimas tendencias y estándares tecnológicos' src={IconoValidation} />
          </div>
        </article>
        <article className=''>
          <Footer />
        </article>
      </main>
    </>
  )
}

export default App
