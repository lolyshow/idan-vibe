import Footer from "./components/Footer/Footer";
import "./globals.css";
import { Poppins, Permanent_Marker, Rock_Salt } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-permanent-marker",
  display: "swap",
});

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rock-salt",
  display: "swap",
});

export const metadata = {
  title: "Idan Vibes Band | Official Website",
  description:
    "Official website of the Idan Vibes Band — bringing good music to your events: weddings, birthdays, burials, and more. Meet our talented members: Phillip Olalere, Olanrewaju Olamilekan, Tolu, Olanrewaju Aany, Tobi, Dapo, and Mathew. Follow us @idanvibes_ for updates and performances.",
  keywords:
    "Idan Vibes Band, Phillip Olalere, Olanrewaju Olamilekan, Tolu, Olanrewaju Aany, Tobi, Dapo, Mathew, idanvibes, idanvibes_, owanbe, tungba, gospel, live band, event music, Nigerian band, party music, wedding band, Yoruba music, live performance",
  openGraph: {
    title: "Idan Vibes Band | Official Website",
    description:
      "Idan Vibes Band delivers energetic live performances for weddings, birthdays, and events. Learn more about our members and booking details.",
    url: "https://idanvibes.com",
    type: "website",
    images: [
      {
        url: "https://idanvibes.com/logo-portrait_.jpg",
        width: 1200,
        height: 630,
        alt: "Idan Vibes Band Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idan Vibes Band | Official Website",
    description:
      "Good music for your events — weddings, birthdays, burials, and more.",
    images: ["https://idanvibes.com/logo-portrait_.jpg"],
  },
  verification: {
    google: "ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY",
  },
  alternates: {
    canonical: "https://idanvibes.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${permanentMarker.variable} ${rockSalt.variable}`}
    >
      <body
        className={`${poppins.className} font-rendering text-2xl xl:text-3xl`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
