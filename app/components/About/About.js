"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

export default function About() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section
			id="about"
			className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56`}>
			<Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
				<div
					className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<div className="overflow-hidden">
						<h2
							className={`font-bold font-permanentMarker text-2xl md:text-3xl sm:text-4xl lg:text-6xl pb-6 translate-y-20 ${
								isInView ? "animate-slideUp" : ""
							}`}>
							About
						</h2>
					</div>

					<p className="sm:text-base lg:text-2xl">
					ULTIMATE IDAN VIBE, a dynamic Nigerian music band in the UK, bringing you the best of Afrobeat, Tungba, Highlife, and contemporary sound with unique twist driven by unstoppable passion for Nigerian rhythm, culture and tradition. 
					Registered and certified by the Registrar of Companies for England and Wales, incorporated under the Companies Act 2006 given at Companies House, Cardiff with number 16072268.
					</p>
					
					
				</div>
			</Container>
			<Image
				className="w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl"
				src="/about_pic.jpg"
				width={750}
				height={533}
				alt="Holding guitar"
			/>
		</section>
	);
}
