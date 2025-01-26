import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'Sobre Nós' },
        { id: 'services', label: 'Serviços' },
        { id: 'ask', label: 'Frequentes' },
        { id: 'contact', label: 'Contato' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Ajuste para compensar o topo
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false); // Fecha o menu no mobile após o clique
        }
    };

    return (
        <>
            {/* DESKTOP */}
            <nav className="hidden lg:block">
                <ul className="flex gap-8 text-white uppercase font-light text-lg">
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            className={`cursor-pointer ${
                                activeSection === section.id ? 'font-semibold text-blue-500' : ''
                            }`}
                            onClick={() => scrollToSection(section.id)}
                        >
                            {section.label}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* MOBILE */}
            <nav className="lg:hidden">
                <div className="flex justify-between items-center p-4">
                    <button
                        className="flex flex-col gap-2 z-30"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6 text-BlueP" />
                        ) : (
                            <FaBars className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>

                <div
                    className={`fixed top-0 left-0 w-full h-full bg-white z-20 text-center text-BlueP uppercase font-Josefin font-light text-lg ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <ul className="flex flex-col justify-center gap-y-10 h-full">
                        {sections.map((section) => (
                            <li
                                key={section.id}
                                className={`cursor-pointer py-2 ${
                                    activeSection === section.id ? 'font-semibold text-blue-500' : ''
                                }`}
                                onClick={() => scrollToSection(section.id)}
                            >
                                {section.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
