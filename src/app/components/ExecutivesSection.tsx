"use client";

import Image from "next/image";
import { useState } from "react";

type Executive = {
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
  bio?: string;
};

const executives: Executive[] = [
  {
    name: "Emmanuel Francis",
    role: "President",
    image: "/Francis.jpg",
    objectPosition: "object-top",
    bio: "Leads ASVA with a focus on innovation, structure, and student impact.",
  },
  {
    name: "Ayo Fauziyah",
    role: "Vice President",
    image: "/Fauziyah.jpg",
    objectPosition: "object-top",
    bio: "Supports executive coordination and drives strategic initiatives.",
  },
  {
    name: "Sarah Kelechi",
    role: "General Secretary",
    image: "/Kelechi.jpg",
    objectPosition: "object-top",
    bio: "Manages documentation, communication, and internal organization.",
  },
  {
    name: "Daniel Chinaza",
    role: "Financial Secretary",
    image: "/Naza.jpg",
    objectPosition: "object-top",
    bio: "Oversees financial records and accountability.",
  },
  {
    name: "Solomon Tolulope",
    role: "Software Director",
    image: "/tolu.jpg",
    objectPosition: "object-top",
    bio: "Builds and maintains ASVA digital systems and platforms.",
  },
  {
    name: "Ibrahim April",
    role: "Public Relations Officer",
    image: "/aptil.png",
    objectPosition: "object-top",
    bio: "Handles ASVA communication and public image.",
  },
  {
    name: "Effiom-Henshaw Marshall",
    role: "Creative Director",
    image: "/henshaw.jpg",
    objectPosition: "object-top",
    bio: "Leads visual identity and creative direction.",
  },
  {
    name: "Oluwole Seun",
    role: "Assistant Creative Director",
    image: "/seun.jpg",
    objectPosition: "object-top",
    bio: "Supports creative production and branding.",
  },
  {
    name: "Abiba Odekina",
    role: "Director of External Affairs",
    image: "/Abiba.jpg",
    objectPosition: "object-center",
    bio: "Manages external partnerships and collaborations.",
  },
  {
    name: "Akpan Benjamin",
    role: "Hardware Director",
    image: "/Benjamin.jpg",
    objectPosition: "object-center",
    bio: "Handles hardware systems and physical infrastructure.",
  },
];

export default function ExecutivesSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="execs" className="w-full bg-black py-20 px-6">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Meet the Executives
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          The leadership team driving ASVA forward
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

        {executives.map((exec, index) => {
          const isFlipped = flippedIndex === index;

          return (
            <div
              key={index}
              className="[perspective:1000px] cursor-pointer"
              onClick={() =>
                setFlippedIndex(isFlipped ? null : index)
              }
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <div
                className={`relative h-72 transition-transform duration-700 will-change-transform [transform-style:preserve-3d]
                ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                `}
              >
                {/* FRONT */}
                <div className="absolute inset-0 bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                  
                  <div className="p-4 text-center">
                    <h3 className="text-white text-sm font-semibold">
                      {exec.name}
                    </h3>
                    <p className="text-green-500 text-xs mt-1">
                      {exec.role}
                    </p>
                  </div>

                  <div className="relative w-full h-44 bg-black">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      className={`object-cover ${
                        exec.objectPosition ?? "object-center"
                      }`}
                    />
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-black border border-white/10 rounded-2xl p-5 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {exec.bio}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}