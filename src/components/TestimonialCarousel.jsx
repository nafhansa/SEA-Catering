import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    name: "Daniel W.S.M.",
    text: "The meal quality is amazing. Overall super satisfied.",
    stars: 4,
  },
  {
    name: "Teh Kasbon R.I.",
    text: "Love the menu variety. My whole family eats better now!",
    stars: 5,
  },
  {
    name: "Gro n Nimons",
    text: "Not that bad.",
    stars: 3,
  },
  {
    name: "Rahma S.",
    text: "SEA Catering is a game-changer.",
    stars: 5,
  },
];

function Star({ filled }) {
  return (
    <svg viewBox="0 0 20 20" className="w-8 h-8 inline" fill={filled ? "#FFD600" : "#FFF1CA"} stroke="#FFD600">
      <polygon points="10,1 12,7 18,7.5 13.5,12 15,18 10,15 5,18 6.5,12 2,7.5 8,7" />
    </svg>
  );
}

function TestiCard({ data, isActive }) {
  return (
    <div
      className={`
        border-[12px] border-[#FFF1CA] bg-[#708A58]
        flex flex-col items-center justify-center
        px-6 py-10 w-[640px] min-h-[250px]
        transition-all duration-300 ease-in-out
        ${isActive
          ? "scale-100 blur-0 opacity-100 z-20 rounded-[2.25rem]"
          : "scale-[0.92] blur-[1.5px] opacity-80 z-10 rounded-3xl"
        }
      `}
      style={{
        boxShadow: isActive
          ? "0px 3px 7px 1px rgba(0,0,0,0.25)"
          : "0px 7px 10px 5px rgba(0,0,0,0.12)",
        borderRadius: isActive ? "2.25rem" : "1.5rem",
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div className="mb-4 flex justify-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < data.stars} />
        ))}
      </div>
      <p className="italic text-[#FFF1CA] text-lg md:text-xl text-center mb-6 font-light tracking-widest"
        style={{
          letterSpacing: '0.10em',
          lineHeight: 1.7,
        }}>
        “{data.text}”
      </p>
      <div className="font-bold text-[#FFF1CA] text-center tracking-wide text-lg" style={{ letterSpacing: '0.08em' }}>
        {data.name}
      </div>
    </div>
  );
}

function getCenterIndex(current, total, perView = 3) {
  return (current + Math.floor(perView / 2)) % total;
}

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const SLIDER_WIDTH = 1992;
  const PER_VIEW = 3;

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    centered: true,
    slides: {
      perView: PER_VIEW,
      spacing: 36,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 1100px)": {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
    },
  });

  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <section className="bg-[#FFF1CA] min-h-screen flex flex-col items-center justify-center">
      <h2
  className="
    text-center
    font-black
    uppercase
    text-[clamp(1.5rem,4vw,3.2rem)]  // Responsive auto
    tracking-[0.22em]
    text-[#212121]
    mb-8
    px-3 sm:px-8
    leading-tight
    select-none
  "
  style={{
    fontFamily: "'Archivo Black', 'Inter', sans-serif",  
    letterSpacing: "0.22em",
    wordBreak: "break-word",
    hyphens: "auto",
    textShadow: "0px 2px 20px rgba(112,138,88,0.11)", 
  }}
>
  DON'T TAKE OUR WORDS FOR IT.
  <br className="hidden md:block" />
  TAKE THEIRS.
</h2>
      
      <div className="relative flex justify-center items-center w-full py-20 px-4 md:px-12 lg:px-32" style={{ minHeight: 400 }}>
        <button
          onClick={prev}
          aria-label="Previous"
          className="z-30 absolute left-0 top-1/2 -translate-y-1/2 bg-[#708A58] border-[6px] border-[#FFF1CA] rounded-2xl w-[70px] h-[70px] flex items-center justify-center hover:bg-[#5c7246] transition"
          style={{
            boxShadow: "0 8px 40px 0 rgba(112,138,88,0.22), 0 0px 0px 8px rgba(255,241,202,0.45)",
          }}>
          <svg width={36} height={36} fill="none" stroke="#FFF1CA" strokeWidth={4} viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="w-full flex justify-center">
          <div
            ref={sliderRef}
            className="keen-slider flex items-center mx-auto"
            style={{
              maxWidth: `2000px`,
              width: "100%",
              margin: "0 auto"
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="keen-slider__slide flex items-center justify-center"
                style={{ display: "flex" }}
              >
                <TestiCard
                  data={item}
                  isActive={i === getCenterIndex(currentSlide, testimonials.length, PER_VIEW)}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="z-30 absolute right-0 top-1/2 -translate-y-1/2 bg-[#708A58] border-[6px] border-[#FFF1CA] rounded-2xl w-[70px] h-[70px] flex items-center justify-center hover:bg-[#5c7246] transition"
          style={{
            boxShadow: "0 8px 40px 0 rgba(112,138,88,0.22), 0 0px 0px 8px rgba(255,241,202,0.45)",
          }}>
          <svg width={36} height={36} fill="none" stroke="#FFF1CA" strokeWidth={4} viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <button className="mt-10 px-12 py-3 bg-[#FFF1CA] border-[8px] border-[#708A58] rounded-full font-bold tracking-[0.17em] text-[#708A58] text-xl transition hover:bg-[#f8edcb] hover:scale-105"
        style={{
          boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.18)",
          letterSpacing: "0.18em"
        }}>
        ADD YOURS
      </button>
    </section>
  );
}
