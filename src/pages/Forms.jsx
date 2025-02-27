import logo from '../assets/Logotipo_BlancoNegro.svg'

export default function Forms() {
    return (
        <>
            <main className="w-full h-auto flex justify-evenly items-center flex-wrap rounded-3xl shadow-lg shadow-white">
                <form action="" className="flex  flex-col p-10 gap-5">
                    <label htmlFor="name" className='text-primary'>Name</label>
                    <input className="rounded-lg py-1 px-3" type="text" name="name" id="name" />
                    <label htmlFor="email" className='text-primary'>Email</label>
                    <input className="rounded-lg py-1 px-3" type="email" name="email" id="email" />
                    <label htmlFor="mensaje" className='text-primary'>Mensaje</label>
                    <textarea className='rounded-lg p-2' name="mensaje" id="mesage"></textarea>
                    <button type="submit" className="text-buttons bg-backgroundSecond">Submit</button>
                </form>
                <section className="flex justify-center items-center flex-col gap-5 p-10">
                    <img className='opacity-10' src={logo} alt="" />
                    <article>
                        <h1 className='text-xs text-primary'>Correo: avskallet@gmail.com</h1>
                        <h1 className='text-xs text-primary'>CEO: Diego Diaz De La Concha <a href=""> [Portafolio] </a></h1>
                    </article>
                </section>
            </main>
        </>
    )
}