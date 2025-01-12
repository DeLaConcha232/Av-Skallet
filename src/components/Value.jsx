

export default function value(props) {
    return (
        <>
            <article className="inline-block w-auto h-auto px-10 py-2 border border-secondary rounded-full">
                <h1 className="text-center text-sm text-text">{props.text}</h1>
            </article>
        </>
    )
}