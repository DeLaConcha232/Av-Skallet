
import style from '../styles/workmetod.module.css';


export default function workmetod() {
    return (
        <>
            <main className={style.parent}>
                <div className={`${style.div1} ${style.all} ${'font-Rubik'}`}>Flexibilidad y adaptabilidad</div>
                <div className={`${style.div2} ${style.all} ${'font-Rubik'}`}>Transparencia y comunicacion</div>
                <div className={`${style.div3} ${style.all} ${'font-Rubik'}`}>Atencion Personalizada</div>
                <div className={`${style.div4} ${style.all} ${'font-Rubik'}`}>Tecnologias actualizadas y recientes</div>
                <div className={`${style.div5} ${style.all} ${'font-Rubik'}`}>Metodologias de trabajo efectivas</div>
                <div className={`${style.div6} ${style.all} ${'font-Rubik'}`}>Enfoque en resultados</div>
            </main>
        </>
    )
}