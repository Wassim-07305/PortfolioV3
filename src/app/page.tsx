import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px]">
            <div className="absolute bottom-[-668px] left-1/2 -translate-x-1/2 w-full h-[955px] rounded-[100%] bg-gradient-to-t from-white via-white/50 to-transparent opacity-10"></div>
            <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-white/30 blur-[100px] rounded-full"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-[620px] w-full">
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
            <a href="https://www.tiktok.com/@wassim.aiops" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/640px-Tiktok_icon.svg.png" alt="TikTok" width={20} height={20} className="w-5 h-5" />
              <span className="text-sm font-medium">@wassim.aiops</span>
            </a>
          </div>

          {/* Main Heading */}
          <div className="flex flex-col items-center gap-4 text-center mt-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic leading-[110%] text-[#f0f0f0]">
              Je crée des apps qui simplifient la vie
            </h1>
            <Link href="/about" className="flex items-center justify-center px-6 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200 text-sm font-medium">
              about me
            </Link>
          </div>

          {/* Project Links */}
          <div className="flex flex-col gap-4 w-full max-w-[500px] mt-8">
            <a href="https://www.mydresscode.app/" target="_blank" rel="noopener noreferrer"
               className="group relative w-full rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-200 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 backdrop-blur-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Image src="/Logo1.png" alt="DressCode" width={48} height={48} className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-xl font-bold">DressCode</span>
                  <span className="text-sm text-white/70 mt-1">L&apos;app qui révolutionne ta garde-robe</span>
                </div>
              </div>
            </a>
            
            <a href="https://discord.gg/fjmwCwH2jM" target="_blank" rel="noopener noreferrer"
               className="group relative w-full rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-200 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 border border-white/10 backdrop-blur-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Image src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" width={48} height={48} className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-xl font-bold">Rejoins la communauté Discord</span>
                  <span className="text-sm text-white/70 mt-1">Connecte-toi avec d&apos;autres créateurs</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}