import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaUnity,
  FaCode,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiAxios,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiUnrealengine,
  SiAseprite,
  SiArduino,
  SiScrumalliance,
} from "react-icons/si";
import { BsKanbanFill } from "react-icons/bs";

const cherry = "#f7374f";
const cherryLight = "#88304e";

const Card = ({ title, children }) => (
  <div
    className="rounded-2xl p-4 w-full sm:w-[250px] shadow-md border"
    style={{ backgroundColor: cherryLight, borderColor: cherry }}
  >
    <h4
      className="font-semibold mb-2 text-[##991B48] "
      style={{ color: cherry }}
    >
      {title}
    </h4>
    <ul className="space-y-2 text-gray-700 text-base">{children}</ul>
  </div>
);

export default function SkillsSection() {
  return (
    <section className="w-full px-6 py-12" id="skills">
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Soft Skills */}
        <div
          className="w-full md:w-1/2 rounded-2xl p-6 shadow-xl"
          style={{ backgroundColor: cherryLight }}
        >
          <h3 className="text-xl font-semibold mb-4 text-offwhite">
            Soft Skills
          </h3>
          <ul className="space-y-2 list-disc list-inside text-offwhite">
            <li>Comunicação clara</li>
            <li>Trabalho em equipe</li>
            <li>Resolução de problemas</li>
            <li>Adaptabilidade</li>
            <li>Proatividade</li>
            <li>
              Metodologias Ágeis{" "}
              <BsKanbanFill className="inline ml-2" style={{ color: cherry }} />
            </li>
          </ul>
        </div>

        {/* Hard Skills */}
        <div className="w-full md:w-1/2 flex flex-wrap gap-6 justify-end  ">
          <Card title="Front-end" className="h-96">
            <li className="flex items-center gap-2">
              <FaHtml5 style={{ color: cherry }} /> HTML
            </li>
            <li className="flex items-center gap-2">
              <SiTailwindcss className="text-cyan-500" /> Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <FaCss3Alt className="text-blue-600" /> CSS
            </li>
            <li className="flex items-center gap-2">
              <FaBootstrap className="text-purple-600" /> Bootstrap
            </li>
            <li className="flex items-center gap-2">
              <FaReact style={{ color: cherry }} /> React
            </li>
            <li className="flex items-center gap-2">
              <FaReact className="text-blue-500" /> React Native
            </li>
            <li className="flex items-center gap-2">
              <FaVuejs className="text-green-500" /> Vue.js
            </li>
          </Card>

          <Card title="Back-end">
            <li className="flex items-center gap-2">
              <FaNodeJs className="text-green-600" /> Node.js
            </li>
            <li className="flex items-center gap-2">
              <SiExpress className="text-gray-700" /> Express.js
            </li>
            <li className="flex items-center gap-2">
              <SiAxios className="text-blue-400" /> Axios
            </li>
            <li className="flex items-center gap-2">
              <FaPython className="text-yellow-500" /> Python
            </li>
          </Card>

          <Card title="Banco de Dados">
            <li className="flex items-center gap-2">
              <SiMongodb className="text-green-700" /> MongoDB
            </li>
            <li className="flex items-center gap-2">
              <SiMongoose style={{ color: cherry }} /> Mongoose
            </li>
            <li className="flex items-center gap-2">
              <SiMysql className="text-blue-700" /> MySQL
            </li>
          </Card>

          <Card title="Versionamento">
            <li className="flex items-center gap-2">
              <FaGitAlt style={{ color: cherry }} /> Git
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-black" /> GitHub
            </li>
          </Card>

          <Card title="Game Dev">
            <li className="flex items-center gap-2">
              <FaUnity className="text-gray-800" /> Unity
            </li>
            <li className="flex items-center gap-2">
              <SiUnrealengine className="text-black" /> Unreal Engine
            </li>
            <li className="flex items-center gap-2">
              <FaCode className="text-blue-700" /> C
            </li>
            <li className="flex items-center gap-2">
              <FaCode className="text-purple-700" /> C#
            </li>
            <li className="flex items-center gap-2">
              <SiAseprite style={{ color: cherry }} /> Aseprite
            </li>
          </Card>

          <Card title="IoT">
            <li className="flex items-center gap-2">
              <SiArduino className="text-blue-700" /> Arduino
            </li>
            <li className="flex items-center gap-2">
              <FaMicrochip className="text-gray-700" /> ESP32
            </li>
          </Card>
        </div>
      </div>
    </section>
  );
}
