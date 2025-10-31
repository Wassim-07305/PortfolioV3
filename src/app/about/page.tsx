import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* About Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px]">
            <div className="absolute bottom-[-668px] left-1/2 -translate-x-1/2 w-full h-[955px] rounded-[100%] bg-gradient-to-t from-white via-white/50 to-transparent opacity-10"></div>
            <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-white/30 blur-[100px] rounded-full"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-[720px] w-full">
          {/* Profile Picture */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10">
            <Image src="/NewPhoto.png" alt="Wassim Ahmane" width={96} height={96} className="w-full h-full object-cover" />
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a href="https://www.instagram.com/wassim.builds/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width={20} height={20} className="w-5 h-5" />
              <span className="text-sm font-medium">@wassim.builds</span>
            </a>
            <a href="https://www.linkedin.com/in/wassim-ahmane/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width={20} height={20} className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Wassim Ahmane</span>
              <span className="text-sm font-medium sm:hidden">Wassim</span>
            </a>
            <a href="https://www.youtube.com/@wassim.builds" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" width={20} height={20} className="w-5 h-5" />
              <span className="text-sm font-medium">@wassim.builds</span>
            </a>
            <a href="https://www.tiktok.com/@wassim.builds" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200">
              <Image src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" width={20} height={20} className="w-5 h-5" />
              <span className="text-sm font-medium">@wassim.builds</span>
            </a>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center gap-6 text-center mt-8 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic leading-[110%] text-[#f0f0f0]">
              À propos de Wassim
            </h1>
            
            {/* About Content */}
            <div className="w-full max-w-[600px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Passionné par la création d&apos;applications qui facilitent le quotidien, je transforme des idées innovantes en produits concrets. 
                Mon objectif est de développer des solutions numériques qui ont un impact réel sur la vie des utilisateurs.
                <br /><br />
                Avec DressCode, je révolutionne la manière dont les gens gèrent leur garde-robe. 
                Je partage également mon parcours et mes connaissances à travers mes réseaux sociaux pour inspirer d&apos;autres créateurs.
                <br /><br />
                Toujours à la recherche de nouveaux défis, j&apos;aime explorer les dernières technologies et les intégrer dans mes projets pour créer des expériences utilisateur exceptionnelles.
              </p>
            </div>

            {/* Home Button */}
            <Link href="/" className="flex items-center justify-center px-6 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200 text-sm font-medium">
              home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
