"use client";

import Scene from "./components/scene";
import { Rocket, GraduationCap, Users, Sparkles, Cpu } from "lucide-react";
import MainNavbar from "../components/MainNavbar";

const scenes = [
  {
    title: "The Beginning (2016)",
    description:
      "The ABUAD Salt Valley Association (ASVA) was established on March 10, 2016 as a student-led, innovation-driven association focused on creativity, leadership, and technological advancement within Afe Babalola University.",
    icon: <Rocket size={42} />,
  },
  {
    title: "Innovation & Conferences",
    description:
      "ASVA organized flagship events such as EPIC 2022 and EPIC 2024 — large-scale innovation conferences and inter-university competitions involving institutions like Covenant University, Bells University, and Pan-Atlantic University. These events featured hackathons, leadership sessions, and cash prize competitions.",
    icon: <Users size={42} />,
  },
  {
    title: "Technology & Development",
    description:
      "Through initiatives like DEVCON 1.0 and machine learning programs, ASVA exposed students to real-world tech practices, including AI, software development, and innovation-driven problem solving.",
    icon: <Cpu size={42} />,
  },
  {
    title: "Skill Empowerment",
    description:
      "Programs such as the ASVA Film Making Initiative and Portfolio Design & Animation Training equipped students with skills in storytelling, media production, digital branding, and creative design.",
    icon: <GraduationCap size={42} />,
  },
  {
    title: "AI & Global Readiness",
    description:
      "Through NVIDIA Machine Learning Training, students gained hands-on experience in data processing, neural networks, and AI model development — preparing them for global opportunities in technology and research.",
    icon: <Sparkles size={42} />,
  },
  {
    title: "Community & Impact",
    description:
      "ASVA Day celebrations and interdisciplinary collaborations strengthened student engagement, leadership, and innovation culture, while enhancing ABUAD’s reputation as a forward-thinking institution.",
    icon: <Users size={42} />,
  },
  {
    title: "The Future",
    description:
      "As ASVA enters its second decade, it is focused on scaling impact through structured conferences, hackathons, leadership programs, and innovation-driven initiatives that prepare students for global competitiveness.",
    icon: <Rocket size={42} />,
  },
];

export default function JourneyPage() {
  return (
    <>
    <MainNavbar />
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
          Our Journey
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          A decade of innovation, leadership, and impact within ABUAD.
        </p>
      </section>

      {/* SCENES */}
      {scenes.map((scene, i) => (
        <Scene key={i} {...scene} />
      ))}

      {/* OUTRO */}
      <section className="h-screen flex items-center justify-center text-center">
        <h2 className="text-3xl text-gray-400">
          And this is only the beginning.
        </h2>
      </section>

    </main>
    </>
  );
}