import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl w-full">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-4">GET IN TOUCH</h2>
          <div className="w-32 h-2 bg-black"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-black text-white p-12 md:p-16 border-4 border-black">
            <h3 className="text-3xl font-black mb-12">CONTACT INFO</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={32} strokeWidth={3} className="flex-shrink-0" />
                <div>
                  <p className="text-lg font-bold leading-relaxed">
                    Fr. Conceicao Rodrigues College of Engineering<br />
                    Bandra West, Mumbai, Maharashtra 400050
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={32} strokeWidth={3} className="flex-shrink-0" />
                <div>
                  <p className="text-lg font-bold">ieee@fragnel.edu.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={32} strokeWidth={3} className="flex-shrink-0" />
                <div>
                  <p className="text-lg font-bold">+91 XXXX XXXX XX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-12 md:p-16">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full px-4 py-4 border-4 border-black font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full px-4 py-4 border-4 border-black font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                />
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={6}
                  className="w-full px-4 py-4 border-4 border-black font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 font-black text-lg border-4 border-black hover:bg-white hover:text-black transition-colors duration-200"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
