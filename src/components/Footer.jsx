export default function ContactSection() {
  return (
    <section
      id="contact-us"
      className="w-full relative flex flex-col items-center justify-center bg-[#FFB823] pt-16 pb-10"
      style={{
        borderTopLeftRadius: "110px",
        borderTopRightRadius: "110px",
        borderTop: "14px solid #2D4422",
      }}
    >
      <div className="mb-8">
        <span
          className="bg-[#FFF1CA] px-10 py-3 rounded-full text-[#2D4422] font-bold tracking-[.22em] text-2xl shadow"
          style={{
            letterSpacing: "0.18em",
            fontFamily: "'Inter', Arial, sans-serif",
          }}
        >
          CONTACT US
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[#2D4422] font-extrabold text-2xl md:text-3xl tracking-[.18em] mb-2"
          style={{ letterSpacing: "0.18em", fontFamily: "'Inter', Arial, sans-serif" }}
        >
          08123456789
        </span>
        <span className="text-[#2D4422] font-bold tracking-widest text-lg"
          style={{
            fontFamily: "'Inter', Arial, sans-serif",
            letterSpacing: ".18em",
          }}
        >
          -BRIAN-
        </span>
      </div>
    </section>
  );
}
