import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaUnity,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiArduino,
  SiOpencv,
  SiGodotengine,
  SiUnrealengine,
  SiVuedotjs,
  SiVite,
  SiClaude,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

const tech = [
  { label: "React", Icon: FaReact },
  { label: "Next.js", Icon: RiNextjsFill },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "JavaScript", Icon: IoLogoJavascript },
  { label: "Tailwind", Icon: SiTailwindcss },
  { label: "Vue", Icon: SiVuedotjs },
  { label: "Vite", Icon: SiVite },
  { label: "Node", Icon: FaNodeJs },
  { label: "Express", Icon: SiExpress },
  { label: "Python", Icon: FaPython },
  { label: "Flask", Icon: SiFlask },
  { label: "FastAPI", Icon: SiFastapi },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "MySQL", Icon: SiMysql },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "Docker", Icon: SiDocker },
  { label: "AWS", Icon: SiAmazonwebservices },
  { label: "Arduino", Icon: SiArduino },
  { label: "OpenCV", Icon: SiOpencv },
  { label: "Unity", Icon: FaUnity },
  { label: "Godot", Icon: SiGodotengine },
  { label: "Unreal", Icon: SiUnrealengine },
  { label: "Git", Icon: FaGitAlt },
  { label: "GitHub", Icon: FaGithub },
  { label: "Claude Code", Icon: SiClaude },
];

export default function Marquee({ speed = 50 }) {
  const track = [...tech, ...tech];
  return (
    <div className="marquee" aria-label="Tecnologias e stacks">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {track.map((item, i) => (
          <span className="marquee-item" key={i} title={item.label}>
            <item.Icon className="marquee-icon" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
