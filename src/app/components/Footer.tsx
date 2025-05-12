"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/shathuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ksathu.tk@gmail.com"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
