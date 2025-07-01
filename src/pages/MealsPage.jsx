import React, { useState } from "react";
import fitFresh from "../image/fit-fresh.jpg";
import vegetarianBoost from "../image/vegetarian-boost.jpg";
import indoComfort from "../image/indo-comfort.jpg";
import familyPack from "../image/family-pack.jpg";

const meals = [
  {
    name: "FIT & FRESH PLAN",
    img: fitFresh,
    description: "Balanced meals perfect for gyms goers for fitness enthusiasts",
    subDescription: "(Salad + Grilled Chicken Bowl)",
    price: "Rp 150.000/week",
  },
  {
    name: "VEGETARIAN BOOST",
    img: vegetarianBoost,
    description: "All-veggie meals powered with fiber, vitamins, and flavor",
    subDescription: "(Colorful veggie wrap)",
    price: "Rp 135.000/week",
  },
  {
    name: "INDO COMFORT",
    img: indoComfort,
    description: "Your favorite local meals, made healthier and portioned right",
    subDescription: "(Nasi kuning, tempe, sayur lodeh)",
    price: "Rp 145.000/week",
  },
  {
    name: "FAMILY PACK",
    img: familyPack,
    description: "Delicious healthy portions for the whole family (up to 4)",
    subDescription: "(4 plates on dining table)",
    price: "Rp 250.000/week",
  },
];

function MealsCard({ meal, active, isHovered, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`
        bg-[#FFF1CA] border-[8px] border-[#254423] rounded-[2.2rem]
        flex flex-col justify-between items-center p-6 shadow-2xl transition-all duration-300
        relative cursor-pointer min-h-[370px]
        ${active ? "z-20 scale-105" : "hover:scale-105"}
      `}
      style={{ width: 270 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered && !active && (
        <div className="absolute inset-0 rounded-[2.2rem] bg-[#FFF1CA]/80 backdrop-blur-[2px] z-20 transition-all duration-150 flex flex-col items-center justify-center">
          <div className="flex flex-1 flex-col w-full h-full items-center justify-center">
            <div className="flex items-center justify-center w-full h-full">
              <div
                className="bg-[#254423] px-7 py-3 rounded-xl shadow-2xl font-extrabold text-[#FFF1CA] text-xl tracking-[0.13em] text-center"
                style={{
                  letterSpacing: "0.14em",
                  pointerEvents: "none",
                  boxShadow: "0 6px 24px 0 rgba(37,68,35,0.24), 0 2px 14px 0 rgba(0,0,0,0.09)"
                }}
              >
                See More<br />Details
              </div>
            </div>
          </div>
        </div>
      )}
      {active ? (
        <>
          <div className="w-full flex flex-col items-center justify-center mb-1">
            <div className="font-extrabold text-[#254423] text-2xl tracking-[0.13em] mb-2"
              style={{ letterSpacing: "0.15em" }}>
              DESCRIPTION
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="border-t-[6px] border-[#254423] w-[65px] mt-1 mb-1 rounded" />
              <div className="border-t-[3px] border-[#254423] w-[40px] mt-[-7px] mb-1 rounded" />
              <div className="border-t-[3px] border-[#254423] w-[80px] mt-[-6px] mb-2 rounded" />
            </div>
            <div className="text-[#254423] font-extrabold text-lg text-center tracking-[0.13em] mb-2 mt-2"
              style={{ letterSpacing: "0.13em" }}>
              {meal.description}
            </div>
            <div className="text-[#254423] text-[13px] italic font-light opacity-85 mb-3">{meal.subDescription}</div>
            <div className="text-[#254423] text-base font-extrabold tracking-[0.13em] mb-2">{meal.price}</div>
          </div>
          <div className="mt-auto w-full pt-1 border-t-4 border-[#254423] flex justify-center font-extrabold text-[#254423] tracking-[0.15em] text-lg text-center"
            style={{ letterSpacing: "0.15em" }}>
            {meal.name}
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="relative w-[180px] h-[130px] flex justify-center items-center mt-8 mb-2">
              <img
                src={meal.img}
                alt={meal.name}
                className="rounded-[1.4rem] border-4 border-[#254423] w-[180px] h-[130px] object-cover transition-all duration-300"
                draggable={false}
              />
            </div>
          </div>
          <div className="w-full pt-1 border-t-4 border-[#254423] flex justify-center font-extrabold text-[#254423] tracking-[0.15em] text-lg text-center"
            style={{ letterSpacing: "0.15em" }}>
            {meal.name}
          </div>
        </>
      )}
    </div>
  );
}

export default function MealsPage() {
  const [descIdx, setDescIdx] = useState(-1);
  const [hoverIdx, setHoverIdx] = useState(-1);

  return (
    <section className="min-h-screen bg-[#FFF1CA] pt-12 pb-12 px-2 flex flex-col items-center">
      <h2 className="text-center font-extrabold uppercase text-3xl tracking-[0.18em] text-[#254423] mb-10"
        style={{ letterSpacing: '0.18em', fontFamily: 'Inter, sans-serif' }}>
        MEAL PLANS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {meals.map((meal, idx) => (
          <div
            key={meal.name}
            className="relative group"
            style={{ minHeight: 370, minWidth: 270, margin: "0 auto" }}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(-1)}
            onClick={() => setDescIdx(descIdx === idx ? -1 : idx)}
          >
            <MealsCard
              meal={meal}
              active={descIdx === idx}
              isHovered={hoverIdx === idx && descIdx !== idx}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
