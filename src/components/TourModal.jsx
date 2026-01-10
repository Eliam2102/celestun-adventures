import React, { useState, useEffect } from 'react';

const TourModal = ({ tour, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        people: ''
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        if (tour.images && tour.images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % tour.images.length);
        }
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        if (tour.images && tour.images.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + tour.images.length) % tour.images.length);
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!tour) return null;

    const displaySource = tour.images && tour.images.length > 0 ? tour.images[currentImageIndex] : tour.image;
    const isVideo = displaySource && (displaySource.endsWith('.mov') || displaySource.endsWith('.mp4'));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Formatear mensaje para WhatsApp
        let text = '';
        if (tour.whatsapp) {
            text = `Hola, me interesa solicitar informes sobre la experiencia personalizada: *${tour.title}*.\n\nMi nombre es: ${formData.name}.\nMe gustaría saber más detalles y disponibilidad.`;
        } else {
            text = `Hola, me interesa reservar el tour *${tour.title}*.\n\n📅 Fecha: ${formData.date}\n👥 Personas: ${formData.people}\n👤 Nombre: ${formData.name}`;
        }

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/529995483710?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative bg-white dark:bg-black-soft text-black dark:text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl flex flex-col md:flex-row">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-flamingo hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative group">
                    {isVideo ? (
                        <video
                            src={displaySource}
                            className="w-full h-full object-cover transition-all duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                        />
                    ) : (
                        <img
                            src={displaySource}
                            alt={tour.title}
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                    )}

                    {tour.images && tour.images.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-flamingo text-white rounded-full backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-flamingo text-white rounded-full backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {tour.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentImageIndex ? 'bg-white scale-125 w-4' : 'bg-white/50 hover:bg-white'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:hidden pointer-events-none z-10">
                        <h3 className="text-3xl font-extrabold text-white tracking-tighter uppercase leading-none mb-2">{tour.title}</h3>
                        <p className="text-flamingo font-bold tracking-widest text-sm">{tour.price}</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                    <div className="hidden md:block mb-4">
                        <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tighter uppercase leading-none mb-2">{tour.title}</h3>
                        <p className="text-flamingo font-bold tracking-widest text-lg">{tour.price}</p>
                    </div>

                    <div className="mb-4 space-y-2 text-sm opacity-80 font-light leading-relaxed">
                        <p>{tour.description}</p>
                        <p className="font-bold">Incluye:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                            {/* Generic includes for now, can be specific per tour if passed in props */}
                            <li>Transporte privado en lancha</li>
                            <li>Guía certificado local</li>
                            <li>Aguas y frutas de temporada</li>
                            <li>Chalecos salvavidas</li>
                        </ul>
                    </div>

                    {/* Booking Form */}
                    <div className="mt-auto">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-flamingo">
                            {tour.whatsapp ? 'Solicitar Informes' : 'Reservar ahora'}
                        </h4>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="block text-[9px] uppercase tracking-widest mb-1 opacity-60">Tu Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-current py-1.5 text-sm font-bold focus:border-flamingo outline-none transition-colors"
                                    placeholder="Escribe tu nombre completo"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[9px] uppercase tracking-widest mb-1 opacity-60">Fecha</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required={!tour.whatsapp}
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-current py-1.5 text-sm font-bold focus:border-flamingo outline-none transition-colors dark:[color-scheme:dark]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[9px] uppercase tracking-widest mb-1 opacity-60">Personas</label>
                                    <input
                                        type="number"
                                        name="people"
                                        min="1"
                                        max="12"
                                        required={!tour.whatsapp}
                                        value={formData.people}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-current py-1.5 text-sm font-bold focus:border-flamingo outline-none transition-colors"
                                        placeholder="1-12"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={`w-full ${tour.whatsapp ? 'bg-green-600 hover:bg-green-700' : 'bg-flamingo hover:bg-black dark:hover:bg-white dark:hover:text-black'} text-white py-3.5 mt-4 mb-4 font-bold uppercase tracking-[0.2em] transition-all text-xs group`}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {tour.whatsapp ? 'Solicitar Informes' : 'Confirmar por WhatsApp'}
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourModal;
