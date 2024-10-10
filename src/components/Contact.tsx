import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            ¿Tienes preguntas o quieres agendar una cita? ¡Estamos aquí para ayudarte!
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <Phone className="w-10 h-10 text-pink-600" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Teléfono</h3>
              <p className="mt-1 text-gray-500">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-10 h-10 text-pink-600" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-1 text-gray-500">info@unaselegantes.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-10 h-10 text-pink-600" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Dirección</h3>
              <p className="mt-1 text-gray-500">123 Calle Principal, Ciudad, País</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;