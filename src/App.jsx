import React, { useState, useEffect } from 'react';
import {
    Menu, X, Check, Code, PenTool, Database, Layout,
    ShieldCheck, ArrowRight, ArrowLeft, Github, Linkedin, Twitter,
    Mail, MapPin, Send, ExternalLink, Clock, Box, Sparkles, Activity
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null); // State for modal
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState(null); // State for article modal

    // Handle scroll events for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Articles', href: '#writing' },
        { name: 'Expertise', href: '#skills' },
    ];

    const articles = [
        {
            id: 1,
            category: "Tech Trend",
            readTime: "8 min read",
            title: "Why Small Businesses Need Responsive Websites in 2026",
            desc: "An in-depth analysis of mobile-first indexing, Core Web Vitals, and how modern responsive infrastructure drives organic search rankings.",
            content: "In today's digital landscape, a responsive website is no longer a luxury for small businesses—it's a fundamental requirement. Over 60% of all web traffic now comes from mobile devices, and search engines like Google heavily prioritize mobile-first indexing.\n\nA responsive design ensures your website automatically adapts to any screen size, providing a seamless user experience whether your customer is browsing on a desktop, tablet, or smartphone. This not only keeps visitors on your site longer but also significantly boosts your SEO performance by improving Core Web Vitals such as layout shifts and loading speed.\n\nInvesting in modern frontend architecture directly impacts conversion rates; users are 5x more likely to abandon a business entirely if a site isn't optimized for their mobile device."
        },
        {
            id: 2,
            category: "Security",
            readTime: "12 min read",
            title: "The Ultimate Guide to Securing PHP Applications",
            desc: "A deep dive into common web vulnerabilities and the modern security measures developers must adopt to secure PHP frameworks against XSS and SQL injection.",
            content: "Securing a PHP application requires a multi-layered approach to defend against an increasingly complex threat landscape. The most common vulnerabilities—SQL Injection (SQLi) and Cross-Site Scripting (XSS)—remain prevalent largely due to improper handling of user input.\n\nTo mitigate SQLi, developers must utilize Prepared Statements (PDO) rather than concatenating user input directly into database queries. For XSS prevention, all output must be rigorously sanitized using functions like htmlspecialchars() before rendering it within the browser.\n\nBeyond basic sanitization, modern PHP security dictates the implementation of secure session management, utilizing HTTPS across all pages, setting strict Content Security Policy (CSP) headers, and employing secure password hashing algorithms like Argon2id or BCRYPT."
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Immersive 3D E-Commerce",
            tags: ["React Fiber", "Three.js", "GSAP"],
            icon: <Box size={64} strokeWidth={1.5} />,
            desc: "A futuristic web experience featuring interactive 3D product models, real-time lighting, and buttery smooth GSAP scroll animations for premium brands.",
            images: ["/ecomm_1.png", "/ecomm_2.png"]
        },
        {
            id: 2,
            title: "Award-Winning Agency UI",
            tags: ["Next.js", "Tailwind", "GSAP"],
            icon: <Sparkles size={64} strokeWidth={1.5} />,
            desc: "An ultra-modern creative agency portfolio with huge typography, dark mode neon accents, and complex timeline-based scrolling effects.",
            images: ["/agency_1.png", "/agency_2.png"]
        },
        {
            id: 3,
            title: "Real-Time Data Dashboard",
            tags: ["Redux Toolkit", "WebGL", "React"],
            icon: <Activity size={64} strokeWidth={1.5} />,
            desc: "A high-performance analytics dashboard rendering thousands of live data points using WebGL, managed by predictable Redux state architecture.",
            images: ["/dash_1.png", "/dash_2.png"]
        },
        {
            id: 4,
            title: "Custom Admin Panel",
            tags: ["PHP", "MySQL"],
            icon: <Layout size={64} strokeWidth={1.5} />,
            desc: "A secure, role-based management system built with PHP & MySQL, featuring automated task mapping, real-time notifications, and robust email integrations.",
            images: ["/admin_1.png", "/admin_2.png"]
        },
        {
            id: 5,
            title: "Advanced Authentication",
            tags: ["Security", "Auth"],
            icon: <ShieldCheck size={64} strokeWidth={1.5} />,
            desc: "A highly secure login and registration system with password hashing, email verification, and session management against cross-site vulnerabilities.",
            images: ["/auth_1.png", "/auth_2.png"]
        },
        {
            id: 6,
            title: "Image Processing Tool",
            tags: ["Frontend", "UI/UX"],
            icon: <Code size={64} strokeWidth={1.5} />,
            desc: "An interactive frontend-backend solution allowing users to upload, preview, and dynamically crop images before server compression and storage.",
            images: ["/crop_1.png", "/image_crop_ui.png"]
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    return (
        <div className="font-sans min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
            {/* Navigation */}
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="text-2xl font-extrabold tracking-tighter text-slate-900">
                        Rushi<span className="text-indigo-600">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-indigo-600 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-xl hover:shadow-indigo-600/20"
                        >
                            Hire Me <ArrowRight size={16} />
                        </a>
                    </nav>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-slate-900" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-6 gap-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 overflow-hidden py-0'}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-medium text-slate-600 hover:text-indigo-600"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium">
                        Hire Me
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3 blur-xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 w-full animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-600 mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot-anim"></span>
                        Available for new projects
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Designing precise systems.<br />
                        Writing <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-500">copy that ranks.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                        Hi, I'm <strong>Rushi Sharma</strong>. A Full Stack Web Developer & SEO Content Writer bridging the gap between high-performance web applications and compelling digital content.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-100">
                        <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-lg shadow-indigo-600/30">
                            Let's Talk <Send size={18} />
                        </a>
                        <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 transition-all">
                            Explore My Work <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-slate-100 animate-fade-in-up delay-200">
                        <div>
                            <p className="text-3xl font-extrabold text-slate-900">5+</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-slate-900">50+</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Projects Delivered</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-slate-900">100%</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-4">Portfolio</span>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Selected Web Projects</h2>
                        <p className="text-slate-600 text-lg">A showcase of secure, scalable, and highly interactive modern web applications.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-indigo-600/10 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                                <div
                                    className="h-56 bg-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-gradient-to-br from-indigo-500 to-indigo-600 group-hover:text-white transition-colors duration-300 cursor-pointer"
                                    onClick={() => openModal(project)}
                                >
                                    {project.icon}
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md hover:bg-indigo-50 hover:text-indigo-700 transition-colors">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                                    <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <button
                                        onClick={() => openModal(project)}
                                        className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 text-left focus:outline-none"
                                    >
                                        View App Layout <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Image Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/90 backdrop-blur-sm animate-fade-in-up"
                    onClick={() => setSelectedProject(null)}
                    style={{ animationDuration: '0.2s', transform: 'none' }}
                >
                    <div
                        className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-w-6xl w-full flex flex-col"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-white">
                            <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                {selectedProject.title}
                                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded font-semibold ml-2">App Interface</span>
                            </h4>
                            <button
                                className="bg-slate-100 hover:bg-slate-200 text-slate-800 p-2 rounded-full transition-colors"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Image Container */}
                        <div className="relative group bg-slate-100 flex items-center justify-center min-h-[400px]">
                            <img
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                className="w-full h-auto object-contain max-h-[70vh]"
                            />

                            {/* Navigation arrows */}
                            {selectedProject.images.length > 1 && (
                                <>
                                    <button
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg backdrop-blur opacity-100 md:opacity-0 group-hover:opacity-100 transition-all focus:outline-none"
                                        onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                                    >
                                        <ArrowLeft size={24} />
                                    </button>
                                    <button
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg backdrop-blur opacity-100 md:opacity-0 group-hover:opacity-100 transition-all focus:outline-none"
                                        onClick={() => setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                                    >
                                        <ArrowRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Image Indicators */}
                        {selectedProject.images.length > 1 && (
                            <div className="flex justify-center gap-2 p-4 bg-white border-t border-slate-100">
                                {selectedProject.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-indigo-600 w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Writing Portfolio Section */}
            <section id="writing" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-bold text-xs uppercase tracking-wider mb-4">Content</span>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Published Articles & SEO Copy</h2>
                        <p className="text-slate-600 text-lg">Technical writing that educates developers while ranking seamlessly on modern search engines.</p>
                    </div>

                    <div className="space-y-6">
                        {articles.map((article) => (
                            <button
                                key={article.id}
                                onClick={() => setSelectedArticle(article)}
                                className="w-full text-left group block p-6 md:p-8 bg-white border border-slate-200 rounded-2xl hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5 transition-all focus:outline-none"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${article.category === 'Tech Trend' ? 'bg-sky-100 text-sky-700' : 'bg-emerald-100 text-emerald-700'}`}>{article.category}</span>
                                            <span className="text-slate-400 text-sm flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{article.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{article.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Article Modal Overlay */}
            {selectedArticle && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/90 backdrop-blur-[2px] animate-fade-in-up"
                    onClick={() => setSelectedArticle(null)}
                    style={{ animationDuration: '0.2s', transform: 'none' }}
                >
                    <div
                        className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col max-h-[85vh]"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white sticky top-0 z-10 shrink-0">
                            <h4 className="text-xl font-bold text-slate-800 pr-8 line-clamp-1">
                                {selectedArticle.title}
                            </h4>
                            <button
                                className="bg-slate-100 hover:bg-slate-200 text-slate-800 p-2 rounded-full transition-colors flex-shrink-0"
                                onClick={() => setSelectedArticle(null)}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Article Content Area */}
                        <div className="p-8 overflow-y-auto w-full">
                            <div className="max-w-3xl mx-auto">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${selectedArticle.category === 'Tech Trend' ? 'bg-sky-100 text-sky-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                        {selectedArticle.category}
                                    </span>
                                    <span className="text-slate-400 text-sm flex items-center gap-1"><Clock size={14} /> {selectedArticle.readTime}</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                                    {selectedArticle.title}
                                </h2>

                                <div className="prose prose-lg prose-indigo max-w-none prose-p:text-slate-600 prose-p:leading-relaxed">
                                    {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="mb-6">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Skills Section */}
            <section id="skills" className="py-24 bg-slate-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sky-400 font-bold text-xs uppercase tracking-wider mb-4">Expertise</span>
                        <h2 className="text-4xl font-extrabold mb-4">Technical Arsenal</h2>
                        <p className="text-slate-400 text-lg">The tools and technologies I use to build robust systems and compelling narratives.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all">
                            <Database className="text-sky-400 mb-6" size={40} strokeWidth={1.5} />
                            <h3 className="text-xl font-bold mb-3">Backend Engineering</h3>
                            <p className="text-slate-400 text-sm mb-6">Building secure, scalable, and efficient server-side architectures.</p>
                            <ul className="space-y-3">
                                {['PHP 8+', 'MySQL / Relational DBs', 'RESTful API Design', 'Secure Authentication'].map(skill => (
                                    <li key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check size={16} className="text-emerald-400" /> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all">
                            <Code className="text-indigo-400 mb-6" size={40} strokeWidth={1.5} />
                            <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
                            <p className="text-slate-400 text-sm mb-6">Crafting responsive, immersive user interfaces.</p>
                            <ul className="space-y-3">
                                {['React / Redux / Next.js', 'Three.js & WebGL', 'GSAP Animation', 'Tailwind CSS'].map(skill => (
                                    <li key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check size={16} className="text-emerald-400" /> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all">
                            <PenTool className="text-rose-400 mb-6" size={40} strokeWidth={1.5} />
                            <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
                            <p className="text-slate-400 text-sm mb-6">Creating optimized copy that ranks high and drives organic engagement.</p>
                            <ul className="space-y-3">
                                {['Technical Writing', 'On-Page SEO Optimization', 'Copywriting & Strategy', 'Keyword Research'].map(skill => (
                                    <li key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check size={16} className="text-emerald-400" /> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden grid lg:grid-cols-2">
                        <div className="bg-slate-900 p-10 md:p-16 relative overflow-hidden flex flex-col justify-center text-white">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
                            <div className="relative z-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sky-300 font-bold text-xs uppercase tracking-wider mb-6">Get in Touch</span>
                                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Let's build something extraordinary.</h2>
                                <p className="text-slate-400 text-lg mb-12">Whether you need a full-scale web application, technical documentation, or optimized articles, I'm here to bring your ideas to life.</p>
                                <div className="space-y-6 mb-12">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sky-400 shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Email</p>
                                            <p className="text-lg font-semibold">rushi.sharma@example.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sky-400 shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Location</p>
                                            <p className="text-lg font-semibold">Available remotely worldwide</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    {[Github, Linkedin, Twitter].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:p-16 bg-white flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all" placeholder="How can I help you?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all resize-none" placeholder="Tell me about your project goals and timeline..."></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <a href="#" className="text-xl font-extrabold text-slate-900">
                        Rushi<span className="text-indigo-600">.</span>
                    </a>
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; 2026 Rushi Sharma. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
