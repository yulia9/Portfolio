const aboutData = [
  "I am Front-End engineer with 7+ years of experience in web development.",
  "Participated in applications of different complexity and various domains in almost all stages of the development lifecycle.",
  "I love technologies.",
  "I love to learn and i do it quickly.",
  "I like to participate in active and interesting projects and to create clear and easy maintainable applications.",
];

const skills = [
  "strong knowledge of core JavaScript and HTML5/CSS3",
  "practical project use of the next technologies: TypeScript, React, Redux, Next.js, Vue.js, Vuex, Nuxt.js, SASS, LESS",
  "experience in creation of adaptive & responsive web design",
  "experience with Continuous Integration tools (Netlify, Jenkins)",
  "unit & integration testing experience (Jest, React Testing Library)",
  "experience in communication with customer, technical discussions with customer",
  "mentoring experience",
  "great interest in learning of new technologies and self-development",
];

const About = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-3 pt-40 sm:pt-24 md:p-24 text-wenge">
    <div className="w-4/5 text-lg sm:text-xl">
      {aboutData.map((text) => (
        <p className="flex py-1" key={text}>
          {text}
        </p>
      ))}
    </div>

    <h3 className="font-bold text-2xl text-crayola mt-10 mb-5">KEY SKILLS</h3>
    <ul className="w-4/5 text-lg sm:text-xl list-disc pb-5">
      {skills.map((skill) => (
        <li className="py-1" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  </main>
);
export default About;
