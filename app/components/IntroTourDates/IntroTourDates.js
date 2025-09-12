"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper, Github } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
	{
		id: 1,
		date: "",
		dayTime: "",
		venue: "Ritz Bar Show event center",
		city: "Hull City",
	},
	{
		id: 2,
		date: "",
		dayTime: "",
		venue: "Roundhouse, Chalk Bag Rd",
		city: "Hull City",
	},
	{
		id: 3,
		date: "",
		dayTime: "",
		venue: "Hope 93 event center London",
		city: "London",
	},
];

export default function IntroTourDates() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	return (
		<div
			className={`flex flex-col justify-center items-center lg:justify-end lg:items-end`}
			style={{
				transform: isInView ? "none" : "translateY(-100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={sectionRef}>
			<h2 className="text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl">
				⚡ Idan Vibes ⚡
			</h2>
			<ul className="list-none">
				{tourDates.map((gig) => {
					return (
						<li
							key={gig.id}
							className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl">
							<div className="text-white text-right leading-none md:mr-12">
								<p>{gig.dayTime}</p>
								<p>{gig.venue}</p>
								<div className="flex justify-end md:hidden">
									<MapMapper extraClasses="fill-amber-400 mr-2" />
									<p>{gig.city}</p>
								</div>
							</div>
							<div className="hidden text-right text-white leading-none md:flex">
								<MapMapper extraClasses="fill-amber-400 mr-2" />
								<p>{gig.city}</p>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="gap-x-3 lg:flex">
				<a href="" target="_blank" rel="noreferrer">
					<ButtonPrimary customClasses="flex items-center gap-x-1 text-sm my-3 lg:text-base lg:mb-0">
						Contact Us
					</ButtonPrimary>
				</a>
				<div className="hidden lg:block">
					<ScrollTo toId="shows" duration={1500}>
						<ButtonPrimary>Book us now</ButtonPrimary>
					</ScrollTo>
				</div>
			</div>
		</div>
	);
}
