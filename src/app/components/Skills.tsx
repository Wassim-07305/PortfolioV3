import { portfolioData } from '@/lib/data';
import { Wrench, Key, Cpu, Database, FigmaIcon, GitFork, Layers, CheckCircle } from 'lucide-react';

interface SkillsProps {
    data: typeof portfolioData.skills;
}

// Composant pour une catégorie de compétence, maintenant avec un style amélioré
const SkillCategory: React.FC<{ title: string; skills: string[]; icon?: React.ReactNode }> = ({ title, skills, icon }) => (
    <div className="bg-card p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-secondary">
                {title}
            </h3>
        </div>
        <ul className="space-y-3">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center text-text-secondary group">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span>{skill}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default function Skills({ data }: SkillsProps) {
    return (
        <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-card/50 to-background">
            <div className="container mx-auto px-6">
                {/* Titre de la section amélioré */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-text-primary mb-3 flex items-center justify-center gap-3">
                        <Wrench size={32} className="text-primary" />
                        Mes Compétences
                    </h2>
                </div>

                {/* Section des compétences clés */}
                <div className="mb-16">
                    <div className="flex flex-wrap justify-center gap-4">
                        {data.key.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-secondary text-white text-base font-semibold px-5 py-2.5 rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Utilisation du composant SkillCategory stylisé */}
                    <SkillCategory title="Back-End" skills={data.backend} icon={<Cpu size={24} className="text-primary" />} />
                    <SkillCategory title="Bases de données" skills={data.databases} icon={<Database size={24} className="text-primary" />} />
                    <SkillCategory title="DevOps / CI/CD" skills={data.devops} icon={<GitFork size={24} className="text-primary" />} />
                    <SkillCategory title="API / Intégration" skills={data.apiIntegration} icon={<Layers size={24} className="text-primary" />} />
                    <SkillCategory title="UI / UX" skills={data.uiUx} icon={<FigmaIcon size={24} className="text-primary" />} />
                    <SkillCategory title="Méthodes" skills={data.methods} icon={<Key size={24} className="text-primary" />} />
                </div>
            </div>
        </section>
    );
}