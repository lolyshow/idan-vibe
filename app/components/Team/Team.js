"use client";
import "yet-another-react-lightbox/styles.css";


const members = [
  {
    name: "Omoluwabi",
    role: "Singer",
    image: "/gallery/team/team1_media_sing.jpg",
  },
  {
    name: "Greekreation",
    role: "Singer",
    image: "/gallery/team/team2_singer.jpg",
  },
  {
    name: "Olanrewaju",
    role: "Singer & Manager",
    image: "/gallery/team/team3_manager.jpg",
  },
  {
    name: "Segun",
    role: "Drummer",
    image: "/gallery/team/team4_drumer.jpg",
  },
  {
    name: "Tolu",
    role: "Singer",
    image: "/gallery/team/team5_singer.jpg",
  },
  {
    name: "Mathew",
    role: "Keyboardist",
    image: "/gallery/team/team6_pianist.jpg",
  },
  {
    name: "Stephanie",
    role: "Guitarist",
    image: "/gallery/team/team7_lead_guitarist.jpg",
  },
  {
    name: "Dapo",
    role: "Singer",
    image: "/gallery/team/team8_singer.jpg",
  },
  {
    name: "Tobi",
    role: "Drummer",
    image: "/gallery/team/team9_drummer.jpg",
  },
  {
    name: "Babalola",
    role: "Lead Guitarist",
    image: "/gallery/team/team10_guitarist.jpg",
  },
  {
    name: "Bayo",
    role: "Singer",
    image: "/gallery/team/team11_singer.jpg",
  },
  {
    name: "Phillip",
    role: "Singer",
    image: "/gallery/team/singer12.jpg",
  },
  {
    name: "Hassan",
    role: "Media Lead",
    image: "/gallery/team/media.jpg",
  },
  
];

export default function Team() {

  return (
    <section className="bg-gray-50 py-16 lg:pb-56 lg:mb-[22.5rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Band
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            The people who bring the music to life 🎶
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full p-6 rounded-sm aspect-square object-contain bg-gray-100"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[#b07f32] font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
