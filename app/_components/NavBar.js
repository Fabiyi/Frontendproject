"use client"
import Link from "next/link";
import Container from "../_components/Container";
import Buttons from "../_components/Buttons";
import { useEffect, useState } from "react";
import Image from "next/image";




export default function Navbar(){
    const [display, setDisplay] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => 
            window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header className={`fixed top-0 left-0 w-full z-50 transition-colors transition-text duration-300 ${ isScrolled ? 'bg-black shadow-lg text-white' : 'bg-blue-300 text-black'
            
        }`}>
        <Container>
        
                <nav className="bg-slate-800 p-4 top-0 left-0 w-full bg-transparent "
        
                >

            <div className="container mx-auto flex justify-between items-center"
                 >
                <div className=" space-x-0 flex flex-row">
                <Image src={'/images/logo.png'} alt="logo" width={30} height={30} className="bg-white rounded"/>
                <Link href='/' className="text-2xl font-bold text-white hover:text-4xl"> DAMTOL</Link>
                </div>
                <div className="hidden md:flex space-x-6 ">
                    <Link href='/' className="text-white  hover:text-white hover:text-xl"> Home
                    </Link>
                    <Link href='/about' className="text-white  hover:text-white hover:text-xl"> About
                    </Link>
                    <Link href='/services' className="text-white  hover:text-white hover:text-xl"> Services
                    </Link>
                    <Link href='/contact' className="text-white  hover:text-white hover:text-xl"> Contact
                    </Link>
                    <Link href='/+2348061273323' className="text-white  hover:text-white hover:text-xl rounded bg-orange-500  "> Request a call
                    </Link>
                    <div className=" h-8 w-15 items-center rounded ">
                    <buttons text="Request a call"  nav className="bg-white" />
                    </div>
                </div>
                <button 
                onClick={() => 
                    setDisplay(!display)}
                    className="text-white md:hidden focus:outline-none">
                        <svg className="w-6"
                        fill= "none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d={display ? 'M6 18L18 6M6 6L12 12' : 'M4 6h16M4 12h16m-7 6h7 '}></path>
                        </svg>
                </button>
            </div>
            {display && (
                <div className="md:hidden">
                    <Link href='/' className="block text-white hover:bg-gray-700 p-2">Home
                    </Link>
                    <Link href='/about' className="block text-white hover:bg-gray-700 p-2">About
                    </Link>
                    <Link href='/services' className="block text-white hover:bg-gray-700 p-2">Services
                    </Link>
                    <Link href='/contact' className="block text-white hover:bg-gray-700 p-2">Contact
                    </Link>
                    <div className="flex justify-center h-8 w-15 items-center rounded bg-red-300:hover">
                    <Buttons text="Request a call"  orange />
                    </div>
                </div>
            )}
        </nav>
        </Container>
        </header>
    );
}
