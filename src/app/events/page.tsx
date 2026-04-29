"use client";

import Image from "next/image";
import { useMemo } from "react";

type Event = {
  id: number;
  title: string;
  date: string; // ISO format
  location: string;
  image: string;
  description: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "ASVA Hackathon 2026",
    date: "2026-05-12",
    location: "Main Hall",
    image: "/events/hackathon.jpg",
    description: "A 24-hour coding competition to solve real-world problems.",
  },
  {
    id: 2,
    title: "Tech Talk",
    date: "2026-05-20",
    location: "Lecture Theatre 2",
    image: "/events/techtalk.jpg",
    description: "Industry experts share insights on emerging technologies.",
  },
  {
    id: 3,
    title: "Design Bootcamp",
    date: "2026-04-01", // past event (will be filtered out)
    location: "Design Lab",
    image: "/events/design.jpg",
    description: "Hands-on training in UI/UX and branding.",
  },
];

export default function EventsPage() {
  const upcomingEvents = useMemo(() => {
    const today = new Date();

    return events
      .filter((event) => new Date(event.date) >= today)
      .sort(
        (a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Upcoming Events
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Stay updated with all ASVA activities and programs
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {upcomingEvents.length === 0 && (
          <p className="text-gray-500 text-sm">
            No upcoming events at the moment.
          </p>
        )}

        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="group bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-green-400/30 transition-all"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">
                {event.title}
              </h2>

              <p className="text-sm text-gray-400">
                {event.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                <span>
                  📅 {new Date(event.date).toDateString()}
                </span>
                <span>📍 {event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}