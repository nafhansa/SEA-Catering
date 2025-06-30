export default function FaqContactSection() {
  return (
    <section
      className="w-full my-12 px-6 py-6 rounded-md shadow-md"
      style={{
        backgroundColor: '#708A58',     
        border: '10px solid #FFF1CA',       
        boxShadow: '0 0px 30px rgba(0,0,0,0.25)',
        marginLeft: 0,
        marginRight: 0,
        borderRadius: '0.375rem',
      }}
    >
      <h3
        className="text-center text-[#FFF1CA] uppercase font-extrabold tracking-widest text-[22px]"
        style={{ letterSpacing: "0.35em" }}
      >
        MORE QUESTIONS ABOUT OUR MEAL SERVICES?
      </h3>
      <button
        onClick={() => {
          const footer = document.getElementById('contact-us');
          if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="block mx-auto text-center italic font-light text-[#FFF1CA] mt-2 text-[16px] tracking-widest cursor-pointer"
        style={{ letterSpacing: "0.32em" }}
      >
        ~ CONTACT US ~
      </button>
    </section>
  );
}
