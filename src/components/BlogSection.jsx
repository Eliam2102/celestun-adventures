import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogSection = () => {
    return (
        <section id="blog" className="py-24 bg-white dark:bg-black-soft transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-flamingo font-bold uppercase tracking-widest text-xs mb-4 block">Journal</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none text-black dark:text-white">
                            Historias de<br /><span className="text-flamingo font-serif italic lowercase font-light">Celestún.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm opacity-60 text-black dark:text-white">
                        Guías, secretos y consejos para el viajero consciente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {blogPosts.map((post) => (
                        <Link to={`/blog/${post.slug}`} key={post.id} className="group block">
                            <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-flamingo mb-3">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight mb-3 text-black dark:text-white group-hover:text-flamingo transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-4 line-clamp-3 text-black dark:text-white">
                                {post.excerpt}
                            </p>
                            <span className="text-xs font-bold uppercase tracking-widest underline decoration-flamingo underline-offset-4 text-black dark:text-white group-hover:text-flamingo transition-colors">
                                Leer Historia
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
