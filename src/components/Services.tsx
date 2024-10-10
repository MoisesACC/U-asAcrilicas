import React from 'react';

const services = [
  {
    title: 'Uñas Acrílicas',
    description: 'Diseños personalizados y duraderos para tus uñas.',
    price: 'Desde $30'
  },
  {
    title: 'Manicura',
    description: 'Cuidado completo para tus manos y uñas.',
    price: 'Desde $20'
  },
  {
    title: 'Decoración',
    description: 'Arte y diseños únicos para tus uñas.',
    price: 'Desde $10'
  },
  {
    title: 'Relleno',
    description: 'Mantenimiento para tus uñas acrílicas.',
    price: 'Desde $25'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Ofrecemos una variedad de servicios para mantener tus uñas hermosas y saludables.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
                    <p className="mt-2 text-sm font-semibold text-pink-600">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;