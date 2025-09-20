// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg',
import profile from "./assets/profile.jpg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import ExperienceAndEdu from "./components/experience/ExperienceAndEdu";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="">
      <Header />
      <main className="container pt-5">
        <section className="my-5" id="home">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-12 order-2 order-md-1">
              <div className="py-3">
                <h1 className="user-heading fw-semibold">Shubhangi Wadekar</h1>
                <h2 className="py-2 text-color">Full Stack Developer</h2>
                <hr />
                <p className="fs-5 text-color">
                  I'm Shubhangi, a Full Stack Developer skilled in HTML,
                  JavaScript, React, Node.js, MongoDB, and other web
                  technologies. I enjoy building user-friendly applications and
                  creating scalable, user-centered solutions while writing clean
                  and efficient code.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <a href="#contact" className="btn btn-success btn-lg">
                    Contact me
                  </a>
                  <a
                    href="/https://drive.google.com/file/d/1R0qMKbioStHTMUrmO6Xzuink4Z5lB-dJ/view?usp=sharing"
                    target="_blank"
                    className="btn btn-outline-success btn-lg"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 order-1 order-md-2">
              <div className="homeImage text-center">
                <img
                  src={profile}
                  alt="My Photo"
                  className="img-fluid img-thumbnail"
                />
              </div>
            </div>
          </div>
        </section>

        <Project />
        <Skills />
        <ExperienceAndEdu />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
