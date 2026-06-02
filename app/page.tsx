export default function Home() {
  const services = [
    "Website Design",
    "Business Email Setup",
    "Website Hosting",
    "Technical Support",
    "Lead Generation",
  ];

  return (
    <main className="h-[100svh] overflow-hidden bg-[#06070A] text-white">
      <div className="intro-screen">
        <img src="/images/northcrow.png" alt="Northcrow" className="intro-logo" />
      </div>

      <style>{`
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

        @keyframes service-focus {
          0% {
            opacity: 0;
            transform: scale(0.88);
            filter: blur(12px);
          }

          15% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }

          68% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }

          100% {
            opacity: 0;
            transform: scale(1.12);
            filter: blur(12px);
          }
        }

        .service-word {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: service-focus 15s cubic-bezier(0.22, 1, 0.36, 1) infinite;
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
            digital foundations.
          </h1>

          <a
            href="mailto:info@northcrow.co.uk"
            className="mt-7 rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            work with us
          </a>

          <div className="relative mt-12 h-20 w-full max-w-5xl overflow-hidden md:h-28">
            {services.map((service, index) => (
              <div
                key={service}
                className="service-word text-3xl font-semibold tracking-tight text-white/70 md:text-5xl"
                style={{ animationDelay: `${index * 3}s` }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}