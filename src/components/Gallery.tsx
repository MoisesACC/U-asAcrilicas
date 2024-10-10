import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galería de Trabajos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explora algunos de nuestros diseños y trabajos recientes.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img src={image} alt={`Diseño de uñas ${index + 1}`} className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;