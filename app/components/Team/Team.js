"use client";
import "yet-another-react-lightbox/styles.css";
import { FaInstagram } from "react-icons/fa";

const members = [
  {
    name: "Olanrewaju",
    role: "Singer & Manager",
    image: "/gallery/team/team3_manager.jpg",
    instagram: "https://instagram.com/mopol213"
  },
  {
    name: "Tolu",
    role: "Singer",
    image: "/gallery/team/team5_singer.jpg",
    instagram: "https://instagram.com/shangii_tee"
  },
  {
    name: "Omoluwabi",
    role: "Singer",
    image: "/gallery/team/team1_media_sing.jpg",
    instagram: "https://instagram.com/iamadeolutayo"
  },
  {
    name: "Greekreation",
    role: "Singer",
    image: "/gallery/team/team2_singer.jpg",
    instagram: "https://instagram.com/its.greenkreations"
  },
  {
    name: "Segun",
    role: "Drummer",
    image: "/gallery/team/team4_drumer.jpg",
    instagram: "https://instagram.com/idanvibes_"
  },
  {
    name: "Mathew",
    role: "Keyboardist",
    image: "/gallery/team/team6_pianist.jpg",
    instagram: "https://instagram.com/m.f.deniyi"
  },
  {
    name: "Stephanie",
    role: "Guitarist",
    image: "/gallery/team/team7_lead_guitarist.jpg",
    instagram: "https://instagram.com/stephanieekekwe"
  },
  {
    name: "Dapo",
    role: "Singer",
    image: "/gallery/team/team8_singer.jpg",
    instagram: "https://instagram.com/idanvibes_"
  },
  {
    name: "Tobi",
    role: "Drummer",
    image: "/gallery/team/team9_drummer.jpg",
    instagram: "https://instagram.com/_.oluwatobiloba"
  },
  {
    name: "Babalola",
    role: "Lead Guitarist",
    image: "/gallery/team/team10_guitarist.jpg",
    instagram: "https://instagram.com/lola_soskol"
  },
  {
    name: "teestrings_official",
    role: "Lead Guitarist",
    image: "/gallery/team/team12_guitarist.jpg",
    instagram: "https://instagram.com/teestrings_official"
  },
  {
    name: "Bayo",
    role: "Singer",
    image: "/gallery/team/team11_singer.jpg",
    instagram: "https://instagram.com/oluwabayz"
  },
  {
    name: "Phillip",
    role: "Singer",
    image: "/gallery/team/singer12.jpg",
    instagram: "https://instagram.com/philsvibe"
  },
  {
    name: "Hassan",
    role: "Media Lead",
    image: "/gallery/team/media.jpg",
    instagram: "https://instagram.com/aliukehinde_"
  },
  
  
];

export default function Team() {

  return (
    <section className="bg-gray-50 py-16 lg:pb-56 lg:mb-[22.5rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="lg:font-permanentMarker text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                <div className="flex items-center justify-center gap-2">
                  
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                    <FaInstagram size={20} className="mt-[5px] ml-[5px]" />
                  </a>
                </div>
                <p className="text-[#b07f32] text-lg font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
