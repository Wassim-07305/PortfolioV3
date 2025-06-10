import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Mail, MapPin, Zap } from 'lucide-react';

interface HeroProps {
    readonly data?: typeof portfolioData;
}

export default function Hero({ data = portfolioData }: Readonly<HeroProps>) {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center bg-card/50 py-20 md:py-32"
        >
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Photo Profil */}
                {/* Photo Profil responsive */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto md:mx-0">
                    <Image
                        src={data.photoUrl}
                        alt={`Photo de ${data.name}`}
                        fill
                        className="object-cover shadow-lg rounded-xl"
                        sizes="(max-width: 768px) 16rem, (max-width: 1024px) 18rem, 24rem"
                    />
                </div>



                {/* Texte d'accueil */}
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-fade-in-up">
                        {data.name}
                    </h1>
                    <p className="text-2xl md:text-3xl text-text-secondary animate-fade-in-up delay-200">
                        {data.title}
                    </p>
                    <p className="max-w-lg mx-auto md:mx-0 text-lg text-text-secondary animate-fade-in-up delay-400">
                        {data.specialization} {data.intro}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-text-secondary animate-fade-in-up delay-600">
                        {data.mainStack.map((item) => (
                            <span
                                key={item}
                                className="bg-primary/20 text-primary px-3 py-1 rounded-full hover:bg-primary/30 transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mt-6 animate-fade-in-up delay-800">
                        <a
                            href={`mailto:${data.contactEmail}`}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Mail size={20} /> Me Contacter
                        </a>
                        <div className="flex items-center text-sm text-text-secondary gap-1">
                            <MapPin size={16} className="text-primary" />
                            {data.location}
                        </div>
                    </div>

                    {/* Slogan */}
                    <p className="text-sm text-primary font-semibold flex items-center justify-center md:justify-start gap-2 mt-4 animate-fade-in-up delay-1000">
                        <Zap size={18} className="animate-pulse" /> {data.contactSlogan}
                    </p>
                </div>
            </div>
        </section>
    );
}
