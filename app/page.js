import React from "react";
import Image from "next/image";
import Link from "next/link";
import Buttons from "./_components/Buttons/Button";
import Container from "./_components/Container";




export default function Home() {
  
  return (
    
    <div className="container mx-auto p-10 ">
      <section className="relative h-[500px] flex items-center justify-center">
          <div className="absolute section1 bg-inset-0 bg-cover bg-center filter blur-sm" > </div>
          
          <div className="relative p-8 text-center z-10 text-white">
          <h1 className="lg:text-8xl ms:text-7xl font-bold text-white">Welcome to DAMTOL</h1>
          <p className="lg:text-4xl ms:text-3xl font-semibold text-white">Your health, Our Priority</p>
          </div>
          
      </section>


      <section className="mt-10">
      <Image
            className=""
            alt="Mydoo"
            src={'/images/Doctor10.jpg'}
            // placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit:'cover'
            }}/>
            
    </section>
      
      <Container>
      <button text=""  className=" w-20"/>
      </Container>
      <div className="text-center py-10 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 ">Contact Us</h2>
      
      
      <p className="mt-2 text-gray-600 ">For appointments, please visit our <Link href="/contact" className="text-blue-600 underline ">contact page</Link> or call +234-806-127-3323</p>
      
      </div>
      <Container>
        <section className=" flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-gray-100 rounded-full shadow-lg max-w-4xl mx-auto ">
              <div className=" flex flex-row py-4 gap-8 ">
                   <Link href="./doctors"> <Image src={'/images/Doctor1.jpg'} width={450} height={450} /> </Link>     
              </div>

              <div className="flex flex-col space-y-4 w-full md:w-1/2">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-2 rounded-full text-white">
                      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0  12 2zM13 7h-2v5H7v2h4v5h2v-5h4v-2h-4z"/></svg>
                  </div>
                  <Link href="/services/emergency"> <p className="text-gray-700 font-medium  hover:text-xl hover:text-blue-400">Emergency Services </p> </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-2 rounded-full text-white">
                      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3org/2000/svg" viewBox="0 0 24 24">
                      <path d="M14 3H4a1 1 0 0 0-1 1v16h2V5h8v14h2V4a1 1 0 0 0-1-1zm7.7 14.3l-4-4a1 1 0 0 0-1-1zm7.7 14.3l-4-4a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.4 1.4l3.3-3.3 3.3 3.3a1 1 0 0 0 1.4-1.4z"/></svg>
                  </div>
                  
                  <Link href="/services/surgical"><p className="text-gray-700 font-medium hover:text-xl hover:text-blue-400">Surgical</p> </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 p-2 rounded-full text-white">
                      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 4a5 5 0 0 1 5 0 0 1 5 5c0 1.4-.6 2.6-1.6 3.5C16.4 13 17 14 17 15v2h-1v3h-2v-3h10v3h8v-3H7v-2c0-1 0.6-2 1.6-2.5A5 5 0 0 1 12 4zM9 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"/></svg>
                  </div>
                  <Link href="/services/pediatrics"><p className="text-gray-700 font-medium hover:text-xl hover:text-blue-400">Pediatrics </p> </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-2 rounded-full text-white">
                      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <Link href="/services/cardiology"><p className="text-gray-700 font-medium hover:text-xl hover:text-blue-400">Cardiology </p> </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-500 p-2 rounded-full text-white">
                      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <Link href="/services/neurology"><p className="text-gray-700 font-medium hover:text-xl hover:text-blue-400">Neurology </p> </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-teal-500 p-2 rounded-full text-white">
                      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <Link href="/services/orthopedic"><p className="text-gray-700 font-medium hover:text-xl hover:text-blue-400"> Orthopedics </p> </Link>
                </div>

              </div>
        </section>
      </Container>
      
      <section className=" py-2 bg-gray-50 pb-10 ">
            <h2 className="text-2xl font-semibold text-center text-gray-800 py-4"> Health Tips</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-2">
              {/*repeat this block for each tip */}
               <div className="text-center">
               <Image src={'/images/Doctor5.jpg'}  className="rounded-md" width={450} height={450} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Stay Hydrated</h3>
              <p className="text-gray-600">Drinking enough water each day is essential for maintaining good health.</p>
               </div>
               <div className="text-center">
              <Image src={'/images/Doctor9.jpg'}  className="rounded-md" width={450} height={450} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Exercise Regularly</h3>
              <p className="text-gray-600">Engaging in at least 30 minutes of moderate activities on most days of the week.</p>
               </div>
              </div>
         </section>

    </div>
    
  );
}


