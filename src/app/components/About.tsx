'use client';

import React from 'react';
import { UserRound, Zap, Code, BrainCircuit } from 'lucide-react';
import { portfolioData } from '@/lib/data';

const icons: { [key: string]: React.ReactNode } = {
    zap: <Zap size={24} className="text-primary" />,
    code: <Code size={24} className="text-primary" />,
    'brain-circuit': <BrainCircuit size={24} className="text-primary" />
};

interface AboutProps {
    data: typeof portfolioData.about;
}

export default function About({ data }: AboutProps) {
    return (
        <section id="about" className="pt-8 md:pt-12 pb-20 md:pb-28 bg-gradient-to-br from-background via-card/30 to-primary/5">
            <div className="container mx-auto px-6">
                {/* Header avec effet glassmorphism */}

                {/* Contenu principal avec layout moderne */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Parcours - Carte principale */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                    <UserRound size={24} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-primary bg-clip-text text-transparent">
                                    Mon Parcours
                                </h3>
                            </div>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-text-secondary/90 leading-relaxed text-lg whitespace-pre-line">
                                    {data.story}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Principes - Cards empilées */}
                    <div className="space-y-6">
                        <div className="text-center lg:text-left mb-8">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                                Mes Principes
                            </h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto lg:mx-0"></div>
                        </div>

                        {data.principles.map((principle, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:scale-105"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                                        {icons[principle.iconId]}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg text-text-primary mb-2 group-hover:text-primary transition-colors">
                                            {principle.title}
                                        </h4>
                                        <p className="text-text-secondary/80 text-sm leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Élément décoratif */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}