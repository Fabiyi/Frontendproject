import { doctors } from "@/app/_components/doctor";
import React from "react";
import Image from "next/image";






export default function page({params}) {
    const doctor = doctors.find((doctor) => doctor.link === params.id)

    return(
        <div className="max-w-3xl mx-auto px-4 py-8 pb-10">
            <div className="flex flex-col items-center">
            <div className="items-center pb-10 ">
                      <Image
                      src={`/images/${doctor.image}`}
                      alt={doctor.name}
                      width={350}
                      height={350}
                      className="rounded-full pt-12"/>
                  </div>
                <h1 className="text-3xl font-bold mb-2 hover:text-5xl ">{doctor.name}</h1>
                <p className="text-lg text-gray-900 text-center font-bold">{doctor.department}</p>
                <p className="text-lg text-gray-900 text-center">{doctor.bio}</p>
            </div>
        </div>
    );
}




