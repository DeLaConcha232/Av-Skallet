import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import Services from './pages/services'
import Projects from './pages/projects'
import Workmetod from './pages/workmetod'
import Forms from './pages/Footer'

// import Particles from './particles'


function App() {
  return (
    <>
      <main className='bg-background w-full h-full flex flex-col gap-10'>
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
          {/* <Particles className="mx-auto max-w-4xl" /> */}
        </article>
        <article className='flex justify-center items-center p-20 pb-20 w-full h-auto pt-60'>
          <Projects />
        </article>
        <article className='flex justify-center items-center w-full h-screen lg:mt-32'>
          <Workmetod />
        </article>
        <article className=''>
          <Forms />
        </article>
      </main>
    </>
  )
}

export default App
