const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-black text-white p-12 md:p-16 border-4 border-black">
            <h2 className="text-5xl md:text-6xl font-black mb-8">ABOUT US</h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-lg md:text-xl font-bold leading-relaxed mb-6">
              IEEE CRCE Student Branch is a community of passionate engineers and technologists committed to innovation and excellence.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              We organize workshops, technical events, and competitions that foster learning and collaboration among students.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-12 md:p-16 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="border-l-8 border-black pl-6">
                <h3 className="text-3xl font-black mb-2">500+</h3>
                <p className="text-lg font-bold">MEMBERS</p>
              </div>
              <div className="border-l-8 border-black pl-6">
                <h3 className="text-3xl font-black mb-2">50+</h3>
                <p className="text-lg font-bold">EVENTS ANNUALLY</p>
              </div>
              <div className="border-l-8 border-black pl-6">
                <h3 className="text-3xl font-black mb-2">10+</h3>
                <p className="text-lg font-bold">YEARS OF EXCELLENCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
