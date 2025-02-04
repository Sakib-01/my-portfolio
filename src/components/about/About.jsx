import { useEffect } from "react";
import Title from "../../layout/Title";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black text-center"
    >
      <Title title="About Me" des="Who I Am" />
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p
          className="text-base font-bodyFont leading-6 tracking-wide"
          data-aos="fade-up"
        >
          Hello! I'm Sakib, a passionate junior front-end developer with a
          strong foundation in React.js and modern web technologies. Despite
          coming from a non-IT background, I have developed a deep interest in
          coding and web development through dedication and self-learning. My
          journey into tech has been driven by curiosity and a desire to solve
          problems creatively.
        </p>
        <p
          className="text-base font-bodyFont leading-6 tracking-wide"
          data-aos="fade-up"
          data-aos-delay="200" // Delay for second paragraph
        >
          I specialize in creating visually appealing, responsive, and
          user-friendly websites that deliver seamless experiences. My focus is
          on writing clean, maintainable code and continuously learning to stay
          updated with the latest trends in web development.
        </p>
        <p
          className="text-base font-bodyFont leading-6 tracking-wide"
          data-aos="fade-up"
          data-aos-delay="400" // Delay for third paragraph
        >
          I thrive on collaborating with teams to bring creative ideas to life,
          combining technical skills with a fresh perspective from my diverse
          background. Whether it's diving into new technologies or refining
          existing skills, I embrace challenges and am committed to growing as a
          developer.
        </p>
        <p
          className="text-base font-bodyFont leading-6 tracking-wide"
          data-aos="fade-up"
          data-aos-delay="600" // Delay for fourth paragraph
        >
          I believe that my non-traditional path into coding has given me a
          unique approach to problem-solving, and I strive to make a meaningful
          impact through my work.
        </p>
      </div>
    </section>
  );
};

export default About;
