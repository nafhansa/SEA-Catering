export default function HeroSection() {
  const outlineStyle = {
    color: "#FFF1CA",
    WebkitTextFillColor: "#FFF1CA",
    WebkitTextStroke: "7px #2D4F2B", 
    textShadow: "-10px 8px 5px rgba(0,0,0,0.30)",
  };

  return (
    <section id="hero" className="py-24 px-4">
      <div className="space-y-16">
        <h1
          className="uppercase text-[70px] tracking-[0.2em] mx-[75px]"
          style={{
            ...outlineStyle,
            fontFamily: "'Archivo Black', 'Inter', sans-serif",
            width: "fit-content",
          }}
        >
          HEALTHY MEALS
        </h1>
        <h1
          className="uppercase text-[70px] tracking-[0.2em] mx-auto"
          style={{
            ...outlineStyle,
            fontFamily: "'Archivo Black', 'Inter', sans-serif",
            width: "fit-content",
          }}
        >
          DELIVERIES
        </h1>
        <h1
          className="uppercase text-[70px] tracking-[0.2em] ml-[755px]"
          style={{
            ...outlineStyle,
            fontFamily: "'Archivo Black', 'Inter', sans-serif",
            width: "fit-content",
          }}
        >
          NUTRITION INFO
        </h1>
      </div>
    </section>
  );
}
