import { Calendar, Code, Lightbulb, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      icon: Code,
      title: 'HACKATHONS',
      description: '24-hour coding marathons where innovation meets execution',
    },
    {
      icon: Lightbulb,
      title: 'WORKSHOPS',
      description: 'Hands-on technical sessions on emerging technologies',
    },
    {
      icon: Users,
      title: 'SEMINARS',
      description: 'Industry expert talks and knowledge sharing sessions',
    },
    {
      icon: Calendar,
      title: 'COMPETITIONS',
      description: 'Technical competitions to test skills and creativity',
    },
  ];

  return (
    <section id="events" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl w-full">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-4">EVENTS</h2>
          <div className="w-32 h-2 bg-black"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="border-4 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-200"
              >
                <Icon size={48} className="mb-6" strokeWidth={3} />
                <h3 className="text-2xl font-black mb-4">{event.title}</h3>
                <p className="text-lg font-bold leading-relaxed">{event.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
