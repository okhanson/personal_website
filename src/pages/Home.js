import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Home Anchor */}
      <div id="home"></div>

      {/* HEADER */}
      <header className="bg-green-800 text-white py-12 text-center pt-32">
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{' '}
          <span className="text-green-100">
            <Typewriter
              words={['Owen', 'a Data Enthusiast', 'an Analytics Professional']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-white">
          Welcome to my personal website! This is a space for me to share academic projects, career goals, and topics I'm passionate about.
        </p>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">About Me</h2>
        <img
        src={`${process.env.PUBLIC_URL}/IMG_7823.jpg`}
        alt="Owen Hanson"
        className="max-w-[150px] rounded-full mx-auto mb-6 shadow-lg object-cover aspect-square"
        />
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          I'm currently a Master of Science in Business Analytics student at Cal Poly, San Luis Obispo.
          I’m passionate about using data to influence big business decisions — especially in aerospace,
          consulting, and fintech spaces. Outside of work, I love exploring California and staying active outdoors!
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-16 px-6 bg-gray-100 text-center">
        <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={`${process.env.PUBLIC_URL}/pythonlogo.png`} alt="Python" className="h-12 w-auto" />
            <img src={`${process.env.PUBLIC_URL}/Rlogo.png`} alt="R" className="h-12 w-auto" />
            <img src={`${process.env.PUBLIC_URL}/sqllogo.png`} alt="SQL" className="h-12 w-auto" />
            <img src={`${process.env.PUBLIC_URL}/mysqllogo.png`} alt="MySQL" className="h-12 w-auto" />
            <img src={`${process.env.PUBLIC_URL}/awslogo.png`} alt="AWS" className="h-12 w-auto" />
            <img src={`${process.env.PUBLIC_URL}/scikitlearnlogo.png`} alt="Scikit Learn" className="h-12 w-auto" />
            <img src={`${process.env.PUBLIC_URL}/excel logo.png`} alt="Excel" className="h-12 w-auto" />
        </div>
      </section>

      {/* ACADEMICS SECTION */}
      <section id="academics" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-10">Academics</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Bachelor's Section */}
          <div className="max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/CSULBlogo.png`}
              alt="CSULB Logo"
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Bachelor of Arts in Economics</h3>
            <p className="mb-2 text-gray-700">California State University, Long Beach</p>
            <p className="mb-2 text-gray-700">Magna Cum Laude, Class of 2024</p>
            <p className="mb-2 text-gray-700">Outstanding Undergraduate in Economics Award (2024)</p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <img
                src={`${process.env.PUBLIC_URL}/PBK_banner.avif`}
                alt="Phi Beta Kappa"
                className="h-10"
              />
              <span className="text-gray-700">Phi Beta Kappa Member</span>
            </div>
          </div>

          {/* Master's Section */}
          <div className="max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/calpolylogo.jpg`}
              alt="Cal Poly Logo"
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Master of Science in Business Analytics</h3>
            <p className="mb-2 text-gray-700">California Polytechnic State University, San Luis Obispo</p>
            <p className="mb-2 text-gray-700">Expected Graduation: 2025</p>
            <p className="mb-2 text-gray-700">Focused on data science, machine learning, and strategic analytics</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">Contact</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Connect with me on{' '}
            <a
                href="https://www.linkedin.com/in/owen-hanson-analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
            >
                LinkedIn
            </a>,{' '}
            check out my{' '}
            <a
                href="https://github.com/okhanson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
            >
                GitHub
            </a>,{' '}
            or send me an email at{' '}
            <a
                href="mailto:owenkhanson@gmail.com"
                className="text-sky-400 hover:underline"
            >
                owenkhanson@gmail.com
            </a>.
        </p>
    </section>
 

      {/* FOOTER */}
      <footer className="text-center py-6 bg-green-800 text-white">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} Owen Hanson. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
