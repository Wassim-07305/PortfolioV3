'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function AppStoreRedirectContent() {
  const searchParams = useSearchParams();
  const appId = searchParams.get('id') || '6754649138';
  const [isRedirecting, setIsRedirecting] = useState(true);

  const appStoreUrl = `https://apps.apple.com/app/id${appId}`;

  useEffect(() => {
    // Ajouter un meta refresh comme fallback
    let metaRefresh: HTMLMetaElement | null = null;
    if (typeof document !== 'undefined') {
      metaRefresh = document.createElement('meta');
      metaRefresh.httpEquiv = 'refresh';
      metaRefresh.content = `3;url=${appStoreUrl}`;
      document.head.appendChild(metaRefresh);
    }

    const windowWithExtras = window as Window & { opera?: string; MSStream?: unknown };
    const userAgent = navigator.userAgent || navigator.vendor || windowWithExtras.opera || '';
    const isTikTok = /tiktok/i.test(userAgent) || /musical_ly/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !windowWithExtras.MSStream;

    // Pour TikTok, stratégie spéciale avec plusieurs tentatives
    if (isTikTok) {
      // Méthode 1 : Créer un lien visible immédiatement (utilisateur peut cliquer)
      // Cette méthode est la plus fiable pour TikTok
      const link = document.createElement('a');
      link.href = appStoreUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.position = 'fixed';
      link.style.top = '50%';
      link.style.left = '50%';
      link.style.transform = 'translate(-50%, -50%)';
      link.style.padding = '20px 40px';
      link.style.background = '#007AFF';
      link.style.color = 'white';
      link.style.borderRadius = '12px';
      link.style.fontSize = '18px';
      link.style.fontWeight = 'bold';
      link.style.textDecoration = 'none';
      link.style.zIndex = '10000';
      link.textContent = 'Ouvrir dans l\'App Store';
      document.body.appendChild(link);

      // Tenter de cliquer automatiquement après un court délai
      setTimeout(() => {
        try {
          link.click();
        } catch {
          console.log('Auto-click failed, user can click manually');
        }
      }, 500);

      // Méthode 2 : Redirection window.location après délai
      setTimeout(() => {
        try {
          window.location.href = appStoreUrl;
        } catch {
          console.log('Window location redirect failed');
        }
      }, 1000);

      // Méthode 3 : window.open en backup
      setTimeout(() => {
        try {
          window.open(appStoreUrl, '_system');
        } catch {
          console.log('Window open failed');
        }
      }, 1500);

      setIsRedirecting(false);
    } else if (isIOS) {
      // Pour iOS normal, redirection directe
      window.location.href = appStoreUrl;
    } else {
      // Pour les autres plateformes, redirection normale
      window.location.href = appStoreUrl;
    }

    // Cleanup
    return () => {
      if (metaRefresh && document.head.contains(metaRefresh)) {
        document.head.removeChild(metaRefresh);
      }
    };
  }, [appId, appStoreUrl]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        {isRedirecting && (
          <div className="mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg mb-2">Redirection automatique en cours...</p>
          </div>
        )}
        
        <div className="space-y-4">
          <p className="text-base text-white/80 mb-2">
            {isRedirecting 
              ? 'Si la redirection ne fonctionne pas, cliquez sur le bouton ci-dessous :'
              : 'Cliquez sur le bouton ci-dessous pour accéder à l\'App Store :'
            }
          </p>
          <a 
            href={appStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-[#007AFF] hover:bg-[#0051D5] text-white font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
            style={{ minWidth: '280px' }}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Ouvrir dans l&apos;App Store
          </a>
          <p className="text-xs text-white/40 mt-6">
            Ou copiez ce lien dans votre navigateur :<br />
            <span className="text-white/60 break-all">{appStoreUrl}</span>
          </p>
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
