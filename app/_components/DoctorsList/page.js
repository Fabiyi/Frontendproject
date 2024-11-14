
import Image from "next/image";
import doctorsData from '../data/doctor.json';
import Link from "next/link";


export default function DoctorsList(){
    return(
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsData.map((doctor)=> (
            <div key={doctor.id} className="bg-white shadow-md rounded-lg p-4 text-center">
                <Image
                src={`/${doctor.image}`}
                alt={doctor.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"/>
                <h3 className="text-xl font-semibold"> {doctor.name}</h3>
                <p className="text-gray-500">{doctor.department}</p>
                <p className="text-gray-500 italic">{doctor.specialization}</p>
                <p className="text-gray-700 mt-4">{doctor.bio}</p>
            </div>
        ))}
        </div>    
        </div>
    );
}

{doctors.map((doctor) =>(
<div key={doctor.id} className="bg-white shadow-md rounded-lg p-4 text-center">
   <Image src={`/${doctor.name}`}  width= {150} height={150} 
   className="rounded-full mx-auto mb-4"/>
   <Link href={`/doctors/${doctor.id}`} className="text-xl font-semibold text-blue-500 hover:underline" >
   {doctor.name}
   </Link>

   <p className=" text-gray-600 ">{doctor.department}</p>
   <p className=" text-gray-500 italic ">{doctor.specialization}</p>
   
</div>));
}