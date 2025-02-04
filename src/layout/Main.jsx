import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbaar/Navbar";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";

const Main = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Projects />
        <Resume />
        {/* <Features /> */}
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
        {/* <FooterBottom /> */}
      </div>
    </div>
  );
};

export default Main;
