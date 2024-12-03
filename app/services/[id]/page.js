import { services } from "@/app/_components/Services";
import React from 'react';


export default function page({params}) {
    const service = services.find((service) => service.link === params.id)
    return(
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
                            {service.icon}
                        </div>
                <h1 className="text-3xl font-bold mb-2 hover:text-xl hover:text-blue-400">{service.name}</h1>
                <p className="text-lg text-gray-600 text-center">{service.description}</p>
            
            </div>
        </div>
    );
}

