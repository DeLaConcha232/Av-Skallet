import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import Services from './pages/services'
import Projects from './pages/projects'
import Footer from './pages/Footer'
import Card from './components/Card'
import CardAuto from './components/CardAuto'

// import Particles from './particles'


function App() {
  return (
    <>
      <main className='bg-background w-full h-full flex flex-col '>
        {/* <article id='Navbar' className='flex justify-center items-center p-3'>
        </article> */}
        <article className='absolute w-full h-auto flex justify-center my-2'>
          <Navbar />
        </article>
        {/* bg-custom-gradient bg-blend-overlay */}
        <article className='flex justify-center items-center px-10 pb-0 w-auto h-screen'>
          <Dashboard />
        </article>
        <article id='service' className='flex justify-center items-center px-8 py-20 w-full h-screen mt-20 lg:mt-0'>
          <Services />
        </article>
        <article className='flex overflow-hidden items-center whitespace-nowrap my-10 lg:my-0'>
          <div className='flex scroll-container'>
            <CardAuto title='Flexiblidad' />
            <CardAuto title='Transparencia' />
            <CardAuto title='Comunicacion' />
            <CardAuto title='Adaptabilidad' />
            <CardAuto title='Atencion Personalizada' />
            <CardAuto title='Tecnologias actualizadas y recientes' />
            <CardAuto title='metodologias de trabajo efectivas' />
          </div>
        </article>
        <article className='flex justify-center items-center p-20 pb-20 w-full h-auto pt-60'>
          <Projects />
        </article>
        <article className='flex overflow-x-auto my-20 scroll-containerCard mr-5'>
          <div className='flex gap-10 p-10'>
            <Card title='Formas de Pago' description='Tarjeta, Paypal, Credito, Debito' src='https://png.pngtree.com/png-clipart/20190927/ourmid/pngtree-business-payment-method-png-image_1747240.jpg' />
            <Card title='Cotizaciones' description='loremlroemrejadaw' src='https://png.pngtree.com/png-clipart/20190927/ourmid/pngtree-business-payment-method-png-image_1747240.jpg' />
            <Card title='Contacto' description='Whatsapp - Gmail - GitHub' src='https://png.pngtree.com/png-clipart/20190927/ourmid/pngtree-business-payment-method-png-image_1747240.jpg' />
            <Card title='Contacto' description='Whatsapp - Gmail - GitHub' src='https://png.pngtree.com/png-clipart/20190927/ourmid/pngtree-business-payment-method-png-image_1747240.jpg' />
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
