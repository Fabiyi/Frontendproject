import React from "react";


export default function ContactPage(){
  return(
    <main className="bg-gray-100 flex items-center justify-center min-h-screen">
    
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md ">
      <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">Contact Us</h2>

      
      <form action="https://formsubmit.co/fabiyidanieldamilola@gmail.com" method="POST">
      
      <div className="mb-4 ">
      <label for="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your fullname" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"></input>
      </div>

      <div className="mb-4">
      <label for="name" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"></input>
      </div>

      <div className="mb-4">
      <label for="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <div className="flex space-x-4">
      <button type="submit" value="submit" className="bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-600"> Submit</button>
      <button type="reset" value="reset" className="bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-500"> Reset</button>
      </div>
      </form>
    </div>
    </main>
  );
}
