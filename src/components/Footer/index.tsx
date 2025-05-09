import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

const socials: {
  name: string;
  href: string;
  icon: IconType;
  style?: string;
}[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ac-alvin-cao",
    icon: FaLinkedin,
    style: "border border-border",
  },
  {
    name: "GitHub",
    href: "https://www.github.com/AlvinCao88",
    icon: FaGithub,
    style: "border border-border",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alvin_sp974/",
    icon: FaInstagram,
    style: "border border-border",
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-t py-4 px-6">
        {/* Name */}
        <span className="text-xl font-semi-bold text-center md:text-left ">
          Alvin Cao.  All Rights Reserved @ {new Date().getFullYear()}.
        </span>

        {/* Social Links */}
        <div className="flex gap-4 mt-2 md:mt-0 justify-center md:justify-start ">
          {socials.map(({ name, href, icon: Icon, style }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition ${style}`}
              aria-label={name}
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>

  
      </div>
    </footer>
  );
}
