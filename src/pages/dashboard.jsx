
// import Value from '../components/Value'
import CarouselValues from '../components/CarouselValues'

export default function dashboard() {
    return (
        <>
            <main className='flex justify-center items-center flex-col gap-16 h-full'>
                <article id="title-subtitle" className="flex justify-center items-center flex-col gap-16">
                    <section >
                        <h1 className='text-center text-5xl text-primary font-Bona'>AV - SKALLET</h1>
                        <h3 className='text-center text-xl text-primary font-Rubik'>Todo empieza con una idea</h3>
                    </section>
                </article>
                <article id="values" className="w-auto h-auto m-10">
                    <CarouselValues />
                </article>
            </main>
        </>
    )
}