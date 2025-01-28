/* eslint-disable react/prop-types */



export default function Service(props) {
    return (
        <>
            <div className="flex justify-center items-center rounded-full border border-secondary w-36 h-36 p-10 animate-float">
                <h1 className="text-text font-Rubik">{props.title}</h1>
            </div>
        </>
    )
}