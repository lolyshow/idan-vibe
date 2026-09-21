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
						
						'https://www.instagram.com/p/DdYT8UvjEae/?stkn=bzB5amt4cG5nenN2',
						'https://www.instagram.com/reel/DdX2lfiMHpE/?stkn=MTNqaGE2MWZzNXIz',
						'https://www.instagram.com/p/DdV40hUCGPY/?stkn=bDhkd214OXViZGxl',
						'https://www.instagram.com/p/DcdX48Lo_qp/?stkn=MWw1ZDIyY3MyNWxlbg=='
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
