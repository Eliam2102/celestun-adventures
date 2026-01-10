import React from 'react';

const Gallery = () => {
    return (
        <section id="galeria" className="py-20 md:py-32 bg-black-soft dark:bg-gray-100 transition-colors">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
                    <div>
                        <span className="text-flamingo font-bold uppercase tracking-widest text-xs mb-4 block">Portafolio Visual</span>
                        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none">
                            Naturaleza<br /><span className="text-flamingo font-serif italic lowercase font-light">Viva.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm opacity-60 text-left text-sm">Momentos mágicos en la Reserva de la Biosfera Ría Celestún.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="gallery-item col-span-2 md:col-span-1 h-[300px] md:h-[600px]">
                        <img
                            src="https://res.cloudinary.com/diw2luuur/image/upload/v1767936980/flamingo_oapbvt.jpg"
                            className="w-full h-full object-cover grayscale hover:grayscale-0"
                            alt="Flamingos"
                        />
                    </div>
                    <div className="gallery-item col-span-2 md:col-span-2 h-[350px] md:h-[600px] md:-mt-20">
                        <img
                            src="https://res.cloudinary.com/diw2luuur/image/upload/v1767937262/WhatsApp_Image_2025-12-31_at_15.32.39_uq2e26.jpg"
                            className="w-full h-full object-cover grayscale hover:grayscale-0"
                            alt="Atardecer"
                        />
                    </div>
                    <div className="gallery-item col-span-2 md:col-span-1 h-[300px] md:h-[500px]">
                        <img
                            src="https://res.cloudinary.com/diw2luuur/image/upload/v1767937260/WhatsApp_Image_2026-01-05_at_09.25.01_yxy7b8.jpg"
                            className="w-full h-full object-cover grayscale hover:grayscale-0"
                            alt="Bote"
                        />
                    </div>
                    <div className="gallery-item col-span-1 md:col-span-2 h-[250px] md:h-[500px]">
                        <img
                            src="https://res.cloudinary.com/diw2luuur/image/upload/v1768027787/WhatsApp_Image_2026-01-10_at_00.49.26_wg9tk6.jpg"
                            className="w-full h-full object-cover grayscale hover:grayscale-0"
                            alt="Naturaleza"
                        />
                    </div>
                    <div className="gallery-item col-span-1 md:col-span-2 h-[250px] md:h-[500px] md:-mt-24">
                        <img
                            src="https://res.cloudinary.com/diw2luuur/image/upload/v1767937442/family_dsim8z.jpg"
                            className="w-full h-full object-cover grayscale hover:grayscale-0"
                            alt="Playa"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
