export function SkillsAndTools() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript"],
    },
    {
      category: "Web",
      items: ["HTML", "CSS", "React", "Node.js", "Next.js"],
    },
    {
      category: "AI/ML",
      items: ["TensorFlow", "scikit-learn", "Pandas"],
    },
    {
      category: "Tools",
      items: ["Git","Postman"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-500">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-5 transition-transform transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{skill.category}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {skill.items.map((item, index) => (
                <li key={index} className="hover:text-black transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
