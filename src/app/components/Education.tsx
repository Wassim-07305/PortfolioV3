'use client';

import { portfolioData } from '@/lib/data';
import { BookOpen, GraduationCap, Award, Calendar, ShieldCheck, School } from 'lucide-react';

interface EducationProps {
    readonly data: typeof portfolioData.education;
}

export default function Education({ data }: Readonly<EducationProps>) {
    return (
        <section id="education" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="section-title flex items-center justify-center gap-3 mb-12 md:mb-16">
                    <GraduationCap size={32} className="text-primary" />
                    Formation & Certifications
                </h2>

                {/* Conteneur de la timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* La ligne verticale de la timeline */}
                    <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-card -translate-x-1/2"></div>

                    {/* Étape 1: Diplôme */}
                    <div className="relative mb-16">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 border-4 border-background"></div>
                        <div className="pl-10 md:pl-0">
                            <div className="md:ml-[58%] bg-card p-6 rounded-lg shadow-xl card-hover border-l-4 border-secondary">
                                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                                    <BookOpen size={22} />
                                    {data.degree}
                                </h3>
                                <p className="text-text-secondary mb-4">{data.details}</p>
                                <div className="flex justify-between items-center text-sm text-text-secondary border-t border-primary/20 pt-3">
                                    <span className="flex items-center gap-2">
                                        <School size={16} className="text-primary" /> CNED
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary" /> 2023 – 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Étape 2: Certifications */}
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 border-4 border-background"></div>
                        <div className="pl-10 md:pl-0">
                            <div className="md:mr-[58%] text-right md:text-left">
                                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center md:justify-end gap-2 md:pr-8">
                                    <ShieldCheck size={24} />
                                    Certifications Vérifiées
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                                    {data.certifications.map((cert, index) => (
                                        <div
                                            key={index}
                                            className="bg-card p-4 rounded-lg shadow-lg card-hover group transition-all duration-300 hover:border-primary border-l-4 border-transparent"
                                        >
                                            <h4 className="text-md font-semibold text-secondary flex items-center gap-2">
                                                <Award size={18} className="text-primary group-hover:text-secondary transition-colors" />
                                                {cert.name}
                                            </h4>
                                            <div className="text-xs text-text-secondary mt-2 flex justify-between">
                                                <span>{cert.provider}</span>
                                                <span>{cert.year}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}