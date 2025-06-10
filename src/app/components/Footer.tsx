interface FooterProps {
    data: {
        name: string;
        email: string;
    };
}

export default function Footer({ data }: FooterProps) {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-card text-center py-8 mt-auto">
            <div className="container mx-auto px-6">
                <p className="text-text-secondary text-sm">
                    &copy; {currentYear} {data.name}. Tous droits réservés.
                </p>
                <p className="text-text-secondary text-sm mt-1">
                    Contact : <a href={`mailto:${data.email}`} className="text-primary hover:text-secondary">{data.email}</a>
                </p>
                <p className="text-xs text-gray-500 mt-4">
                    Fait avec <span className="text-red-500">❤️</span> et Next.js + TailwindCSS
                </p>
            </div>
        </footer>
    );
}