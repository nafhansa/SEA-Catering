import fitFresh from '../image/fit-fresh.jpg';
import vegetarianBoost from '../image/vegetarian-boost.jpg';
import indoComfort from '../image/indo-comfort.jpg';
import familyPack from '../image/family-pack.jpg';

const meals = [
  { img: fitFresh, name: "FIT & FRESH PLAN" },
  { img: vegetarianBoost, name: "VEGETARIAN BOOST" },
  { img: indoComfort, name: "INDO COMFORT" },
  { img: familyPack, name: "FAMILY PACK" },
];

export default function MealsPage() {
  return (
    <section className="flex flex-col items-center min-h-screen bg-[#FFF1CA] pt-14">
      <h1 className="mb-10 font-extrabold text-3xl tracking-[0.18em] text-[#254423]" style={{ letterSpacing: "0.17em" }}>
        MEAL PLANS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {meals.map((m) => (
          <div
            key={m.name}
            className="bg-[#F6EEDC] rounded-[2.2rem] border-[8px] border-[#254423] flex flex-col items-center p-7 shadow-2xl transition hover:scale-105"
            style={{ width: 270, height: 300 }}
          >
            <img src={m.img} alt={m.name} className="rounded-[1.4rem] border-4 border-[#254423] mb-4 object-cover w-[170px] h-[120px]" />
            <div className="mt-2 text-[#254423] font-extrabold tracking-[0.15em] text-lg text-center border-t-2 border-[#254423] w-full pt-2">
              {m.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
