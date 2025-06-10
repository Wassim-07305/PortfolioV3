'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Home,
    User,
    Wrench,
    Folder,
    GraduationCap,
    TestTube,
    FileText,
    Linkedin,
    Github,
    X,
    Menu,
} from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sections = [
        { label: 'Accueil', href: '#hero', icon: <Home size={20} className="text-text-secondary" /> },
        { label: 'À propos', href: '#about', icon: <User size={20} className="text-text-secondary" /> },
        { label: 'Compétences', href: '#skills', icon: <Wrench size={20} className="text-text-secondary" /> },
        { label: 'Projets', href: '#projects', icon: <Folder size={20} className="text-text-secondary" /> },
        { label: 'Formation', href: '#education', icon: <GraduationCap size={20} className="text-text-secondary" /> },
        { label: 'Autres', href: '#other', icon: <TestTube size={20} className="text-text-secondary" /> },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-card/70 backdrop-blur-md z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="#hero" className="flex items-center text-xl font-bold text-primary gap-2">
                    <Home size={24} />
                    Wassim Ahmane
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {sections.map(({ label, href, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {icon}
                            <span>{label}</span>
                        </Link>
                    ))}

                    <Link
                        href="/WassimAhmane_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors"
                    >
                        <FileText size={20} />
                        <span>CV</span>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/wassim-ahmane"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </Link>

                    <Link
                        href="https://github.com/Wassim-06"  // remplace par ton lien GitHub
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </Link>
                </div>

                {/* Mobile Burger Button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} className="text-text-secondary" /> : <Menu size={24} className="text-text-secondary" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-card/90 backdrop-blur p-6">
                    {sections.map(({ label, href, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center py-2 space-x-2 text-text-secondary hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {icon}
                            <span>{label}</span>
                        </Link>
                    ))}

                    <Link
                        href="/WassimAhmane_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center py-2 space-x-2 text-text-secondary hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <FileText size={20} />
                        <span>CV</span>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/wassim-ahmane"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center py-2 space-x-2 text-text-secondary hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </Link>

                    <Link
                        href="https://github.com/Wassim-06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center py-2 space-x-2 text-text-secondary hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </Link>
                </div>
            )}
        </nav>
    );
}
