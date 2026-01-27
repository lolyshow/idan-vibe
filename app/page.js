import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import Shows from "./components/Shows/Shows";
import InstagramSection from "./components/InstagramSection/InstagramSection";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import TextParallax from "./components/TextParallax/TextParallax";
import Team from "./components/Team/Team";
export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-white">
				<Intro />
				<About />
				<Listen />
				<InstagramSection
					title="See what we’re up to"
					profileUrl="https://www.instagram.com/idanvibes_?igsh=NDlmdDdjdDdsNDJm&utm_source=qr"
					posts={[
						
						'https://www.instagram.com/reel/DO1jX4fjPFo/?igsh=MW9ueHVleDF6a2swYQ==',
						'https://www.instagram.com/p/DQH2VQdjFyT/?igsh=MXBrNHZrdHhwaGhpeg==',
						'https://www.instagram.com/p/DPhaiWPjEVA/?igsh=MXgzODUwc25xbjd1dQ==',
						'https://www.instagram.com/p/DPWJFB1DLLL/?igsh=ZXpzZWx6ZmJzMzVs'
					]}
					/>
				<Shows />
				<ContactUs />
				<TextParallax />
				<PhotoGallery />
				<Team />
			</main>
		</>
	);
}
