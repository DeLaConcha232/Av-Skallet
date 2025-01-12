import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'

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
      </main>
    </>
  )
}

export default App
