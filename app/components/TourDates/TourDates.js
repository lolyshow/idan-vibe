import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const tourDates = [
  {
    id: 1,
    date: "23 Oct",
    day: "Thursday",
    time: "15:30 - 16.00",
    venue: "Premier 93.5 fm",
    city: "Ibadan Nigeria",
    src: "/gallery/slider-images/premier_fm/premier_fm.jpg",
  },
  {
    id: 2,
    date: "25 Oct",
    day: "Saturday",
    time: "12 - 16.00",
    venue: "HANNA Int Fashion show Hull Minster",
    city: "Hull City",
    src: "/gallery/slider-images/hanna/hanna.jpg",
  },
  {
    id: 4,
    date: "22 Nov",
    day: "Wednesday",
    time: "20.00 - 22.00",
    venue: "Roundhouse, Chalk Bag Rd",
    city: "London",
    src: "/gallery/slider-images/naija_independence/pic1.jpg",
  },
  {
    id: 5,
    date: "10 Dec",
    day: "Saturday",
    time: "20.00 - 22.00",
    venue: "200 Camden High St",
    city: "London",
    src: "/gallery/slider-images/naija_independence/pic1.jpg",
  },
];
export default function TourDates() {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = "/gallery/slider-images/naija_independence/pic1.jpg";

  // Track which image to show
  const [selectedImage, setSelectedImage] = useState(null);

  const handleViewMore = (gig) => {
    // if gig has an image, use it; otherwise set null
    setSelectedImage(gig.src || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <ul className="list-none">
      {tourDates.map((gig) => {
        return (
          <li
            key={gig.id}
            className="flex items-center justify-between py-2 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:py-3 md:text-2xl lg:py-5 lg:justify-center lg:text-2xl xl:text-3xl lg:flex-row"
          >
            <div className="flex flex-col items-center justify-between text-center text-base leading-none w-[40%] md:text-xl lg:w-6/12 lg:flex-row lg:justify-start lg:text-left lg:text-2xl">
              <div className="flex flex-col justify-center items-center date w-[3.4rem] h-[3.4rem] leading-tight p-2 rounded-md lg:mr-12 lg:w-[5.3rem] lg:h-[5.3rem]">
                <p className="text-stone-100  font-bold text-center uppercase">
                  {gig.date}
                </p>
              </div>
              <div className=" text-white font-semibold leading-tight lg:ml-[20%]">
                <p className="text-stone-100 font-semibold">{gig.day}</p>
                <p className="text-stone-100 font-semibold">{gig.time}</p>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl">
              <div className="text-white font-semibold leading-tight">
                <p>{gig.venue}</p>
                <p>{gig.city}</p>
              </div>
              <div className="ml-2.5 lg:ml-auto">
                <button
                  className="px-4 py-2 text-xs text-white md:text-sm lg:text-base rounded-md bg-yellow-btn-primary"
                  onClick={() => handleViewMore(gig)}
                >
                  View more
                </button>
              </div>
            </div>
          </li>
        );
      })}

      {isOpen && (
        <div
		className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
		onClick={closeModal}
	  >
		<div
		  className="relative bg-white rounded-2xl p-6 max-w-3xl w-[90%] max-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
		  onClick={(e) => e.stopPropagation()}
		>
		  {/* Close Button */}
		  <button
			onClick={closeModal}
			className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl z-10"
		  >
			✕
		  </button>
	  
		  {/* Image */}
		  {selectedImage ? (
			<div className="flex items-center justify-center w-full h-full">
			  <Image
				src={selectedImage}
				alt="Gig preview"
				width={800}
				height={600}
				className="rounded-xl max-h-[75vh] w-auto object-contain mx-auto"
			  />
			</div>
		  ) : (
			<p className="text-center text-gray-600 py-10">
			  No image available.
			</p>
		  )}
		</div>
	  </div>
	  
      )}
    </ul>
  );
}
