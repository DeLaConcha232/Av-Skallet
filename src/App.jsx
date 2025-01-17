import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import Services from './pages/services'

function App() {
  return (
    <>
      <main className='bg-background'>
        <article id='Navbar' className='  flex justify-center items-center'>
          <Navbar />
        </article>
        <article className='flex justify-center items-center'>
          <Dashboard />
        </article>
        <article className='flex justify-center items-center m-8'>
          <Services />
        </article>
        <article className='flex justify-center items-center m-8'>

        </article>
      </main>
    </>
  )
}

export default App
