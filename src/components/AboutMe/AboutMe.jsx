// import profileAboutImg from "../../assets/banner-logo/profile-1.png";

// const AboutMe = () => {
//   return (
//     <section
//       id="about"
//       className="relative py-24 px-4 sm:px-7 md:px-16 lg:px-0 font-sans bg-skills-gradient clip-path-custom-2 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             About Me
//           </h2>
//           <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
//           <p className="text-gray-400 mt-4 text-lg md:text-xl font-medium max-w-2xl mx-auto">
//             A collection of my work experience and the roles I have taken in
//             various organizations
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* Left Image Section */}
//           <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
//             <div className="relative group w-full max-w-sm md:max-w-md lg:max-w-full">
//               {/* Glow Background */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/10 to-gray-400/10 blur-xl rounded-full"></div>

//               {/* Profile Image */}
//               <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 transform rotate-3 group-hover:rotate-0 transition-all duration-700">
//                 <img
//                   src={profileAboutImg}
//                   alt="Alok Roy"
//                   className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-700"
//                 />
//                 {/* Experience Badge */}
//                 <div className="absolute -top-4 -right-4 bg-white text-black rounded-full w-24 h-24 flex flex-col items-center justify-center p-2 shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300">
//                   <span className="text-xl font-bold">1.5</span>
//                   <span className="text-xs">Years Exp.</span>
//                 </div>
//               </div>

//               {/* Optional Code Badge */}
//               <div className="absolute -bottom-4 -left-8 bg-black/70 backdrop-blur-lg p-3 rounded-lg shadow-lg border border-gray-700 transform -rotate-6 hover:rotate-0 transition-all duration-300 hidden md:block">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <pre className="text-xs text-green-400 font-mono">
//                   <code>
//                     function passion() &#123; <br />
//                     ..return "Coding" + "💖"; <br />
//                     &#125;
//                   </code>
//                 </pre>
//               </div>
//             </div>
//           </div>

//           {/* Right Text Section */}
//           <div className="lg:col-span-7 space-y-6 text-gray-200">
//             <p className="text-lg md:text-xl leading-relaxed">
//               I’m <span className="text-white font-bold">Alok Roy</span>, a
//               dedicated frontend developer with{" "}
//               <span className="font-bold">1.5 years</span> of hands-on
//               experience crafting modern and interactive user interfaces using
//               React.
//             </p>
//             <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//               I specialize in building responsive, user-focused interfaces with
//               React.js. Alongside my frontend skills, I also have practical
//               knowledge of working with MongoDB, Express, and Node.js, which
//               helps me understand how the frontend and backend connect.
//             </p>
//             <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//               I’m passionate about creating intuitive, scalable, and efficient
//               web applications. I enjoy turning creative ideas into smooth,
//               high-performing web experiences that users love.
//             </p>

//             {/* Buttons */}
//             <div className="pt-6 flex flex-wrap gap-4">
//               <a
//                 href="/src/assets/CV/Alok Roy Resume.pdf"
//                 download
//                 className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
//               >
//                 Download CV
//               </a>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-300 border-2 border-gray-700 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:bg-gray-800 transition"
//               >
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;


import profileAboutImg from "../../assets/banner-logo/profile-1.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-[8vw] md:px-[6vw] lg:px-0 font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
    >
      {/* Background Blur Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg font-medium max-w-2xl mx-auto">
            A collection of my <span className="text-white">work experience</span> 
            and the roles I have taken in various organizations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Section */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group">
              {/* Glow Ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-70 blur-2xl group-hover:opacity-100 transition"></div>

              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-700 shadow-xl">
                <img
                  src={profileAboutImg}
                  alt="Alok Roy"
                  className="w-[320px] h-auto object-cover transform group-hover:scale-105 transition duration-700"
                />
                {/* Exp Badge */}
                <div className="absolute -top-5 -right-5 bg-white text-black rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition">
                  <span className="text-2xl font-bold">1.5</span>
                  <span className="text-xs font-semibold">Years Exp.</span>
                </div>
              </div>

              {/* Code Snippets */}
              <div className="absolute -bottom-6 -left-12 bg-black/70 backdrop-blur-lg p-3 rounded-lg shadow-lg border border-gray-700 transform -rotate-6 hidden md:block">
                <pre className="text-xs text-green-400 font-mono">
                  <code>
                    function passion() {"{"} <br />
                    &nbsp;&nbsp;return "Coding 💖"; <br />
                    {"}"}
                  </code>
                </pre>
              </div>
              <div className="absolute top-6 -right-16 bg-black/70 backdrop-blur-lg p-3 rounded-lg shadow-lg border border-gray-700 transform rotate-6 hidden md:block">
                <pre className="text-xs text-blue-300 font-mono">
                  <code>
                    Developer <br />
                    &nbsp;.talent = {"{true}"};
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="lg:col-span-7 space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I’m <span className="text-white font-bold">Alok Roy</span>, a
              dedicated <span className="text-purple-400 font-semibold">frontend developer</span> 
              with <span className="font-bold text-white">1.5 years</span> of hands-on
              experience crafting modern and interactive user interfaces using{" "}
              <span className="text-blue-400">React.js</span>.
            </p>
            <p className="text-sm leading-relaxed">
              I specialize in building responsive, user-focused interfaces with React.
              Alongside my frontend skills, I also have practical knowledge of 
              <span className="text-green-400"> MongoDB</span>, 
              <span className="text-yellow-400"> Express</span>, and 
              <span className="text-red-400"> Node.js</span>, which helps me 
              understand how the frontend and backend connect.
            </p>
            <p className="text-sm leading-relaxed">
              I’m passionate about creating intuitive, scalable, and efficient
              web applications. I enjoy turning creative ideas into smooth,
              high-performing web experiences that users love.
            </p>

            {/* Buttons */}
            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href="/src/assets/CV/Alok Roy Resume.pdf"
                download=""
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-pink-500/50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-200 border border-gray-600 bg-black/50 rounded-full shadow-lg hover:bg-gray-800 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                  <path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" />
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

