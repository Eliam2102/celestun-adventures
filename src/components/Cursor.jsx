import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            // Only move if visible (lg screens and up)
            if (window.innerWidth >= 1024) {
                gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            }
        };

        const handleHover = () => gsap.to(cursor, { scale: 3 });
        const handleLeave = () => gsap.to(cursor, { scale: 1 });

        window.addEventListener('mousemove', moveCursor);

        // Add hover effects to elements with 'scale-hover' class
        // We'll need to use event delegation or re-attach listeners if content changes dynamically, 
        // but for this static content, we can try to attach to existing ones or use a mutation observer.
        // For simplicity in React, we might want to just handle the mousemove here and let components 
        // handle their own hover state or use a context, but cloning the original logic:

        const addHoverListeners = () => {
            document.querySelectorAll('.scale-hover').forEach(el => {
                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleLeave);
            });
        };

        // Delay slightly to ensure DOM is ready if not using a more complex context approach
        setTimeout(addHoverListeners, 100);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.querySelectorAll('.scale-hover').forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return <div id="cursor" ref={cursorRef} className="hidden lg:block fixed top-0 left-0"></div>;
};

export default Cursor;
