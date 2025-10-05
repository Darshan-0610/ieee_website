const Team = () => {
  const roles = [
    { title: 'CHAIRPERSON', name: 'STUDENT NAME' },
    { title: 'VICE CHAIRPERSON', name: 'STUDENT NAME' },
    { title: 'SECRETARY', name: 'STUDENT NAME' },
    { title: 'TREASURER', name: 'STUDENT NAME' },
    { title: 'TECHNICAL HEAD', name: 'STUDENT NAME' },
    { title: 'EVENT HEAD', name: 'STUDENT NAME' },
  ];

  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white">
      <div className="max-w-6xl w-full">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-4">OUR TEAM</h2>
          <div className="w-32 h-2 bg-white"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((member, index) => (
            <div
              key={index}
              className="border-4 border-white p-8 hover:bg-white hover:text-black transition-colors duration-200"
            >
              <div className="aspect-square bg-white mb-6 border-2 border-current"></div>
              <h3 className="text-xl font-black mb-2">{member.title}</h3>
              <p className="text-lg font-bold opacity-80">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
