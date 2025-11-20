'use client';

import React from 'react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import { Folder, Check, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
    data: typeof portfolioData.projects;
}

export default function Projects({ data }: ProjectsProps) {
    return (
        <section id="projects" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="section-title flex items-center justify-center gap-3 mb-12 md:mb-16">
                    <Folder size={32} className="text-primary" />
                    Projets & Réalisations
                </h2>

                {/* Conteneur pour la liste des projets */}
                <div className="space-y-16 md:space-y-24">
                    {data.map((project, index) => (
                        // On utilise la balise <article> pour la sémantique
                        <article
                            key={project.id}
                            className={`
                                flex flex-col md:flex-row items-center gap-8 md:gap-12 
                                bg-card rounded-xl shadow-2xl card-hover overflow-hidden
                                ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} 
                            `}
                        // La classe md:flex-row-reverse est appliquée aux projets impairs (le 2ème, 4ème, etc.)
                        >
                            {/* Colonne de l'image */}
                            <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                                <Image
                                    src={project.imageUrl || '/images/placeholder.png'} // Fallback si l'image n'est pas définie
                                    alt={`Capture d'écran du projet ${project.title}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Colonne du texte */}
                            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                <div className="mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tag">{tech}</span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold text-secondary mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary mb-6 text-base leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Si vous avez une liste de features, vous pouvez la remettre ici */}
                                {project.features && (
                                    <ul className="space-y-2 mb-6 text-sm">
                                        {project.features.slice(0, 3).map((feature, i) => ( // Affiche les 3 premières features
                                            <li key={i} className="flex items-start text-text-secondary">
                                                <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {project.id === 'dresscode' ? (
                                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                        <a
                                            href="/app-store?id=6754649138"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-700 hover:scale-105"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                            </svg>
                                            <span>App Store</span>
                                        </a>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl border border-green-500 hover:scale-105"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5506 0 .9986.4482.9986.9993.0001.5511-.4479.9997-.9986.9997m-11.0055-.0003c-.5511 0-.9993-.449-.9993-1 0-.5511.4482-.9993.9993-.9993.5506 0 .9986.4482.9986.9993 0 .551-.448.9997-.9986.9997m11.4358-3.2118l-1.9974-3.4592a.416.416 0 00-.1521-.1634.416.416 0 00-.1936-.0515c-.0499 0-.0997.0148-.1489.0442l-2.1531 1.2438a11.9123 11.9123 0 00-2.3828-1.3515l-.0369-2.4849a.412.412 0 00-.1235-.2928.416.416 0 00-.2933-.1235l-3.4593.002a.4147.4147 0 00-.3272.1705.416.416 0 00-.0943.3615l1.2437 2.1531c-.7443.4441-1.4328.9889-2.0552 1.6145l-2.1531-1.2438a.416.416 0 00-.1936-.0515c-.05 0-.0997.0148-.1489.0442l-1.9974 3.4592a.416.416 0 00.0442.5937l1.8722 1.0808c-.0599.495-.0599 1.0002 0 1.4952l-1.8722 1.0809a.4159.4159 0 00-.0442.5937l1.9974 3.4592a.416.416 0 00.5937.0442l1.8722-1.0808c.6224.6256 1.3109 1.1704 2.0552 1.6145l-1.2437 2.1531a.416.416 0 00.0943.3615c.09.1559.2527.2464.4229.2464l3.4593-.002a.416.416 0 00.4168-.4168l.0369-2.4849c.8499-.3011 1.6648-.6992 2.3828-1.3515l2.1531 1.2438a.416.416 0 00.5937-.0442l1.9974-3.4592a.416.416 0 00-.0442-.5937l-1.8722-1.0808c.0599-.495.0599-1.0002 0-1.4952l1.8722-1.0809a.416.416 0 00.0442-.5936m-.7048 1.0808l1.6682.9629.9629 1.6682-1.6682.9629-1.2515 2.1685-.9629-1.6682a10.2667 10.2667 0 01-1.2515.7225l-.4815 1.6682H9.5732l-.4815-1.6682a10.636 10.636 0 01-1.2515-.7225l-.9629 1.6682-1.2515-2.1685-1.6682-.9629 1.6682-.9629-1.2515-2.1685.9629-1.6682c.4199-.2425.8638-.4491 1.2515-.7225l.4815-1.6682h2.8365l.4815 1.6682c.3877.2734.8316.48 1.2515.7225l.9629 1.6682 1.2515 2.1685z"/>
                                            </svg>
                                            <span>Web / Android</span>
                                        </a>
                                    </div>
                                ) : (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary hover:text-secondary font-semibold group mt-4"
                                    >
                                        Voir le projet
                                        <ArrowUpRight size={20} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}