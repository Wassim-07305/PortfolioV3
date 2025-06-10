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

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary hover:text-secondary font-semibold group mt-4"
                                >
                                    Voir le projet
                                    <ArrowUpRight size={20} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}