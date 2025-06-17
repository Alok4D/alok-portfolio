import profileAboutImg from "../../assets/banner-logo/profile-1.png";


const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
      <div className="absolute inset-0"></div>
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A collection of my work experience and the roles I have taken in
            various organizations
          </p>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-[80%] md:w-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/10 to-gray-400/10 blur-xl rounded-full"></div>
              <div className="rotate-3 hover:rotate-0 transition-all duration-700 relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
                <img
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-700"
                  src={profileAboutImg}
                  alt="alok roy"
                />

                <div className="absolute -top-4 -right-4 bg-white text-black rounded-full w-24 h-24 flex flex-col items-center justify-center p-2 shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300">
                  <span className="text-xl font-bold">1.5</span>
                  <span className="text-xs">Years Exp.</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-8 bg-black/70 backdrop-blur-lg p-3 rounded-lg shadow-lg border border-gray-700 transform -rotate-6 hover:rotate-0 transition-all duration-300 hidden md:block">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-xs text-green-400">
                  {/* <code>function passion() { return "Coding" + " 💖"; }</code> */}
                  <code>
                    function passion() &#123; <br />
                    ..return "Coding" + "💖"; <br />
                    &#125;
                  </code>
                </pre>
              </div>
              <div className="absolute -top-4 -right-20 bg-black/70 backdrop-blur-lg p-2 rounded-lg shadow-lg border border-gray-700 transform rotate-6 hover:rotate-0 transition-all duration-300 hidden md:block">
                <pre className="text-xs text-white">
                  {/* <code>Developer talent={true} </code> */}
                  <code>Developer <br />
                   .talent=&#123;true&#125 <br />
                   ;</code>
                </pre>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed text-gray-200">
              I’m <span className="text-white font-bold">Alok Roy</span>, a
              dedicated frontend developer with{" "}
              <span className="font-bold">1.5 years</span> of hands-on
              experience crafting modern and interactive user interfaces using
              React.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              I specialize in building responsive, user-focused interfaces with
              React.js and have growing experience with Next.js. Alongside my
              frontend skills, I also have practical knowledge of working with
              MongoDB, Express, and Node.js, which helps me understand how the
              frontend and backend connect.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              I’m passionate about creating intuitive, scalable, and efficient
              web applications. I enjoy turning creative ideas into smooth,
              high-performing web experiences that users love.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href="/src/assets/CV/Alok-Resume-WD_2 (8).pdf"
                download=""
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 border-2 border-gray-700 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:bg-gray-800 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
