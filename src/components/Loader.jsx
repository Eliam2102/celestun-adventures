import React, { useEffect } from 'react';
import gsap from 'gsap';

const Loader = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to("#loader-text", { y: 0, duration: 1, ease: "power4.out" })
            .to("#loader", { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration: 1.2, ease: "power4.inOut", delay: 0.2 });
    }, []);

    return (
        <div id="loader" className="fixed inset-0 bg-black-pure z-[100] flex items-center justify-center text-white">
            <div className="overflow-hidden">
                <h1 className="text-flamingo font-serif italic text-4xl md:text-6xl translate-y-full" id="loader-text">
                    Celestún
                </h1>
            </div>
        </div>
    );
};

export default Loader;
