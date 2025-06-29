import React, { useState } from "react";

const testimonials = [
  {
    text: "The meal quality is amazing. Sometimes the delivery takes a bit longer on weekends, but overall super satisfied.",
    name: "Daniel W.S.M.",
  },
  {
    text: "Sehat, enak, praktis. Gue repeat order terus, worth it banget!",
    name: "Ayu R.",
  },
];

export default function App() {
  const [idx, setIdx] = useState(0);

  const prevTestimonial = () =>
    setIdx(idx === 0 ? testimonials.length - 1 : idx - 1);
  const nextTestimonial = () =>
    setIdx(idx === testimonials.length - 1 ? 0 : idx + 1);

  return (
    <div className="min-h-screen bg-[#f6eedc] font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#24391C] flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-3 rounded-b-xl shadow-md sticky top-0 z-50">
        <div className="flex space-x-3">
          <button className="px-4 py-1 rounded-full bg-[#F6EEDC] text-[#24391C] font-bold tracking-widest text-xs shadow">HOME</button>
          <span className="text-[#F6EEDC] font-medium text-xs px-2 py-1 rounded hover:bg-[#F6EEDC] hover:text-[#24391C] cursor-pointer">MEALS</span>
          <span className="text-[#F6EEDC] font-medium text-xs px-2 py-1 rounded hover:bg-[#F6EEDC] hover:text-[#24391C] cursor-pointer">CONTACT US</span>
          <span className="text-[#F6EEDC] font-medium text-xs px-2 py-1 rounded hover:bg-[#F6EEDC] hover:text-[#24391C] cursor-pointer">SUBSCRIPTION</span>
          <span className="text-[#F6EEDC] font-medium text-xs px-2 py-1 rounded hover:bg-[#F6EEDC] hover:text-[#24391C] cursor-pointer">LOGIN</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center mt-10">
        <h1 className="font-extrabold text-2xl md:text-3xl tracking-widest mb-3 drop-shadow-md text-[#24391C]">
          <span className="border-4 border-[#d9d9b3] bg-[#F6EEDC] rounded px-2 mr-2">HEALTHY MEALS</span>
        </h1>
        <h1 className="font-extrabold text-2xl md:text-3xl tracking-widest mb-3 drop-shadow-md text-[#24391C]">
          <span className="border-4 border-[#d9d9b3] bg-[#F6EEDC] rounded px-2 mr-2">DELIVERIES</span>
        </h1>
        <h1 className="font-extrabold text-2xl md:text-3xl tracking-widest mb-3 drop-shadow-md text-[#24391C]">
          <span className="border-4 border-[#d9d9b3] bg-[#F6EEDC] rounded px-2">NUTRITION INFO</span>
        </h1>
        <button className="mt-6 px-8 py-2 bg-[#FFC845] text-[#24391C] font-semibold rounded-full shadow-md text-lg border-4 border-[#5A7354]">THE GRAND PLAN</button>
      </section>

      {/* Globe + Sea Catering */}
      <section className="flex flex-col items-center mt-8">
        {/* Ganti src sesuai path globe.png kamu */}
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/13/14/earth-2021102_1280.png"
          alt="Globe"
          className="w-32 h-32 object-contain mb-2"
        />
        <div className="text-center">
          <h2 className="font-bold text-xl tracking-widest text-[#24391C]">SEA CATERING</h2>
          <p className="italic text-sm text-[#24391C]">"Healthy Meals, Anytime, Anywhere"</p>
          <p className="uppercase text-xs tracking-wide text-[#444] mt-1">Deliveries to Major Cities</p>
        </div>
      </section>

      {/* FAQ/Contact Button */}
      <section className="flex justify-center mt-10">
        <button className="bg-[#5A7354] text-white px-8 py-3 rounded-lg shadow-md font-semibold text-lg tracking-widest hover:bg-[#24391C] transition">
          MORE QUESTIONS ABOUT OUR MEAL SERVICES? – CONTACT US –
        </button>
      </section>

      {/* Carousel Section */}
      <section className="flex flex-col items-center my-12">
        <h3 className="text-lg font-bold mb-3 tracking-wide text-[#24391C]">
          DON’T TAKE OUR WORDS FOR IT. TAKE THEIRS.
        </h3>
        <div className="flex items-center">
          <button onClick={prevTestimonial} className="p-3 bg-[#D9D9B3] rounded-full mr-2 hover:bg-[#FFC845] transition">&#8592;</button>
          <div className="bg-[#5A7354] text-white px-8 py-5 rounded-xl shadow-lg w-80 max-w-full">
            <div className="flex justify-center mb-1">
              <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
            </div>
            <p className="text-md mb-2">"{testimonials[idx].text}"</p>
            <div className="text-xs text-right">- {testimonials[idx].name}</div>
          </div>
          <button onClick={nextTestimonial} className="p-3 bg-[#D9D9B3] rounded-full ml-2 hover:bg-[#FFC845] transition">&#8594;</button>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-[#FFC845] p-6 rounded-t-3xl mt-auto text-center shadow-inner">
        <div className="mb-1">
          <button className="bg-[#F6EEDC] px-6 py-2 rounded-full text-[#24391C] font-semibold shadow">CONTACT US</button>
        </div>
        <div className="font-bold text-[#24391C] tracking-wider">08123456789</div>
        <div className="text-xs text-[#24391C]">- BRIAN -</div>
      </footer>
    </div>
  );
}
