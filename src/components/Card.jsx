/* eslint-disable react/prop-types */

import { Card } from "flowbite-react";


export default function Component(props) {
    return (
        <Card className="max-w-lg flex-shrink-0 lg:w-3/4">
            <div className="flex justify-center items-center">
                <img src={props.src} alt="image 1" className="w-60 h-60 " />
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
        </Card >
    );
}
