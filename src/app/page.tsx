import Image from "next/image";

const technologies = [
  { title: "TypeScript" },
  { title: "React", years: "4+" },
  { title: "Redux" },
  { title: "Next.js" },
  { title: "Vue", years: "3+" },
  { title: "Vuex" },
  { title: "Nuxt.js" },
  { title: "SASS, LESS, Tailwind" },
  { title: "OpenLayers" },
  { title: "Material UI, Antd" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-40 sm:p-24">
      <div className="flex items-center flex-col text-5xl sm:text-6xl text-tiffany font-semibold text-center">
        <p className="m-1"> Hi! </p>
        <p className="m-1"> I am Yuliya </p>
        <p className="text-xl text-wenge m-3">
          Front-end dev with 7+ years of experience
        </p>
      </div>
      <div className="py-3 px-5">
        <Image
          src={`${process.env.APP_URL}/2024-01-19 13.23.24.jpg`}
          alt="photo"
          width="350"
          height="350"
          className="rounded-full"
        />
      </div>
      <ul className="flex justify-center flex-wrap m-2 sm:px-5">
        {technologies.map(({ title, years }, index) => (
          <div
            className={"flex m-2 text-2xl text-wenge"}
            key={title}
          >
            <h2 className="pr-1 font-bold text-2lg">{title}</h2>
            {years && <p>{years}years</p>}
            {index !== technologies.length - 1 && <span className="text-crayola">/</span>}
          </div>
        ))}
      </ul>
    </main>
  );
}
