import Link from "next/link";
import React from "react";




import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
          <p>19 Akindoyin St.</p>
          <p>Ikenne-Remo,Ogun State, ZIP-001891 </p>
          <p>Phone: (+234) 806-127-3323</p>
          <p>Email: fabiyidanieldamilola@healthcare.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul>
            <li>
              <Link href="/about " className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-blue-500">
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="Damtol Hospital" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="Damtol Hospital" aria-label="Twitter" className="hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="Damtol Hospital" aria-label="Instagram" className="hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="Damtol Hospital" aria-label="LinkedIn" className="hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Newsletter</h4>
          <p>Subscribe to get the latest news and updates.</p>
          <form action="https://formsubmit.co/fabiyidanieldamilola@gmail.com" method="POST" className="mt-4 flex">
            <input
              type="email" id="name" name="name"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Damtol Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}
