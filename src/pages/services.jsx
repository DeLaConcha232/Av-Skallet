
// import particlesJS from 'particles.js';
import Service from '../components/service'

export default function CarouselTransition() {

    return (
        <>
            <article className='flex justify-center items-center absolute w-full h-full z-1 bg-negro'>
                <main id='particles-js' className='flex flex-wrap justify-center items-center gap-10 relative z-10'>
                    <Service title='Prototipos Interactivos' />
                    <Service title='Diseño de LogoTipos' />
                    <Service title='Desarrollo de Web Apps ' />
                    <Service title='Analisis de accesiblidad' />
                    <Service title='Diseño de interfaces para Apps y Web Apps' />
                </main>
            </article>

        </>
    );
}
