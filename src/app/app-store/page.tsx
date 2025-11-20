'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function AppStoreRedirectContent() {
  const searchParams = useSearchParams();
  const appId = searchParams.get('id') || '6754649138';
  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<'tiktok' | 'ios' | 'other'>('other');
  const [showInstructions, setShowInstructions] = useState(false);

  const appStoreUrl = `https://apps.apple.com/app/id${appId}`;

  useEffect(() => {
    const windowWithExtras = window as Window & { opera?: string; MSStream?: unknown };
    const userAgent = navigator.userAgent || navigator.vendor || windowWithExtras.opera || '';
    const isTikTok = /tiktok/i.test(userAgent) || /musical_ly/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !windowWithExtras.MSStream;

    if (isTikTok) {
      setPlatform('tiktok');
      setShowInstructions(true);
      
      // Pour TikTok, on essaie de forcer l'ouverture dans Safari
      // Technique 1 : Utiliser le schéma Safari sur iOS
      if (isIOS) {
        // Créer un lien avec le schéma Safari
        const safariUrl = `x-safari-https://${appStoreUrl.replace('https://', '')}`;
        
        // Tentative immédiate avec Safari schema
        setTimeout(() => {
          try {
            window.location.href = safariUrl;
          } catch {
            // Si ça échoue, on continue avec les autres méthodes
          }
        }, 100);
      }
    } else if (isIOS) {
      setPlatform('ios');
      // Pour iOS normal, redirection directe
      window.location.href = appStoreUrl;
    } else {
      setPlatform('other');
      // Pour les autres plateformes, redirection normale
      window.location.href = appStoreUrl;
    }
  }, [appStoreUrl]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(appStoreUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = appStoreUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const openInSafari = () => {
    // Technique pour forcer l'ouverture dans Safari sur iOS depuis TikTok
    const windowWithExtras = window as Window & { opera?: string; MSStream?: unknown };
    const userAgent = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !windowWithExtras.MSStream;
    
    if (isIOS) {
      // Essayer plusieurs méthodes pour ouvrir dans Safari
      try {
        // Méthode 1 : Schéma Safari
        window.location.href = `x-safari-https://apps.apple.com/app/id${appId}`;
      } catch {
        try {
          // Méthode 2 : window.open avec target spécial
          const newWindow = window.open(appStoreUrl, '_system');
          if (!newWindow) {
            // Si bloqué, copier le lien
            copyLink();
          }
        } catch {
          copyLink();
        }
      }
    } else {
      // Sur Android, essayer d'ouvrir dans le navigateur par défaut
      try {
        window.location.href = `intent://apps.apple.com/app/id${appId}#Intent;scheme=https;action=android.intent.action.VIEW;end`;
      } catch {
        window.location.href = appStoreUrl;
      }
    }
  };

  if (platform === 'tiktok' && showInstructions) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-8">
        <div className="text-center max-w-lg w-full space-y-6">
          {/* Icône TikTok */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-2">Ouvrez dans Safari</h1>
            <p className="text-white/70 text-lg">
              TikTok bloque les liens directs. Suivez ces étapes :
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <p className="font-semibold mb-1">Cliquez sur les 3 points (•••)</p>
                <p className="text-white/60 text-sm">En haut à droite de l&apos;écran</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <p className="font-semibold mb-1">Sélectionnez &quot;Ouvrir dans Safari&quot;</p>
                <p className="text-white/60 text-sm">Ou &quot;Ouvrir dans le navigateur&quot;</p>
              </div>
            </div>
          </div>

          {/* Bouton principal */}
          <button
            onClick={openInSafari}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-[#007AFF] hover:bg-[#0051D5] text-white font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Ouvrir dans Safari
          </button>

          {/* QR Code */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm mb-3">Ou scannez ce QR code avec votre appareil photo :</p>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-xl">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(appStoreUrl)}`}
                  alt="QR Code pour App Store"
                  className="w-48 h-48"
                />
              </div>
            </div>
          </div>

          {/* Alternative : Copier le lien */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm mb-3">Ou copiez ce lien et collez-le dans Safari :</p>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3 border border-white/10">
              <code className="flex-1 text-xs text-white/80 break-all text-left">{appStoreUrl}</code>
              <button
                onClick={copyLink}
                className="flex-shrink-0 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                {copied ? '✓ Copié!' : 'Copier'}
              </button>
            </div>
          </div>

          {/* Lien direct de secours */}
          <div className="pt-2">
            <a 
              href={appStoreUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007AFF] hover:text-[#0051D5] text-sm underline"
            >
              Lien direct App Store →
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Pour les autres plateformes, affichage simple
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <div className="mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg mb-2">Redirection vers l&apos;App Store...</p>
        </div>
        
        <div className="space-y-4">
          <p className="text-base text-white/80 mb-2">
            Si la redirection ne fonctionne pas, cliquez ci-dessous :
          </p>
          <a 
            href={appStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-[#007AFF] hover:bg-[#0051D5] text-white font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Ouvrir dans l&apos;App Store
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AppStoreRedirect() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Chargement...</p>
        </div>
      </div>
    }>
      <AppStoreRedirectContent />
    </Suspense>
  );
}
