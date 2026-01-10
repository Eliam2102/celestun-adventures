import React, { useState } from 'react';
import TourModal from './TourModal';

const toursData = [
    {
        id: 1,
        title: "Tour Ría Celestún",
        price: "$4,100 MXN",
        time: "1 hr 20 min",
        label: "1-6 Pax · Lancha Privada",
        image: "https://res.cloudinary.com/diw2luuur/image/upload/v1768021471/PHOTO-2025-12-31-15-33-16_vctdbi.jpg",
        images: [
            "https://res.cloudinary.com/diw2luuur/image/upload/v1768021471/PHOTO-2025-12-31-15-33-16_vctdbi.jpg",
            "https://res.cloudinary.com/diw2luuur/video/upload/v1768023935/IMG_6480_fhh9pl.mov"
        ],
        description: "Recorrido en lancha por la Reserva de la Biosfera. Visita la colonia de flamencos, Isla de Pájaros, túnel de manglares y el ojo de agua dulce. Salida por el santuario. Incluye guía federal certificado."
    },
    {
        id: 2,
        title: "Tour Terrestre: Salineras",
        price: "$1,700 MXN",
        time: "1 hr 30 min",
        label: "2-4 Pax · En Tuk Tuk",
        image: "https://res.cloudinary.com/diw2luuur/image/upload/v1768024338/IMG_6452_vs8jcg.jpg",
        images: [
            "https://res.cloudinary.com/diw2luuur/image/upload/v1768024338/IMG_6452_vs8jcg.jpg",
            "https://res.cloudinary.com/diw2luuur/image/upload/v1768020783/31451781-d4f8-4b3f-af41-890cda1fd8fd_agrstg.jpg",
            "https://res.cloudinary.com/diw2luuur/image/upload/v1768020782/7429472b-792e-400d-88f4-6842ffae23cf_b6sggn.jpg",
            "https://res.cloudinary.com/diw2luuur/image/upload/v1768020781/50f4b1d3-4ac1-4fbb-9f0c-231e6e5e178c_ymar6o.jpg",
            "https://res.cloudinary.com/diw2luuur/image/upload/v1768020784/3789fd6a-7c65-432c-b190-ac069395c57c_fbwdpv.jpg",
            "https://res.cloudinary.com/diw2luuur/video/upload/v1768029227/d55d31ef-3906-40bf-b1bf-d6fc178ddead_zbpyra.mov"
        ],
        description: "Explora la Reserva por tierra. Visita las Aguas Rosas, diferentes tipos de sal, bosque petrificado y la Hacienda Salinera 'La Herradura del Siglo XXI'. Incluye identificación de aves."
    },
    {
        id: 3,
        title: "Aves & Fotografía",
        price: "Cotizar",
        time: "A medida",
        label: "Personalizado · Whatsapp",
        image: "https://res.cloudinary.com/diw2luuur/image/upload/v1767937261/birdwatching_iers9o.jpg",
        description: "Experiencia especializada para birdwatchers y fotógrafos. El itinerario y precio dependen de tus objetivos y tamaño del grupo. Contáctanos directamente para diseñar tu salida.",
        whatsapp: true
    }
];

const TourCard = ({ tour, onClick }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = (e) => {
        e.stopPropagation();
        if (tour.images && tour.images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % tour.images.length);
        }
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        if (tour.images && tour.images.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + tour.images.length) % tour.images.length);
        }
    };

    const displaySource = tour.images && tour.images.length > 0 ? tour.images[currentImageIndex] : tour.image;
    const hasMultipleImages = tour.images && tour.images.length > 1;
    const isVideo = displaySource.endsWith('.mov') || displaySource.endsWith('.mp4');

    return (
        <div
            onClick={() => onClick(tour)}
            className="group cursor-pointer w-full"
        >
            <div className="h-[400px] md:h-[600px] overflow-hidden relative mb-6 bg-black">
                {isVideo ? (
                    <video
                        src={displaySource}
                        className="w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <img
                        src={displaySource}
                        className="w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:scale-105"
                        alt={tour.title}
                        loading="lazy"
                    />
                )}

                {/* Slideshow Controls for Card */}
                {hasMultipleImages && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={prevSlide}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-flamingo text-white backdrop-blur-sm flex items-center justify-center pointer-events-auto transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-flamingo text-white backdrop-blur-sm flex items-center justify-center pointer-events-auto transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                    <p className="text-white text-[10px] md:text-sm uppercase tracking-widest mb-2">{tour.label}</p>
                    <h4 className="text-white text-2xl md:text-3xl font-bold">{tour.title}</h4>
                </div>
            </div>
            <div className="flex justify-between items-center border-b border-flamingo/20 pb-4">
                <span className="text-lg md:text-2xl font-bold uppercase tracking-tighter text-white dark:text-black-pure transition-colors">{tour.title}</span>
                <span className="text-flamingo font-bold text-sm md:text-base">{tour.price}</span>
            </div>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs uppercase tracking-widest font-bold text-white dark:text-black underline decoration-flamingo underline-offset-4">
                {tour.whatsapp ? 'Solicitar Informes' : 'Ver Detalles y Reservar'}
            </div>
        </div>
    );
};

const Tours = () => {
    const [selectedTour, setSelectedTour] = useState(null);

    return (
        <section id="tours" className="bg-black-pure dark:bg-white py-20 md:py-32 overflow-hidden transition-colors duration-500">
            <div className="px-6 md:px-10 mb-16 max-w-[1800px] mx-auto">
                <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-4 uppercase text-white dark:text-black-pure transition-colors">
                    Tours<span className="text-flamingo">.</span>
                </h2>
                <p className="text-flamingo font-serif italic text-xl md:text-2xl">Seleccionados para el viajero consciente</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-6 md:px-10 max-w-[1800px] mx-auto pb-10">
                {toursData.map((tour) => (
                    <TourCard
                        key={tour.id}
                        tour={tour}
                        onClick={setSelectedTour}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedTour && (
                <TourModal
                    tour={selectedTour}
                    onClose={() => setSelectedTour(null)}
                />
            )}
        </section>
    );
};

export default Tours;
