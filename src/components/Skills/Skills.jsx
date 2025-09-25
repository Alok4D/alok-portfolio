

"use client";

import { CodeXml, Cpu, Database } from "lucide-react";


const frontendSkills = [
  { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" },
  { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" },
  { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" },
  { name: "Bootstrap", img: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" },
  { name: "JavaScript", img: "https://pnggallery.com/wp-content/uploads/javascript-logo-01.png" },
  { name: "React", img: "https://i.ibb.co.com/FL4Jwyd3/YYo-Q4-Dt0-Vnf3-Meb-CZLt4q-MD0u-Pl-T9gt-Eyo1jut-JMco.webp" },
  
];

const backendSkills = [
  { name: "Express.js", img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
  { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/256/5968/5968322.png" },
  { name: "MongoDB", img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb-svgrepo-com.svg" },
  { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
];

const tools = [
  { name: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
  { name: "GitHub", img: "https://www.pngmart.com/files/23/Github-Logo-PNG.png" },
  { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png" },
  { name: "VS Code", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
  { name: "Postman", img: "https://www.applivery.com/wp-content/uploads/2024/09/Postman.png" },
  { name: "Firebase", img: "https://seekvectors.com/files/download/ffe6fba930dfc0755e5c21537be68530.png" },
  { name: "NPM", img: "https://images.icon-icons.com/2407/PNG/512/npm_icon_146141.png" },
  { name: "Vercel", img: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png" }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 text-white mt-16 rounded-lg md:mx-0 mx-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-6">My Skills</h2>
        <p className="text-center md:text-lg text-sm text-gray-300 mb-12 max-w-3xl mx-auto">
          I specialize in modern web development, creating dynamic and responsive applications. Below are my core skills and technologies I work with.
        </p>

        {/* Skills Grid */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          
          {/* Frontend Skills */}
          <div className="md:p-6 p-3 rounded-lg border border-white/30 bg-[#0f1524] hover:shadow-lg shadow-[#60a5f9] transition-all duration-300 ease-in-out hover:border-[#60a5f9]">
            <div className="flex items-center gap-4">
              <div className="bg-[#171f2e] p-4 rounded-lg">
                <CodeXml className="text-[#60a5f9]" size={30} />
              </div>
              <h2 className="md:text-[24px] text-lg font-bold">Frontend Development</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 mt-8">
              {frontendSkills.map(skill => (
                <div key={skill.name} className="border border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:border-[#60a5f9] hover:scale-105 transition-all duration-300">
                  <img src={skill.img} alt={skill.name} width={30} height={30} className="w-[25px] h-[25px]" />
                  <h2 className="text-sm">{skill.name}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="md:p-6 p-3 rounded-lg border border-white/30 bg-[#0f1524] hover:shadow-lg shadow-[#60a5f9] transition-all duration-300 ease-in-out hover:border-[#60a5f9]">
            <div className="flex items-center gap-4">
              <div className="bg-[#171f2e] p-4 rounded-lg">
                <Database className="text-[#44c675]" size={30} />
              </div>
              <h2 className="md:text-[24px] text-lg font-bold">Backend Development</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 mt-8">
              {backendSkills.map(skill => (
                <div key={skill.name} className="border border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:border-[#60a5f9] hover:scale-105 transition-all duration-300">
                  <img src={skill.img} alt={skill.name} width={30} height={30} className="w-[25px] h-[25px]" />
                  <h2 className="text-sm">{skill.name}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="md:p-6 p-3 rounded-lg border border-white/30 bg-[#0f1524] hover:shadow-lg shadow-[#60a5f9] transition-all duration-300 ease-in-out hover:border-[#60a5f9]">
            <div className="flex items-center gap-4">
              <div className="bg-[#171f2e] p-4 rounded-lg">
                <Cpu className="text-[#e76dae]" size={30} />
              </div>
              <h2 className="md:text-[24px] text-lg font-bold">Tools & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 mt-8">
              {tools.map(skill => (
                <div key={skill.name} className="border border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:border-[#60a5f9] hover:scale-105 transition-all duration-300">
                  <img src={skill.img} alt={skill.name} width={30} height={30} className="w-[25px] h-[25px]" />
                  <h2 className="text-sm">{skill.name}</h2>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

