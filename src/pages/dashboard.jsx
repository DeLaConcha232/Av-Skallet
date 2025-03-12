
import CarouselValues from '../components/CarouselValues'
import '../styles/dash.css'
import IconTech from '../components/IconTech'

export default function dashboard() {
    return (
        <>
            <main className='flex justify-start items-center flex-col h-full w-auto lg:mt-20'>
                <section id='icon' className='flex justify-center items-center w-full w-4/5 h-auto lg:w-4/5'>
                    <IconTech />
                </section>
                <article id="title-subtitle" className="flex justify-center items-center flex-col gap-16">
                    <section className='flex justify-center items-center flex-col gap-4'>
                        <h1 id='title' className='text-center text-6xl text-primary font-Bona lg:text-7xl lg:mt-0 tracking-widest'>AV-SKALLET</h1>
                        <h3 className='text-center text-xl text-second font-Rubik'>Todo empieza con una idea</h3>
                    </section>
                    <article id="values" className="w-auto h-auto">
                        <CarouselValues />
                    </article>
                </article>

            </main>
        </>
    )
}