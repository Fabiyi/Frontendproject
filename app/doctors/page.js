import React from 'react';
import Link from 'next/link';
import { doctors } from '../_components/doctor';
import Image from 'next/image';




export default function DoctorPage() {
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
            <h1 className="text-3xl font-bold text-center mb-8">Our Doctors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white shadow-lg rounded-lg overflow-hidden ">
                   <div className="items-center">
                      <Image
                      src={`/images/${doctor.image}`}
                      alt={doctor.name}
                      width={350}
                      height={350}/>
                  </div>
                  {/* // {Doctor Details } */}
                   {/* <div className="rounded-full">  {doctor.image} </div> */}
                 <div className="p-4">
                 <Link href={`/doctors/${doctor.id}`}> <h2 className="text-xl font-semibold hover:text-3xl hover:text-blue-400">{doctor.name}</h2> </Link> 
                    <p className="text-sm text-gray-500 mt-2 font-bold">{doctor.department}</p>
                    <p className="text-sm text-gray-500 mt-2">{doctor.specialization}</p>
                    <p className="mt-4 text-gray-700">{doctor.bio}</p>
                  </div>
                  
                </div>
                
              ))}
            </div>
          </div>
        );
      }
      

