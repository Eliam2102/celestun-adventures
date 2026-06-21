import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Tours from '../components/Tours';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';

import Features from '../components/Features';
import Reviews from '../components/Reviews';
import BlogSection from '../components/BlogSection';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black-pure text-white dark:bg-white dark:text-black-pure selection:bg-flamingo selection:text-white min-h-screen">
            <Loader />
            <Cursor />
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Experience />
                <Gallery />
                <Tours />
                <Reviews />
                <BlogSection />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
