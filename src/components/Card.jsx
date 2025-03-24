/* eslint-disable react/prop-types */

import { Card } from "flowbite-react";


export default function Component(props) {
    return (
        <Card className="max-w-lg w-screen flex-shrink-0 lg:w-3/4">
            <div className="flex">
                <img src={props.src} alt="image 1" className="w-20 h-20 " />
                
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-Bona">
                {props.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 font-Rubik">
                {props.description}
            </p>
        </Card >
    );
}
