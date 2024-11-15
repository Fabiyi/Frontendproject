"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';





export default function About() {
  
  return (
    <main className="bg-slate-300 min-h-screen pt-10"> 
<motion.section className="max-w-4xl mx-auto py-6 "
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
                      
          <motion.h1 className="flex justify-center font-semibold py-4 mx-[20%] text-3xl  text-blue-600"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.8}}
                    >
                        ABOUT DAMTOL HEALTHCARE      
                      </motion.h1>
          <motion.p className="text-2xl mx-10 flex justify-center font-medium">
          We are a leading healthcare provider offering top-notch medical services.
          </motion.p>
          <motion.p className="text-2xl mx-10 flex justify-center font-medium">
          Our team of expert doctors ensures that you get the best care possible.
          </motion.p>
          <motion.div>
            
          </motion.div>
    </motion.section>
    
   

    <motion.section className="max-w-4xl mx-auto py-6"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
    <motion.h2 className="flex justify-center font-semibold py-4 mx-[30%] text-2xl text-blue-600"
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:1, duration:0.8}}
                    >Our Mission
                    </motion.h2>
                    <motion.p className="text-2xl mx-10 flex justify-center font-medium">Our mission is to provide compassionate, high-quality healthcare to our community,
    while fostering a culture of respect, integrity, and excellence.
    </motion.p>
    </motion.section>
    <motion.section className="max-w-4xl mx-auto py-8"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
    <motion.h2 className="flex justify-center font-semibold py-4 mx-[30%] text-2xl text-blue-600"
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:1, duration:0.8}}
                    >Our History
                    </motion.h2>
                    <motion.p className="text-2xl mx-10 flex justify-center font-medium">
      Established in 1990, our healthcare organization has been serving the community
      with dedication and care. Over the years, we have expanded our services and facilities
      to meet the evolving needs of our patients.
      </motion.p>

      </motion.section>
    <motion.section className=" bg-section1 bg-cover bg-center max-w-4xl mx-auto py-8"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
            <motion.h2 className="flex justify-center font-semibold py-2 mx-[30%] text-2xl text-blue-600"
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:1, duration:0.8}}
                    >Our Values
                    </motion.h2>
            <motion.ul 
            className="flex flex-col sm:flex-row gap-4 items-center justify-around text-2xl "
                    initial={{opacity:1, y:-10}}
                    animate={{opacity:1, y:1}}
                    transition={{delay:1.5, duration:0.8}}>
              <Link href="#" className=" hover:text-blue-600">Compassion</Link>
              <Link href="#" className=" hover:text-blue-600">Integrity</Link>
              <Link href="#" className=" hover:text-blue-600">Excellence</Link>
              <Link href="#" className=" hover:text-blue-600">Innovation</Link>          
              </motion.ul>
     </motion.section>
    

     <motion.section className="py-8 pb-12"
                      initial={{opacity:0, y:50}}
                      animate={{opacity:1, y:0}}
                      transition={{duration:1}}>
            <Link href="/doctors"><h2 className="text-3xl font-semibold text-center p-6 text-blue-600"
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                transition={{delay:1, duration:0.8}}>Meet Our Doctors</h2> </Link>

            <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto gap-x-6"
                 initial={{scale:0.9, opacity:0}}
                 animate={{scale:1, opacity:1}}
                 transition={{delay:1.4, duration:1}}>
            <div className="relative w-40 h-40 overflow-hidden rounded-full md:w-1/3 mb-4 md:mb-0">
            <Image alt="Mydoo" src={'/images/Doctor6.jpg'} quality={100}width={300} height={300} sizes="100vw" style={{objectFit:'cover'}}/>  
                
             <Link href="/doctors/dr-emily-clart"><p className="absolute bottom-2 left-0 right-0 text-white bg-black bg-opacity-50  hover:bg-blue-950 p-2 text-center">
                    Dr. Emily Clart
                </p> </Link>
            </div>
            <div className="relative w-40 h-40 overflow-hidden  rounded-full md:w-1/3 mb-4 md:mb-0"
                 initial={{scale:0.9, opacity:0}}
                 animate={{scale:1, opacity:1}}
                 transition={{delay:1.4, duration:1}}>
              <Image
            className=""alt="Mydoo" src={'/images/Doctor11.jpg'} quality={100} width={400} height={400} sizes="100vw"style={{objectFit:'cover'
            }}/> 
              <Link href="/doctors/dr-john-daniel"> <p className="absolute bottom-2 left-0 right-0 text-white bg-black bg-opacity-50  hover:bg-blue-950 p-2 text-center">
                    Dr. John Daniel
                </p>   </Link>
            </div>
            <div className="relative w-40 h-40 overflow-hidden rounded-full md:w-1/3 mb-4 md:mb-0"
                 initial={{scale:0.9, opacity:0}}
                 animate={{scale:1, opacity:1}}
                 transition={{delay:1.4, duration:1}}>
              <Image alt="Mydoo" src={'/images/Doctor21.jpg'} quality={100}width={400} height={400} sizes="100vw"style={{objectFit:'cover' }}/>  
              <Link href="/doctors/dr-jane-smith"> <p className="absolute bottom-2 left-0 right-0 text-white bg-black bg-opacity-50  hover:bg-blue-950 p-2 text-center">
                Dr. Jane Smith
                </p>  </Link>
            </div>
        </div>

      </motion.section>

    </main>

  );
}
 
