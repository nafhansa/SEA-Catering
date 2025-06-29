import globeImg from '../image/globe.png';
import indoImg from '../image/indo.png';

export default function GlobeSection() {
  return (
    <section className="flex flex-col items-center py-16 bg-[#FFF1CA]">
      <button
        className="mt-2 mb-8 px-[80px] py-[36px] rounded-full bg-[#FFC629] border-[10px] border-[#69884E] shadow-xl font-bold text-[40px] tracking-widest"
        style={{
          boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.25)",
          letterSpacing: "0.30em",
        }}
      >
        THE GRAND PLAN
      </button>

      <div className="flex flex-row items-center gap-[72px] mt-4">
        <div className="relative w-[300px] h-[300px]">
          <img
            src={globeImg}
            alt="Globe"
            className="w-full h-full object-contain"
          />
          <img
            src={indoImg}
            alt="Indonesia Flag"
            className="absolute top-[55px] left-[50px] w-[200px] pointer-events-none"
            style={{
              mixBlendMode: 'normal',
            }}
          />
        </div>

        <div className="flex flex-col items-center">
          <h2
            className="uppercase font-bold text-[72px] tracking-[0.34em] mb-2"
            style={{ fontFamily: "'Archivo Black', 'Inter', sans-serif" }}
          >
            SEA CATERING
          </h2>
          <div
            className="italic font-light text-black tracking-[0.22em] mb-2"
            style={{
              fontFamily: "'Inter', Arial, sans-serif",
              fontSize: '22px',
              letterSpacing: '0.16em',
              fontWeight: 300,
              textAlign: 'center',
              width: '100%',
              maxWidth: '620px',
            }}
          >
            “Healthy Meals, Anytime, Anywhere”
          </div>
          <div
            className="italic tracking-[0.22em] text-black"
            style={{
              fontFamily: "'Inter', Arial, sans-serif",
              fontSize: '22px',
              letterSpacing: '0.16em',
              marginTop: '12px',
              fontWeight: 300,
              textAlign: 'center',
              width: '100%',
              maxWidth: '620px',
            }}
          >
            DELIVERIES TO MAJOR CITIES
          </div>
        </div>
      </div>
    </section>
  );
}
