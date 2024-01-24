import Image from "next/image";
import Carousel from "@/components/Carousel";
import TimeLine from "@/components/TimeLine";

const styles = {
  main: {
    maxWidth: "calc(100% - 364px)",
  },
};

const data = [
  {
    date: "Jan-2023 - Nov-2023",
    anchor: "vodafone",
    title: "Telecommunications company “Vodafone”",
    url: "https://www.vodafone.com/",
    description: "Worked on site migration from Drupal CMS to Contentful CMS",
    images: ["/About_Vodafone.png", "/Travel_Mobility.png", "/SDGs.png"],
    technologies: "Javascript, React.js, Redux, Next.js, Contentful CMS",
  },
  {
    date: "May-2021 - Jan-2023",
    title: "Medical platform (private project)",
    anchor: "medical",
    description: "Implementation of Image editor for medical personal",
    images: ["/Results.png"],
    technologies: "TypeScript, React.js, Redux, Next.js, OpenLayers",
  },
  {
    date: "Jan-2020 - Jan-2021",
    title: "Marketing platform (private project)",
    anchor: "marketing",
    description:
      "Implementation of application from scratch, creation of app architecture, new features implementation, testing",
    images: [],
    technologies: "TypeScript, React.js, Redux, Next.js, OpenLayers",
  },
  {
    date: "Apr-2018 - Jan-2020",
    title: "Social networks (Food.com, Foodnetwork.com)",
    anchor: "food.com",
    url: "https://www.food.com/",
    description:
      "Redesign and rebranding implementation. Performance optimizations. A/B tests implementation. Work with Videoplayers. Implementation of Reviews section",
    images: [
      "/Recipe_-_Food_com.png",
      "/Recipes_Food_com.png",
      "/Reviews_Food_com.png",
    ],
    imgHeight: 600,
    imgWidth: 450,
    technologies: "Javascript, HTML/CSS, Vue.js, Vuex, Nuxt.js, LESS",
  },
  {
    date: "Apr 2016 - Apr-2018",
    title: "Television network (syfy.com, cnbc.com, nbc.com)",
    anchor: "syfy.com",
    description:
      "Social login implementation (using gigya service). Integration spot.im service. Work with videoplayers ",
    images: ["/NBC_TV.png", "/SYFY.png"],
    url: "https://www.syfy.com/",
    technologies: "Javascript, HTML/CSS, Vue.js, Vuex, Nuxt.js, LESS",
  },
];

const Projects = () => (
  <main
    className="flex min-h-screen flex-col items-center justify-between p-24 pr-5 text-wenge"
    style={styles.main}
  >
    <div className="fixed top-50 right-5 z-20 bg-white">
      <TimeLine items={data} />
    </div>
    <ul>
      {data.map((item) => (
        <li key={item.title} className="m-5 p-5 pb-10">
          <a id={item.anchor}></a>
          <p className="text-crayola font-bold p-1 text-lg text-center">
            {item.date.toUpperCase()}
          </p>
          <p className="p-1">
            <span className="font-bold">Project: </span>
            <span>{item.title}</span>
          </p>
          {item.url && (
            <p className="p-1">
              <span className="font-bold">Url: </span>
              <span className="hover:text-crayola underline underline-offset-1">
                <a target="_blank" href={item.url}>
                  {item.url}
                </a>
              </span>
            </p>
          )}
          <p className="p-1">
            <span className="font-bold">Main tasks: </span>
            <span>{item.description}</span>
          </p>
          <p className="p-1">
            <span className="font-bold">Technologies: </span>
            <span>{item.technologies}</span>
          </p>
          <Carousel>
            {item.images.map((src) => (
              <Image
                className="m-2"
                key={src}
                src={src}
                alt={item.title}
                width={600}
                height={600}
              />
            ))}
          </Carousel>
        </li>
      ))}
    </ul>
  </main>
);
export default Projects;
