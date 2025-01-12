

export default function Navbar() {
    return (
        <>
            <main className="w-3/4 h-auto">
                <nav className=" flex justify-evenly items-center p-3 my-2 rounded-full bg-white border border-black flex-wrap">
                    <a href="/" className="mx-10">
                        <img src="../../src/assets/Global-Icon.svg" alt="DarMode" className="w-5" />
                    </a>
                    <article className="mx-10">
                        <img src="../../src/assets/Global-Icon.svg" alt="Logotipo" className="w-10" />
                    </article>
                    <a href="/" className="mx-10">
                        <img src="../../src/assets/Global-Icon.svg" alt="Languague" className="w-5" />
                    </a>
                    <article className="mx-10">
                        <h1 className="text-secondary text-md ">Home</h1>
                    </article>
                </nav>
            </main>
        </>
    )
}