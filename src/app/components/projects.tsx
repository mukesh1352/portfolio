import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Tourism Recommendation Website",
    description:
      "A smart booking platform for long-distance journeys, built with scalable backend technologies and modern UI.",
    tech: ["Next.js", "Redis", "MySQL", "FastAPI"],
    github: "https://github.com/mukesh1352/software",
    demo: "https://tourism-teal.vercel.app/",
  },
  {
    title: "Real-Time Clock",
    description:
      "An IoT-based project featuring a real-time clock with stopwatch, timer (with alert), Bluetooth communication, and embedded systems integration.",
    tech: ["C++", "Embedded Systems"],
    github: "https://github.com/mukesh1352/real_time",
    demo: "https://www.youtube.com/watch?v=uhUrj592S4Y",
  },
  {
    title: "Nearest Swiggy Delivery Services",
    description:
      "An AI-driven solution that uses the A* pathfinding algorithm to identify the nearest delivery agent, optimizing distance and fuel consumption.",
    tech: ["Flask", "Python", "A* Algorithm"],
    github: "https://github.com/mukesh1352/pathfinding-with-fuel",
    demo: null,
  },
  {
    title: "Smart-Canteen",
    description:
      "An IoT + AI project to monitor canteen queue lengths and track water consumption via smart refilling systems.",
    tech: ["IoT", "C++", "Next.js", "AI", "DaisyUI"],
    github: "https://github.com/mukesh1352/canteensmart",
    demo: "https://canteensmart.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-500">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 text-xl mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black"
              >
                <FaGithub />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
