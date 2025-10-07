import { HoverEffect } from "../ui/card-hover-effect";
import aceternity from "../assets/aceternity-img.webp";
import algochurn from "../assets/algochurn-img.webp";
import boxshadows from "../assets/boxshadows-img.webp";
import placeholdertech from "../assets/placeholdertech-img.webp";
import tailwindmasterkit from "../assets/tailwindmasterkit-img.webp";

const projects = [
  {
    image: aceternity,
    title: "Algochurn",
    description:
      "A web app that allows users to practice for front-end and UI interviews",
    link: "https://www.algochurn.com/",
  },
  {
    image: algochurn,
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://www.aceternity.com/",
  },
  {
    image: boxshadows,
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://www.tailwindmasterkit.com/",
  },
  {
    image: placeholdertech,
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://ui.aceternity.com/tools/box-shadows",
  },
  {
    image: tailwindmasterkit,
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://ww25.placeholdertech.in/?subid1=20251007-0106-29b4-8644-9e0ccc5b4400",
  },
];

const Project = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 md:mt-36">
      <h1 className="text-2xl font-bold text-white mb-6">
        I've been building a lot of things
      </h1>
      <div className="">
       <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Project;
