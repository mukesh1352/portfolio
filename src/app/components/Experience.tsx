export default function Experience(){
  const experience = [
    {
      title:"Internship",
      companyName: "AP-TRANSCO",
      duration: "May 2025 - June 2025",
      description: "Worked on Data Science Projects, focusing on the data processing and analysis for the wind forecasting.",
      skills: ["Python","PSQL"]
    }
  ]
  return(
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-500">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-xl font-semibold text-gray-700">{exp.title} <span className="text-gray-500">@ {exp.companyName}</span></h3>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-gray-700 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}