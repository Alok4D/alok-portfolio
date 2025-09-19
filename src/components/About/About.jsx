// import ReactTypingEffect from "react-typing-effect";
// import Tilt from "react-parallax-tilt";
// import profileImage from "../../assets/banner-logo/profile-1.png";

// const About = () => {
//   return (
//     <section
//       id="home"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//         {/* Left Side */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//           {/* Greeting */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
//             Hi, I am
//           </h1>
//           {/* Name */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Alok Roy
//           </h2>
//           {/* Skills Heading with Typing Effect */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>
//             <ReactTypingEffect
//               text={[
//                 "MERN-Stack Developer",
//                 "Web Developer",
//                 "ReactJS Developer",
//                 "Front-End Developer",
//                 "Programmer",
//               ]}
//               speed={100}
//               eraseSpeed={50}
//               typingDelay={500}
//               eraseDelay={2000}
//               cursorRenderer={(cursor) => (
//                 <span className="text-[#8245ec]">{cursor}</span>
//               )}
//             />
//           </h3>
//           {/* About Me Paragraph */}
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//             I am a full-stack developer with over 2 years of experience in
//             building scalable web applications. Skilled in both front-end and
//             back-end development, I specialize in the MERN stack and other
//             modern technologies to create seamless user experiences and
//             efficient solutions.
//           </p>
//           {/* Resume Button */}
//           <a
//             href="/public/CV/Alok-Roy-Resume.pdf"
//             download="Alok_Roy_Resume.pdf"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: "linear-gradient(90deg, #8245ec, #a855f7)",
//               boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
//             }}
//           >
//             DOWNLOAD CV
//           </a>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="Alok Roy"
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";
import { Link } from "react-scroll";
import { Download } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { SparklesText } from "../ui/sparkles-text";
import { TypingAnimation } from "../ui/terminal";

// The code content for the typing animation
const codeContent = `const profile = {
    <span class="text-[#efbe53]">name</span>: <span class="text-[#a5d6ff]">'Alok Roy'</span>,
    <span class="text-[#efbe53]">title</span>: <span class="text-[#a5d6ff]">'Full-Stack Developer | MERN Developer | Next.js Developer'</span>,
    <span class="text-[#efbe53]">skills</span>: [
        <span class="text-[#a5d6ff]">'React'</span>, <span class="text-[#a5d6ff]">'Next.js'</span>, <span class="text-[#a5d6ff]">'Redux'</span>, <span class="text-[#a5d6ff]">'Node'</span>, <span class="text-[#a5d6ff]">'Express'</span>,
        <span class="text-[#a5d6ff]">'JavaScript'</span>, <span class="text-[#a5d6ff]">'TypeScript'</span>, <span class="text-[#a5d6ff]">'MongoDB'</span>,
        <span class="text-[#a5d6ff]">'Git'</span>, <span class="text-[#a5d6ff]">'GitHub'</span>, <span class="text-[#a5d6ff]">'Postman'</span>
    ],
    <span class="text-[#efbe53]">hardWorker</span>: <span class="text-blue-400">true</span>,
    <span class="text-[#efbe53]">quickLearner</span>: <span class="text-blue-400">true</span>,
    <span class="text-[#efbe53]">problemSolver</span>: <span class="text-blue-400">true</span>,
    <span class="text-[#efbe53]">yearsOfExperience</span>: <span class="text-purple-400">2</span>,
    <span class="text-[#efbe53]">hireable</span>: <span class="text-pink-500">function</span>() {
        <span class="text-pink-500">return</span> (
            <span class="text-[#a5d6ff]">this</span>.hardWorker &&
            <span class="text-[#a5d6ff]">this</span>.problemSolver &&
            <span class="text-[#a5d6ff]">this</span>.skills.length >= <span class="text-purple-400">3</span>
        );
    },
};`;

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="home" className="relative flex items-center justify-center min-h-screen px-4 text-white">
            <div className="z-10 flex flex-col xl:flex-row items-center justify-between w-full gap-8 lg:flex-row xl:mt-0 container mx-auto">
                {/* LEFT CONTENT */}
                <div className="flex-1 text-center md:text-left relative">
                    <div className="inline-block animate-bounce absolute -top-15 right-10">
                        <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                            ✨ Clean Code
                        </div>
                    </div>
                    <div className="md:inline-block hidden animate-bounce absolute top-40 right-10">
                        <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                            💡 Continuous Learning
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="border inline-block px-4 py-2 bg-[#131c2f] rounded-full border-gray-600">
                        <SparklesText className="font-semibold md:text-start text-center text-sm" text="🎉 Welcome, to my world" />
                    </div>

                    <h1 data-aos="fade-right" className="text-4xl mt-8 font-bold md:text-7xl lg:text-[80px] my-4 bg-gradient-to-r from-[#60a5f9] to-[#34d29a] text-transparent bg-clip-text">
                        <span className="text-white">I'm</span> Alok Roy
                    </h1>

                    <p className="text-[#60a5f9] font-medium md:text-xl my-4 border-[1px] border-[#60a5f9] inline-block px-4 py-2 rounded-full bg-[#041826]">
                        <TypeAnimation
                            sequence={[
                                "A Passionate Web Developer",
                                1000,
                                "MERN Stack Developer",
                                1000,
                                "Full Stact Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>

                    <p data-aos="fade-right" className="md:text-xl text-gray-200 leading-relaxed">
                        I craft dynamic, user-friendly web experiences with the MERN stack and Next.js, blending performance with aesthetics to build modern, seamless applications.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap items-center justify-center md:gap-4 gap-2 md:justify-start mt-6">
                        {/* Hire me button */}
                        <div className="group relative z-10 p-[2px] rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#60a5f9] to-[#34d29a]">
                            <Link
                                to="contact"
                                className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#091121] text-white text-md font-semibold transition-all duration-300"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                            >
                                <span className="text-xl">Hire me</span>
                            </Link>
                        </div>

                        {/* Download CV button */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=13-9fSHB_8xJzhpJ0xXx4b-P9w3Ezz7Wl"
                            download
                            className="group relative z-10 p-[2px] rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#60a5f9] to-[#34d29a]"
                        >
                            <span
                                className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#091121] text-white text-md font-semibold transition-all duration-300"
                            >
                                <span className="text-xl">Download CV</span>
                                <Download className="text-2xl" />
                            </span>
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 w-full md:mt-0 mt-8 xl:my-0 my-8">
                    <div className="w-full relative bg-gradient-to-tr from-[#60a5f9] via-[#4cbace] to-[#34d29a] p-[2px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="bg-[#091121] backdrop-blur-xl text-[#D4D4D4] rounded-xl font-mono leading-relaxed relative transition-all duration-300">

                            <div className="flex items-center space-x-2 px-6 py-3 bg-[#0a2338] rounded-t-xl">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-sm text-gray-400 ml-4">developer.js</span>
                            </div>

                            {/* Code Content */}
                            <div className="space-y-1 p-6">
                                <TypingAnimation className="text-[#a5d6ff]" typingSpeed={30}>
                                    {codeContent}
                                </TypingAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;