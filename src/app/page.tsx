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
            <a href="https://www.tiktok.com/@wassim.builds" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md hover:bg-white/12 transition-all duration-200">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/640px-Tiktok_icon.svg.png" alt="TikTok" width={20} height={20} className="w-5 h-5" />
              <span className="text-sm font-medium">@wassim.builds</span>
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
            <div className="group relative w-full rounded-xl overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 backdrop-blur-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Image src="/Logo1.png" alt="DressCode" width={48} height={48} className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-xl font-bold">DressCode</span>
                  <span className="text-sm text-white/70 mt-1">L&apos;app qui révolutionne ta garde-robe</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a href="https://apps.apple.com/fr/app/dresscode-styliste-ia/id6754649138" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black/60 hover:bg-black/80 text-white font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-2xl border-2 border-white/20 hover:border-white/40 hover:scale-105 flex-1 backdrop-blur-sm">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </a>
                <a href="https://www.mydresscode.app/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-2xl border-2 border-green-400/50 hover:border-green-300 hover:scale-105 flex-1">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5506 0 .9986.4482.9986.9993.0001.5511-.4479.9997-.9986.9997m-11.0055-.0003c-.5511 0-.9993-.449-.9993-1 0-.5511.4482-.9993.9993-.9993.5506 0 .9986.4482.9986.9993 0 .551-.448.9997-.9986.9997m11.4358-3.2118l-1.9974-3.4592a.416.416 0 00-.1521-.1634.416.416 0 00-.1936-.0515c-.0499 0-.0997.0148-.1489.0442l-2.1531 1.2438a11.9123 11.9123 0 00-2.3828-1.3515l-.0369-2.4849a.412.412 0 00-.1235-.2928.416.416 0 00-.2933-.1235l-3.4593.002a.4147.4147 0 00-.3272.1705.416.416 0 00-.0943.3615l1.2437 2.1531c-.7443.4441-1.4328.9889-2.0552 1.6145l-2.1531-1.2438a.416.416 0 00-.1936-.0515c-.05 0-.0997.0148-.1489.0442l-1.9974 3.4592a.416.416 0 00.0442.5937l1.8722 1.0808c-.0599.495-.0599 1.0002 0 1.4952l-1.8722 1.0809a.4159.4159 0 00-.0442.5937l1.9974 3.4592a.416.416 0 00.5937.0442l1.8722-1.0808c.6224.6256 1.3109 1.1704 2.0552 1.6145l-1.2437 2.1531a.416.416 0 00.0943.3615c.09.1559.2527.2464.4229.2464l3.4593-.002a.416.416 0 00.4168-.4168l.0369-2.4849c.8499-.3011 1.6648-.6992 2.3828-1.3515l2.1531 1.2438a.416.416 0 00.5937-.0442l1.9974-3.4592a.416.416 0 00-.0442-.5937l-1.8722-1.0808c.0599-.495.0599-1.0002 0-1.4952l1.8722-1.0809a.416.416 0 00.0442-.5936m-.7048 1.0808l1.6682.9629.9629 1.6682-1.6682.9629-1.2515 2.1685-.9629-1.6682a10.2667 10.2667 0 01-1.2515.7225l-.4815 1.6682H9.5732l-.4815-1.6682a10.636 10.636 0 01-1.2515-.7225l-.9629 1.6682-1.2515-2.1685-1.6682-.9629 1.6682-.9629-1.2515-2.1685.9629-1.6682c.4199-.2425.8638-.4491 1.2515-.7225l.4815-1.6682h2.8365l.4815 1.6682c.3877.2734.8316.48 1.2515.7225l.9629 1.6682 1.2515 2.1685z"/>
                  </svg>
                  <span>Web / Android</span>
                </a>
              </div>
            </div>
            
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