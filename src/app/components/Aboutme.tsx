import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-500">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <p className="text-lg mb-4">
        Hey there! I'm <strong>Narravula Mukesh</strong>, a passionate and curious Computer Science undergraduate at <strong>Amrita Vishwa Vidyapeetham, Coimbatore</strong>.
        I’m deeply interested in how technology can solve real-world problems — and that's what drives me every day.
      </p>

      <p className="mb-4">
        My primary areas of interest include <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and <strong>Web Development</strong>. I love building web apps, experimenting with ML models, and learning new tools and technologies to improve my craft.
      </p>

      <p className="mb-4">
        I'm currently honing my skills in languages like <strong>Java</strong> and <strong>Python</strong>, and working on personal and collaborative projects that challenge me to grow.
        I also enjoy contributing to open-source and exploring the latest tech trends.
      </p>

      <p className="mb-4">
        Outside of tech, you’ll find me exploring music, reading about future tech, or just diving deep into a good book or podcast.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Connect with Me</h2>
      <div className="flex gap-4 items-center mb-4">
        <a href="https://github.com/mukesh1352" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/mukesh-narravula-22664a251" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl">
          <FaLinkedin />
        </a>
        <a href="mukeshnarravula14@gmail.com" className="text-red-600 hover:text-red-800 text-2xl">
          <FaEnvelope />
        </a>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Skills & Tools</h2>
      <ul className="list-disc list-inside">
        <li>Languages: Java, Python, JavaScript</li>
        <li>Web: HTML, CSS, React, Node.js,Next.js</li>
        <li>AI/ML: TensorFlow, scikit-learn, Pandas</li>
        <li>Tools: Git, VSCode, Postman</li>
      </ul>
    </div>
  );
}
