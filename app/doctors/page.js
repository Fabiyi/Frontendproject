import React from 'react';
import Link from 'next/link';
import { doctors } from '../_components/doctor';
import Image from 'next/image';




export default function DoctorPage() {
    // const doctors = [
    //     {
    //         "id":"dr-john-daniel",
    //         "name":"Dr John Daniel",
    //         "link":"dr-john-daniel",
    //         "image":"Doctor11.jpg",
    //         "department":"Cardiology",
    //         "specialization":"Heart specialist",
    //         "bio":"Dr John Daniel has over 20 years of experience in cardiology and is a renowned expert in heart health."
    //     },
    //     {
    //         "id":"dr-john-doe",
    //         "name":"Dr John Doe",
    //         "link":"dr-john-doe",
    //         "image":"Doctor12.jpg",
    //         "department":"Surgical",
    //         "specialization":"Heart specialist",
    //         "bio":"Dr John Doe is a leading neurologist specialing in brain disorders and cognitive health."
    //     },
    //     {
    //         "id":"dr-jane-smith",
    //         "name":"Dr Jane Smith",
    //         "link":"dr-jane-smith",
    //         "image":"Doctor13.jpg",
    //         "department":"Neurology",
    //         "specialization":"Brain specialist",
    //         "bio":"Dr Jane Smith is a leading neurologist specializing in brain health and cognitive wellness."
    //     },
    //     {
    //         "id":"dr-emily-clart",
    //         "name":"Dr Emily Clart",
    //         "link":"dr-emily-clart",
    //         "image":"Doctor14.jpg",
    //         "department":"Orthopedics",
    //         "specialization":"Bone specialist",
    //         "bio":"With a focus on bone health, Dr. Emily Clart is a top orthopedic surgeon with years of experience."
    //     },
    //     {
    //         "id":"dr-micheal-brown",
    //         "name":"Dr Micheal Brown",
    //         "link":"dr-micheal-brown",
    //         "image":"Doctor15.jpg",
    //         "department":"Pediatrics",
    //         "specialization":"Child specialist",
    //         "bio":"Dr Micheal Brown is a leading neurologist specialing in brain disorders and cognitive health."
    //     },
    //     {
    //         "id":"dr-joseph-ik",
    //         "name":"Dr Joseph Ik",
    //         "link":"dr-joseph-ik",
    //         "image":"Doctor16.jpg",
    //         "department":"Emergency Services",
    //         "specialization":"Heart specialist",
    //         "bio":"Dr Joseph Ik is a leading neurologist specialing in brain disorders and cognitive health."
    //     }
    // ];

    
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
      

