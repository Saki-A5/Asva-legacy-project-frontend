"use client";

import Image from "next/image";

type Event = {
  title: string;
  date: string;
  image: string;
};

const events: Event[] = [
  {
    title: "ASVA Hackathon 2026",
    date: "May 12",
    image: "/events/hackathon.jpg",
  },
  {
    title: "Tech Talk",
    date: "May 20",
    image: "/events/techtalk.jpg",
  },
  {
    title: "Design Bootcamp",
    date: "June 2",
    image: "/events/design.jpg",
  },
];

export default function EventsTicker() {
  return (
    <section id="events" className="relative w-full overflow-hidden border-y border-white/10 bg-black">

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex whitespace-nowrap group">
        
        {/* Track */}
        <div className="flex animate-scroll group-hover:[animation-play-state:paused] gap-6 py-4 px-4">

          {[...events, ...events].map((event, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 min-w-[220px] shrink-0 transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <p className="text-sm text-white font-medium leading-tight">
                  {event.title}
                </p>
                <span className="text-xs text-gray-400">
                  {event.date}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}