

export default function Navbar() {
    return (
        <>
            <main className="w-4/5 h-auto fixed">
                <nav className=" flex justify-evenly items-center  my-2 ">
                    <div className="mx-10">
                        <h1 className="text-second text-md font-Rubik lg:text-xl">Home</h1>
                    </div>
                    <article className="mx-10">
                        <img src="../../src/assets/Logotipo_BlancoNegro.svg" alt="Logotipo" className="w-10 lg:w-12" />
                    </article>
                    <div href="/" className="mx-16">
                        <img src="../../src/assets/Global-Icon.svg" alt="Languague" className="w-5 bg-white rounded-xl lg:w-8" />
                    </div>
                </nav>
            </main>
        </>
    )
}


// rounded-full flex-wrap shadow-2xl bg-negro bg-opacity-10