import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import Tours from '../components/Tours'; // Reusing the Tours component which has the logic

const BookingPage = () => {
    return (
        <div className="bg-black-pure text-white dark:bg-white dark:text-black-pure min-h-screen selection:bg-flamingo selection:text-white flex flex-col pt-32 transition-colors duration-500">
            <Cursor />
            <Navbar />

            <div className="flex-grow">
                <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 uppercase">
                        Agenda tu <span className="text-flamingo">Experiencia</span>.
                    </h1>
                    <p className="text-xl font-light opacity-80 max-w-2xl mx-auto font-serif italic text-flamingo">
                        Elige tu aventura y asegura tu lugar en el paraíso.
                    </p>
                </div>

                {/* We reuse the Tours component here as it contains the cards and the Booking Modal logic perfectly */}
                {/* We might want to pass a prop to Tours to not render its title if we want custom header, but standard is fine */}
                <div className="-mt-20 md:-mt-32">
                    <Tours />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BookingPage;
