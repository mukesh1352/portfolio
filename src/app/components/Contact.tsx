import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Contact Component
export function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Let&#39;s Connect</h2>

      <div className="flex justify-center gap-6 text-2xl mb-6">
        <a
          href="mailto:mukeshnarravula14@gmail.com"
          className="text-red-500 hover:text-red-600 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/mukesh1352"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/mukesh-narravula-22664a251"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="text-sm text-gray-500">Let&#39;s make something awesome together ✨</p>
    </div>
  );
}
