import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import Services from './pages/services'
import Projects from './pages/projects'
import Workmetod from './pages/workmetod'
import Forms from './pages/Forms'


function App() {
  return (
    <>
      <main className='bg-background w-auto h-auto'>
        <article id='Navbar' className='  flex justify-center items-center'>
          <Navbar />
        </article>
        <article className='flex justify-center items-center pt-44 px-10 pb-0'>
          <Dashboard />
        </article>
        <article className='flex justify-center items-center px-8 pb-40 '>
          <Services />
        </article>
        <article className='flex justify-center items-center p-36 pb-20 w-auto h-auto'>
          <Projects />
        </article>
        <article className='flex justify-center items-center'>
          <Workmetod />
        </article>
        <article className='flex justify-center items-center'>
          <Forms />
        </article>
      </main>
    </>
  )
}

export default App
