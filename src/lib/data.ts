// src/lib/data.ts

export const portfolioData = {
    name: "Wassim Ahmane",
    title: "Développeur Web Full-Stack",
    specialization: "Spécialisé en React.js, Next.js et TypeScript.",
    intro: "Je conçois des applications web modernes, scalables, avec une UX soignée et une architecture propre, de l’idée au déploiement.",
    mainStack: ["React.js", "Next.js", "TypeScript", "Node.js", "JavaScript", "MongoDB"],
    methodologies: ["Git", "CI/CD", "Docker", "Clean Architecture", "API REST", "Responsive Design", "Agile/Scrum"],
    uiUxTools: ["TailwindCSS", "Bootstrap", "Figma"],
    location: "Marseille (France) – Travail à distance ou sur site",
    contactEmail: "ahmanewassim6@gmail.com",
    contactSlogan: "Réponse garantie en moins d’une heure – Disponible 7j/7",
    photoUrl: "/profile.png",
    about: {
        introduction: "Passionné par la création de solutions numériques innovantes, je suis un développeur full-stack avec une forte appétence pour les architectures back-end robustes et les expériences utilisateur fluides. Mon objectif est de transformer des idées complexes en applications performantes, intuitives et scalables.",
        story: "Mon parcours a débuté avec une curiosité pour le fonctionnement interne des applications que j'utilisais au quotidien. Cette curiosité s'est rapidement transformée en une véritable passion pour le code et la résolution de problèmes. Aujourd'hui, je m'épanouis en collaborant avec des équipes pour construire des produits qui apportent une réelle valeur ajoutée. J'aime me tenir à jour des dernières avancées technologiques pour proposer des solutions toujours plus efficaces.",
        principles: [
            {
                iconId: "zap", // Identifiant pour l'icône
                title: "Approche orientée utilisateur",
                description: "Je place l'utilisateur final au centre de ma réflexion pour garantir des produits utiles et agréables à utiliser."
            },
            {
                iconId: "code",
                title: "Qualité et maintenabilité du code",
                description: "J'écris un code propre, bien documenté et testé, convaincu que c'est la clé de la pérennité d'un projet."
            },
            {
                iconId: "brain-circuit",
                title: "Apprentissage continu",
                description: "L'écosystème technologique évolue sans cesse. Je consacre du temps à la veille et à l'expérimentation pour rester pertinent."
            }
        ]
    },


    skills: {
        key: ["React.js", "JavaScript", "TypeScript", "Next.js", "Node.js"],
        backend: ["Laravel", "PHP", "Express.js", "Symfony", ".NET"],
        databases: ["MySQL", "MongoDB", "MariaDB", "Firebase Realtime DB"],
        devops: ["GitHub Actions", "Docker", "Vercel", "Render"],
        apiIntegration: ["API REST", "OpenAI", "OCRspace", "Stripe", "Firebase Auth"],
        uiUx: ["TailwindCSS", "Bootstrap", "Figma"],
        methods: ["Clean Architecture", "Agile/Scrum", "Responsive Design"]
    },

    projects: [
        {
            id: "dresscode",
            title: "DressCode",
            tech: ["React.js", "Firebase", "OpenAI"],
            description: "Une app web intelligente pour générer des tenues avec IA à partir de sa garde-robe.",
            features: [
                "Génération de looks avec GPT-4",
                "Interface responsive (TailwindCSS)",
                "Stockage Firebase Realtime DB",
                "Authentification Firebase",
                "Déploiement CI/CD (Vercel)"
            ],
            link: "https://dress-code-peach.vercel.app",
            imageUrl: "/Dresscode.png"
        },
        {
            id: "eventconnect",
            title: "EventConnect",
            tech: ["Next.js 14", "Prisma", "MongoDB"],
            description: "Plateforme Full-Stack pour gérer des événements.",
            features: [
                "Authentification JWT sécurisée",
                "Création / édition / suppression d'événements (CRUD)",
                "Dashboard avec graphiques (Recharts)",
                "Architecture modulaire (API Routes, Services, Utils…)",
                "UI moderne (TailwindCSS + composants Lucide/Geist)",
                "Déploiement full-stack sur Vercel"
            ],
            link: "https://eventconnect-pink.vercel.app/",
            imageUrl: "/Eventconnect.png"
        },
        {
            id: "karrosserie",
            title: "Karrosserie",
            tech: ["Laravel", "MySQL", "OpenAI"],
            description: "App de gestion pour réseaux de carrosseries.",
            features: [
                "CRUD agents + gestion de véhicules",
                "Signature tactile (SignaturePad.js)",
                "Extraction de données via OpenAI + OCRspace",
                "Refonte UI (Bootstrap + Figma)",
                "–40 % de temps de saisie grâce à l’optimisation"
            ],
            link: "https://karrosserie.pro/",
            imageUrl: "/Karrosserie.png"
        }
    ],

    services: {
        frontend: {
            title: "Front-End",
            description: "React.js / Next.js / TypeScript / TailwindCSS. Intégration Figma. UI modernes & responsive. Animations / transitions."
        },
        backend: {
            title: "Back-End & Full-Stack",
            description: "Laravel / PHP / Node.js / Express. API REST, gestion utilisateurs, dashboards. Bases de données : MySQL, MongoDB, Firebase."
        },
        integrations: {
            title: "Intégrations & automatisations",
            description: "APIs externes : OpenAI, OCRspace, Stripe. Authentification Firebase, gestion de rôles. Automatisation de flux de données."
        },
        bonus: {
            title: "Bonus",
            description: "Architecture scalable. Clean Code + Clean Architecture. CI/CD automatisé (GitHub Actions). Projets jusqu’à 10k+ lignes de code maintenus."
        }
    },

    education: {
        degree: "BTS SIO (SLAM) – CNED (2023–2025)",
        details: "Développement Web Full-Stack : PHP, Symfony, .NET, intégration API, CI/CD, Responsive, etc.",
        certifications: [
            { name: "TypeScript", provider: "Udemy", year: 2024 },
            { name: "React.js / TailwindCSS / Firebase", provider: "Udemy", year: 2023 },
            { name: "SaaS & Next.js", provider: "Udemy", year: 2023 },
            { name: "Développeur TypeScript", provider: "Vercel", year: 2024 }
        ]
    },

    otherProjects: {
        title: "Autres projets notables",
        items: [
            "Symfony : back-office de plateforme e-learning",
            ".NET 7 : API REST de gestion de commandes",
            "Freelance : +4 projets livrés (React, Symfony, Laravel)"
        ],
        founder: {
            title: "Fondateur de LaunchMySaaS (depuis mai 2025)",
            description: "J’aide les créateurs à lancer leur MVP SaaS proprement en moins de 90 jours, avec intégration IA et architecture solide."
        }
    }
};