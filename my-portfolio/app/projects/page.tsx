const projects = [
    { title: 'News App', description: 'React + Vite app for daily news updates.' },
    { title: 'Booking App', description: 'Flutter + Node.js car booking system.' },
    { title: 'Forum Platform', description: 'NestJS backend with delegate registration.' },
  ];
  
  export default function ProjectsPage() {
    return (
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((proj) => (
            <div key={proj.title} className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  