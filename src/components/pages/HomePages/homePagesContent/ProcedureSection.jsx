import React from "react";

const ProcedureSection = () => {
  return (
    <section className="relative w-full overflow-hidden dynamic-Padding">
      <img
        src="https://res.cloudinary.com/dunn8qryc/image/upload/v1775170112/90937d55190e90ffc9bcd7f9e70a5b0b8ab2005e_nywb7l.jpg"
        alt="Beach"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10  text-white container">
        <div className="max-w-xl mb-16">
          <p className="uppercase tracking-widest text-sm opacity-70 mb-3">
            Process
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Plan Your Journey in Three <br />
            <span className="font-medium">Refined Steps</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-5xl font-light opacity-80">01</h2>
              <div className="flex-1 h-[1px] bg-white/50"></div>
            </div>
            <h3 className="text-xl font-medium mb-3">Select Your Sanctuary</h3>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Browse our exclusive collection of hand-vetted villas, remote
              retreats, and boutique stays that prioritize privacy and local
              soul.
            </p>
            <button className="text-sm uppercase tracking-wider border-b border-white/60 pb-1 hover:text-gray-300">
              View Destinations →
            </button>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-5xl font-light opacity-80">02</h2>
              <div className="flex-1 h-[1px] bg-white/50"></div>
            </div>

            <h3 className="text-xl font-medium mb-3">Curate Your Path</h3>

            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Collaborate with our regional experts to craft an itinerary that
              balances iconic landmarks with hidden gems known only to locals.
            </p>

            <button className="text-sm uppercase tracking-wider border-b border-white/60 pb-1 hover:text-gray-300">
              Expert Consultation →
            </button>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-5xl font-light opacity-80">03</h2>
              <div className="flex-1 h-[1px] bg-white/50"></div>
            </div>

            <h3 className="text-xl font-medium mb-3">Embark with Ease</h3>

            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Receive a bespoke digital atlas and physical welcome kit. Every
              logistic is managed, leaving you free to simply exist.
            </p>

            <button className="text-sm uppercase tracking-wider border-b border-white/60 pb-1 hover:text-gray-300">
              Finalize Trip →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcedureSection;
