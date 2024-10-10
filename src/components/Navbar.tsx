import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-pink-600">Uñas Elegantes</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="#services" className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
              <a href="#gallery" className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Galería</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-600 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#services" className="text-gray-600 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
            <a href="#gallery" className="text-gray-600 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Galería</a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;