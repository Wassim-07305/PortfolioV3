'use client';

import { portfolioData } from '@/lib/data';
import { TestTube, Star, Briefcase, Flag, Sparkles, Rocket, Target } from 'lucide-react';

interface OtherProps {
    data: typeof portfolioData.otherProjects;
}

export default function Other({ data }: OtherProps) {
    return (
        <section id="other" className="py-16 md:py-24 from-background via-primary/5 to-secondary/10 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header avec style moderne */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-6">
                        <TestTube size={28} className="text-primary animate-bounce" />
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                            Autres Projets & Initiatives
                        </span>
                        <Sparkles size={24} className="text-secondary animate-pulse" />
                    </div>
                    <p className="text-lg text-text-secondary/80 max-w-3xl mx-auto">
                        Découvrez mes autres réalisations et initiatives entrepreneuriales
                    </p>
                </div>

                {/* Grid avec cards modernes */}
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Card Projets Notables */}
                    <div className="group relative">
                        <div className="absolute inset-0 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">

                            {/* Header de la card */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    <Star size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold bg-primary bg-clip-text text-transparent">
                                        {data.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></div>
                                </div>
                            </div>

                            {/* Liste des projets */}
                            <div className="space-y-4">
                                {data.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-102"
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            animation: 'slideInLeft 0.6s ease-out forwards'
                                        }}
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <Briefcase size={18} className="text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-text-secondary leading-relaxed hover:text-text-primary transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card Fondateur */}
                    <div className="group relative">
                        <div className="absolute inset-0 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 h-full">

                            {/* Header de la card */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    <Flag size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                        {data.founder.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mt-2"></div>
                                </div>
                            </div>

                            {/* Description avec styling moderne */}
                            <div className="relative">
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-primary rounded-full"></div>
                                <p className="text-lg text-text-secondary/90 leading-relaxed pl-8 relative">
                                    {data.founder.description}
                                </p>
                            </div>

                            {/* Icônes décoratives */}
                            <div className="flex justify-end mt-8 gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                                    <Rocket size={20} className="text-secondary" />
                                </div>
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                    <Target size={20} className="text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .hover\\:scale-102:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
}