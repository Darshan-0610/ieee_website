import Shuffle from '../Shuffle';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <div className="border-8 border-black bg-white p-12 md:p-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <Shuffle
            text="IEEE"
            tag="h1"
            className="text-7xl md:text-9xl font-black mb-4"
            style={{ color: '#000' }}
            shuffleTimes={3}
            duration={0.5}
            stagger={0.05}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
            colorFrom="#888"
            colorTo="#000"
            triggerOnce={false}
            triggerOnHover={true}
          />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            CRCE STUDENT BRANCH
          </h2>
          <div className="w-32 h-2 bg-black mb-8"></div>
          <p className="text-xl md:text-2xl font-bold max-w-2xl leading-tight">
            ADVANCING TECHNOLOGY FOR HUMANITY
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
