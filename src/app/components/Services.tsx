import { portfolioData } from '@/lib/data';
import { Monitor, Server, Zap, Star } from 'lucide-react';

interface ServicesProps {
    data: typeof portfolioData.services;
}

// Mapping des clés de service à une icône
const iconMap: Record<string, React.ReactNode> = {
    frontend: <Monitor size={24} className="text-primary" />,
    backend: <Server size={24} className="text-primary" />,
    integrations: <Zap size={24} className="text-primary" />,
    bonus: <Star size={24} className="text-primary" />
};

export default function Services({ data }: ServicesProps) {
    const entries = Object.entries(data) as [keyof typeof data, typeof data[keyof typeof data]][];

    return (
        <section id="services" className="py-16 md:py-24 bg-card/50">
            <div className="container mx-auto px-6">
                <h2 className="section-title flex items-center justify-center gap-2">
                    {iconMap['frontend'] /* Icône principale */}
                    Services proposés
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {entries.map(([key, service], index) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-lg card-hover">
                            <h3 className="text-2xl font-semibold text-secondary mb-3 flex items-center gap-2">
                                {iconMap[key]}
                                {service.title}
                            </h3>
                            <p className="text-text-secondary">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
