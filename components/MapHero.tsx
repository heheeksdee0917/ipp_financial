// components/MapHero.tsx
// Drop your Malaysiamap.png into /public/Malaysiamap.png

export function MapHero() {
    return (
      <>
        <style>{`
          .mh-scene {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            overflow: hidden;
            background: #000;
            font-family: 'Georgia', serif;
          }
  
          .mh-map {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.04);
            animation: mhAmbient 8s ease-in-out infinite alternate;
          }
          @keyframes mhAmbient {
            from { filter: brightness(0.18) saturate(0.4) hue-rotate(0deg); }
            to   { filter: brightness(0.22) saturate(0.55) hue-rotate(4deg); }
          }
  
          .mh-highlight {
            position: absolute;
            left: 18%; top: 38%;
            width: 28%; height: 32%;
            background: radial-gradient(
              ellipse at 48% 52%,
              rgba(196,30,58,0.18) 0%,
              rgba(196,30,58,0.08) 40%,
              transparent 75%
            );
            z-index: 2;
            animation: mhHighlight 3.5s ease-in-out infinite alternate;
            pointer-events: none;
          }
          @keyframes mhHighlight {
            from { opacity: 0.75; }
            to   { opacity: 1; }
          }
  
          .mh-grid {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(196,30,58,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196,30,58,0.04) 1px, transparent 1px);
            background-size: 48px 48px;
            z-index: 2;
            pointer-events: none;
            animation: mhGrid 4s ease-in-out infinite alternate;
          }
          @keyframes mhGrid {
            from { opacity: 0.6; }
            to   { opacity: 1; }
          }
  
          .mh-vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(
              ellipse 80% 80% at 38% 58%,
              transparent 0%,
              transparent 28%,
              rgba(0,0,0,0.55) 52%,
              rgba(0,0,0,0.88) 75%,
              #000 100%
            );
            z-index: 2;
          }
  
          .mh-scan {
            position: absolute;
            left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(196,30,58,0.15), rgba(196,30,58,0.25), rgba(196,30,58,0.15), transparent);
            animation: mhScan 5s linear infinite;
            z-index: 3;
            pointer-events: none;
          }
          @keyframes mhScan {
            0%   { top: -2px; opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
  
          .mh-pulse {
            position: absolute;
            left: 31%; top: 53%;
            width: 8%; aspect-ratio: 1;
            border-radius: 50%;
            border: 1.5px solid rgba(196,30,58,0.7);
            transform: translate(-50%, -50%);
            animation: mhPulse 2.8s ease-out infinite;
            z-index: 3;
          }
          .mh-pulse:nth-child(2) { animation-delay: 0.9s;  border-color: rgba(196,30,58,0.45); }
          .mh-pulse:nth-child(3) { animation-delay: 1.8s;  border-color: rgba(196,30,58,0.25); }
          @keyframes mhPulse {
            0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(3.2); opacity: 0; }
          }
  
          .mh-dot {
            position: absolute;
            left: 31%; top: 53%;
            width: 7px; height: 7px;
            background: #C41E3A;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: 4;
            animation: mhDotGlow 2.8s ease-in-out infinite;
          }
          @keyframes mhDotGlow {
            0%, 100% { box-shadow: 0 0 0 2px rgba(196,30,58,0.4), 0 0 18px 6px rgba(196,30,58,0.5); }
            50%       { box-shadow: 0 0 0 3px rgba(196,30,58,0.6), 0 0 32px 12px rgba(196,30,58,0.7); }
          }
  
          .mh-bracket {
            position: absolute;
            width: 28px; height: 28px;
            z-index: 5;
          }
          .mh-tl { top: 14px; left: 14px;  border-top: 1.5px solid rgba(196,30,58,0.7); border-left:  1.5px solid rgba(196,30,58,0.7); }
          .mh-tr { top: 14px; right: 14px; border-top: 1.5px solid rgba(196,30,58,0.7); border-right: 1.5px solid rgba(196,30,58,0.7); }
          .mh-bl { bottom: 14px; left: 14px;  border-bottom: 1.5px solid rgba(196,30,58,0.7); border-left:  1.5px solid rgba(196,30,58,0.7); }
          .mh-br { bottom: 14px; right: 14px; border-bottom: 1.5px solid rgba(196,30,58,0.7); border-right: 1.5px solid rgba(196,30,58,0.7); }
  
          .mh-status {
            position: absolute;
            top: 18px; right: 18px;
            font-family: 'Courier New', monospace;
            font-size: clamp(7px, 0.9vw, 10px);
            letter-spacing: 0.18em;
            color: rgba(196,30,58,0.85);
            text-transform: uppercase;
            z-index: 7;
            display: flex;
            align-items: center;
            gap: 6px;
            opacity: 0;
            animation: mhFadeIn 0.8s ease-out 2s forwards;
          }
          .mh-status-dot {
            width: 5px; height: 5px;
            border-radius: 50%;
            background: #C41E3A;
            animation: mhBlink 1.4s ease-in-out infinite;
          }
          @keyframes mhBlink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.2; }
          }
  
          .mh-coords {
            position: absolute;
            bottom: 16px; left: 18px;
            font-family: 'Courier New', monospace;
            font-size: clamp(7px, 0.85vw, 9px);
            letter-spacing: 0.12em;
            color: rgba(154,165,180,0.55);
            z-index: 7;
            opacity: 0;
            animation: mhFadeIn 0.8s ease-out 2.2s forwards;
          }
  
          .mh-content {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 6;
            text-align: center;
            padding: 0 5%;
          }
  
          .mh-eyebrow {
            font-family: 'Courier New', monospace;
            font-size: clamp(8px, 1.1vw, 11px);
            letter-spacing: 0.28em;
            color: #C41E3A;
            text-transform: uppercase;
            margin-bottom: 1.2em;
            opacity: 0;
            animation: mhFadeUp 1s ease-out 0.4s forwards;
          }
  
          .mh-headline {
            font-family: 'Georgia', 'Times New Roman', serif;
            font-size: clamp(20px, 5vw, 58px);
            font-weight: 700;
            color: #fff;
            line-height: 1.08;
            letter-spacing: -0.01em;
            text-shadow: 0 2px 40px rgba(0,0,0,0.8);
            opacity: 0;
            animation: mhFadeUp 1s ease-out 0.7s forwards;
            margin-bottom: 0.5em;
          }
          .mh-headline em { font-style: italic; color: #fff; }
  
          .mh-divider {
            width: 36px; height: 1px;
            background: #C41E3A;
            margin: 0 auto 1.2em;
            opacity: 0;
            animation: mhFadeUp 1s ease-out 0.9s forwards;
          }
  
          .mh-subline {
            font-family: 'Georgia', serif;
            font-size: clamp(9px, 1.4vw, 14px);
            color: rgba(154,165,180,0.9);
            letter-spacing: 0.04em;
            max-width: 480px;
            line-height: 1.65;
            opacity: 0;
            animation: mhFadeUp 1s ease-out 1.1s forwards;
          }
  
          .mh-cta {
            display: inline-block;
            margin-top: 1.8em;
            font-family: 'Courier New', monospace;
            font-size: clamp(8px, 1vw, 11px);
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid rgba(196,30,58,0.7);
            padding: 0.7em 2em;
            opacity: 0;
            animation: mhFadeUp 1s ease-out 1.5s forwards;
            background: rgba(196,30,58,0.12);
            text-decoration: none;
            transition: background 0.2s;
          }
          .mh-cta:hover { background: rgba(196,30,58,0.3); }
  
          @keyframes mhFadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes mhFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
        `}</style>
  
        <section className="mh-scene">
          {/* Map image — place Malaysiamap.png in /public */}
          <img
            className="mh-map"
            src="/Malaysiamap.png"
            alt="Malaysia map"
          />
  
          {/* Malaysia glow highlight */}
          <div className="mh-highlight" />
  
          {/* Grid + vignette + scan */}
          <div className="mh-grid" />
          <div className="mh-vignette" />
          <div className="mh-scan" />
  
          {/* KL pulse rings */}
          <div className="mh-pulse" />
          <div className="mh-pulse" />
          <div className="mh-pulse" />
          <div className="mh-dot" />
  
          {/* Corner brackets */}
          <div className="mh-bracket mh-tl" />
          <div className="mh-bracket mh-tr" />
          <div className="mh-bracket mh-bl" />
          <div className="mh-bracket mh-br" />
  
          {/* Status tag */}
          <div className="mh-status">
            <span className="mh-status-dot" />
            Live · Est. 1983
          </div>
  
          {/* Coordinates */}
          <div className="mh-coords">
            3.1390°N · 101.6869°E · Kuala Lumpur, Malaysia
          </div>
  
          {/* Hero text */}
          <div className="mh-content">
            <p className="mh-eyebrow">Financial Advisory · Since 1983</p>
            <h1 className="mh-headline">
              YOUR WEALTH.
              <br />
              <em>YOUR LEGACY.</em>
            </h1>
            <div className="mh-divider" />
            <p className="mh-subline">
              Comprehensive financial planning for professionals and high net worth
              individuals in Malaysia.
            </p>
            <a className="mh-cta" href="mailto:enquiry@ipp.com.my">
              Speak to an Adviser →
            </a>
          </div>
        </section>
      </>
    );
  }