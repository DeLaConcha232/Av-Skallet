
import Value from '../components/Value'

export default function dashboard() {
    return (
        <>
            <main className='flex justify-center items-center flex-col gap-16 my-44 mx-10 h-full'>
                <article id="title-subtitle" className="flex justify-center items-center flex-col gap-16">
                    <section >
                        <h1 className='text-center text-5xl text-primary'>AV - SKALLET</h1>
                    </section>
                    <section>
                        <h2 className='text-center text-2xl text-text'>Todo empieza con una idea -Sujeta a cambios-</h2>
                    </section>
                </article>
                <article id="values" className="w-auto h-auto m-10">
                    <Value text="Lealtad"/>
                </article>
            </main>
        </>
    )
}