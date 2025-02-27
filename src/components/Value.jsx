

export default function value(props) {
    return (
        <>
            <article className="inline-block w-auto h-auto px-10 py-2 bg-secondary rounded-full border-b-2 border-white">
                <h1 className="text-center text-sm text-buttons font-Bona">{props.text}</h1>
            </article>
        </>
    )
}