"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
export default function Shows() {
	const [isScrollMoreVisible, setIsScrollMoreVisible] = useState(true);
	const showsContainerRef = useRef(null);
	const scrollableDivRef = useRef(null);
	const isInView = useInView(showsContainerRef, { once: true });

	return (
		<section
			id="shows"
			className={`w-full relative mt-16 bg-[#f0ede3] p-3 z-[50] lg:bg-stone-300/70 lg:backdrop-blur-lg.    bg-incoming-shows bg-cover bg-no-repeat bg-center h-[32rem] lg:h-screen lg:min-h-[45rem] lg:max-h-[49rem] lg:mt-56`}
			style={{
				transform: isInView ? "none" : "translateY(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={showsContainerRef}>
			<Container customClasses="pb-2.5 h-full">
				
			</Container>
			<div className="absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat z-[-1]"></div>
		</section>
	);
}
