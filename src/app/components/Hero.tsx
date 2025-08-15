"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../utils/animation";

const icons = [
  {
    label: "JavaScript",
    icon: <BiLogoJavascript className="h-8 w-8 text-primary" />,
    exp: "5",
  },
  {
    label: "React",
    icon: <BiLogoReact className="h-8 w-8 text-primary" />,
    exp: "5",
  },
  {
    label: "Next.js",
    icon: <RiNextjsFill className="h-8 w-8 text-primary" />,
    exp: "1",
  },
  {
    label: "Vue.js",
    icon: <BiLogoVuejs className="h-8 w-8 text-primary" />,
    exp: "3",
  },
  {
    label: "Node.js",
    icon: <BiLogoNodejs className="h-8 w-8 text-primary" />,
    exp: "5",
  },
  {
    label: "TypeScript",
    icon: <BiLogoTypescript className="h-8 w-8 text-primary" />,
    exp: "3",
  },
  {
    label: "Redux",
    icon: <BiLogoRedux className="h-8 w-8 text-primary" />,
    exp: "1",
  },
  {
    label: "Tailwind CSS",
    icon: <BiLogoTailwindCss className="h-8 w-8 text-primary" />,
    exp: "1",
  },
  {
    label: "Express",
    icon: <SiExpress className="h-8 w-8 text-primary" />,
    exp: "5",
  },
  {
    label: "MongoDB",
    icon: <BiLogoMongodb className="h-8 w-8 text-primary" />,
    exp: "5",
  },
  {
    label: "PostgreSQL",
    icon: <BiLogoPostgresql className="h-8 w-8 text-primary" />,
    exp: "3",
  },
  {
    label: "RESTful APIs",
    icon: <FaProjectDiagram className="h-8 w-8 text-primary" />,
    exp: "5",
  },
  {
    label: "GraphQL",
    icon: <BiLogoGraphql className="h-8 w-8 text-primary" />,
    exp: "3",
  },
];

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <motion.div {...scaleIn} transition={{ delay: 0.2 }}>
            <Image
              src="/projects/myPhoto.jpg"
              alt="profile image"
              width={100}
              height={100}
              className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:test-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Eric Garcia
          </motion.h1>
          <motion.div {...fadeInUp} transition={{ delay: 0.7 }}>
            <p className="text-xl md:text-2xl mb-2">
              Experienced software engineer
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-2 justify-center">
              {icons.map((icon) => (
                <Tooltip
                  key={icon.label}
                  label={icon.label}
                  exp={icon.exp}
                  type="icon"
                >
                  {icon.icon}
                </Tooltip>
              ))}
            </div>
            <p className="text-lg mb-6 text-secondary max-w-3xl mx-auto leading-snug">
              Experienced and versatile software engineer with a front-end
              leaning, full-stack background and a passion for continuous
              improvement. Known for clear communication, empathy, and a
              big-picture mindset, I thrive as a dedicated team player and
              contributor. Drawing from leadership experience in prior roles and
              a love for mentoring, I bring a growth-oriented approach to any
              engineering team, always eager to learn, support others, and
              deliver impactful solutions.
            </p>
            <p className="text-lg mb-6 text-secondary max-w-3xl mx-auto leading-snug">
              Fast-tracked from a customer service role to Software Engineer at
              ZenBusiness within just 8 months, followed by a promotion to
              Engineer L2 in 16 months due to strong performance, ownership, and
              ability to deliver results.
            </p>
            <p className="text-lg mb-12 text-secondary max-w-3xl mx-auto leading-snug">
              Front-End + Full-Stack | Responsive Design | Accessibility / WCAG
              | Object-Oriented Programming | Functional Programming |
              Cross-Browser Compatibility | Performance Optimization |
              Progressive Web Apps | Agile/Scrum Methodologies | Version
              Pixel-Perfect Implementation | Microservices | API Design &
              Development | Unit & End-to-End Testing | Monitoring &
              Observability | UI/UX Design Mentoring & Team Development |
              Infrastructure & CI/CD | Micro Frontends
            </p>

            <div className="max-w-3xl mx-auto">
              <Link
                href="/skills"
                className="bg-primary text-center inline-block min-w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
              >
                View All Skills
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
