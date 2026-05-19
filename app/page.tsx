export default function Home() {
  const brands = [
    { name: "owlsafe", link: "https://owlsafe.co.uk", type: "owlsafe" },
    { name: "HeronSight", link: "https://heronsight.co.uk", type: "heronsight" },
    {
      name: "Asbestos Survey Scotland",
      link: "https://asbestossurveyscotland.co.uk",
      type: "scotland",
    },
    { name: "Viaduct Asbestos Surveys", link: "#", type: "viaduct" },
  ];

  return (
    <main className="h-[100svh] overflow-hidden bg-[#06070A] text-white">
      <div className="intro-screen">
        <img src="/images/northcrow.png" alt="Northcrow" className="intro-logo" />
      </div>

      <style>{`
        @keyframes northcrow-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .northcrow-track {
          animation: northcrow-marquee 18s linear infinite;
        }

        .brand-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
        }

        .intro-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #06070A;
          animation: intro-fade 2.6s ease forwards;
        }

        .intro-logo {
          width: 180px;
          height: auto;
          opacity: 0;
          transform: scale(0.82);
          filter: blur(12px);
          animation: intro-logo-reveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes intro-logo-reveal {
          0% {
            opacity: 0;
            transform: scale(0.82);
            filter: blur(12px);
          }

          30% {
            opacity: 1;
            filter: blur(0px);
          }

          72% {
            opacity: 1;
            transform: scale(1.25);
            filter: blur(0px);
          }

          100% {
            opacity: 0;
            transform: scale(3.4);
            filter: blur(36px);
          }
        }

        @keyframes intro-fade {
          0% { opacity: 1; }
          82% { opacity: 1; }
          100% {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
        }
      `}</style>

      <section className="relative flex h-[100svh] items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-42%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-[-280px] left-[-140px] h-[430px] w-[430px] rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute right-[-180px] top-[20%] h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <img
            src="/images/northcrow.png"
            alt="Northcrow"
            className="mb-6 h-auto w-32 md:w-40"
          />

          <h1 className="max-w-3xl text-5xl font-semibold lowercase leading-[1.02] tracking-tight text-white md:text-7xl">
            building connections.
          </h1>

          <a
            href="mailto:info@northcrow.co.uk"
            className="mt-7 rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            work with us
          </a>

          <div className="mt-11 w-full max-w-5xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/30">
              our brands
            </p>

            <div className="brand-mask relative w-full overflow-hidden py-2">
              <div className="northcrow-track flex w-max items-center gap-20">
                {[...brands, ...brands].map((brand, index) => (
                  <a
                    key={`${brand.name}-${index}`}
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 min-w-[230px] shrink-0 items-center justify-center text-2xl tracking-tight opacity-60 transition duration-300 hover:opacity-100"
                  >
                    {brand.type === "owlsafe" ? (
                      <span className="font-bold lowercase">
                        <span className="text-white/45">owl</span>
                        <span className="text-white/75">safe</span>
                      </span>
                    ) : brand.type === "heronsight" ? (
                      <span>
                        <span className="font-bold text-white/75">Heron</span>
                        <span className="font-light text-white/50">Sight</span>
                      </span>
                    ) : brand.type === "scotland" ? (
                     <span className="flex flex-col items-center leading-none font-[var(--font-roboto-slab)]">
  <span className="w-[168px] text-center text-[19px] font-bold tracking-[0.22em] text-white/70">
    ASBESTOS
  </span>

  <span className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-white/45">
    SURVEY SCOTLAND
  </span>
</span>
                    ) : (
                      <span className="flex flex-col items-center leading-none font-[var(--font-roboto-slab)]">
  <span className="w-[168px] text-center text-[19px] font-bold tracking-[0.32em] text-white/70">
    VIADUCT
  </span>

  <span className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-white/45">
    ASBESTOS SURVEYS
  </span>
</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}