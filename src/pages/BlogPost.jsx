import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen bg-black-pure text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
                    <Link to="/" className="text-flamingo underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black dark:bg-black-pure dark:text-white min-h-screen transition-colors duration-500 selection:bg-flamingo selection:text-white">
            <Cursor />
            <Navbar />

            {/* Hero Section Editorial */}
            <div className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 z-10"></div>

                {/* Parallax-ish Image */}
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover fixed-bg"
                />

                <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-12 md:pb-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/80 mb-6">
                            <span className="bg-flamingo text-white px-2 py-1">Journal</span>
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif italic text-white leading-[0.9] tracking-tighter mb-6">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            <article className="relative z-30 bg-white dark:bg-black-pure -mt-10 rounded-t-3xl md:rounded-none md:mt-0 pt-16 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Lead / Excerpt */}
                    <div className="mb-16">
                        <p className="text-xl md:text-3xl font-serif leading-relaxed italic text-black/80 dark:text-white/80 border-l-4 border-flamingo pl-6 md:pl-10">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Main Content Styled */}
                    <div
                        className="
                            text-lg md:text-xl leading-8 md:leading-9 font-light opacity-90
                            [&>p]:mb-8 [&>p]:text-justify
                            [&>h3]:text-3xl [&>h3]:md:text-4xl [&>h3]:font-serif [&>h3]:italic [&>h3]:text-flamingo [&>h3]:mt-16 [&>h3]:mb-8
                            [&>ul]:list-none [&>ul]:space-y-4 [&>ul]:mb-12 [&>ul]:pl-0
                            [&>ul>li]:relative [&>ul>li]:pl-8 
                            [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-3 [&>ul>li]:before:w-2 [&>ul>li]:before:h-2 [&>ul>li]:before:bg-flamingo [&>ul>li]:before:rounded-full
                            [&>div]:my-16 [&>div]:shadow-2xl [&>div]:rounded-lg
                            [&>p:first-of-type]:first-letter:text-6xl [&>p:first-of-type]:first-letter:font-serif [&>p:first-of-type]:first-letter:text-flamingo [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:leading-[0.8]
                        "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Back Link */}
                    <div className="mt-20 pt-10 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                        <Link to="/" className="group flex items-center gap-4">
                            <span className="w-10 h-10 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center group-hover:bg-flamingo group-hover:border-flamingo group-hover:text-white transition-all">
                                <svg className="w-4 h-4 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            </span>
                            <span className="font-bold uppercase tracking-widest text-xs group-hover:text-flamingo transition-colors">Volver al Inicio</span>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
