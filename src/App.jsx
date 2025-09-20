// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg',
import profile_photo from "./assets/profile_photo.jpg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <main className="container pt-5">

        {/* Home */}
        <section className="my-5" id="home">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-12 order-2 order-md-1">
              <div className="py-3">
                <h1 className="user-heading fw-semibold">Shubhangi Wadekar</h1>
                <h2 className="py-2 text-color">Full Stack Developer</h2>
                <hr />
                <p className="fs-5 text-color">
                  I'm Shubhangi, a Full Stack Developer skilled in HTML, JavaScript,
                  React, Node.js, MongoDB, and other web technologies. I enjoy
                  building user-friendly applications and creating scalable,
                  user-centered solutions while writing clean and efficient
                  code.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <a href="#contact" className="btn btn-success btn-lg">
                    Contact me
                  </a>
                 <a href="/resume.pdf" target="_blank" className="btn btn-outline-success btn-lg">Resume</a>

                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 order-1 order-md-2">
              <div className="homeImage text-center">
                <img
                  src={profile_photo}
                  alt="My Photo"
                  className="img-fluid img-thumbnail"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="my-5" id="projects">
          <h2 className="py-2 title">Projects</h2>
          <p className="description-text">
            Building solutions that solve real-world problems
          </p>
          <hr />
          <div className="row align-items-stretch">
            <div className="col-md-4 col-12 my-3">
              <div className="card h-100">
                <div className="project-img">
                  <img
                    src="https://media.istockphoto.com/id/2207271217/photo/optimization-of-procurement-or-purchasing-product-order-for-online-shopping-and-service.jpg?s=2048x2048&w=is&k=20&c=-_Vr_Dj0RwwrwGtgEvGq0FjIVwvdXaRScU8ZitRCWVo="
                    className="card-img-top"
                    alt="wearEase Image"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title fs-3">Wear Ease</h5>
                  <p className="card-text text-color">
                    An e-commerce platform for clothing where users can browse, add to cart, and purchase items seamlessly. Built with React for frontend, Node.js & Express for backend, and MongoDB for database. Implements user authentication, product management, and responsive UI design.
                  </p>
                  <div className="mb-3">
                    <span className="badge bg-dark text-light me-1 mb-1">
                      React JS
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      Node JS
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      MongoDB
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      Express JS
                    </span>
                  </div>

                  <div className="d-flex gap-2">
                    <a
                      href="https://wear-ease.vercel.app"
                      target="_blank"
                      className="btn text-color"
                    >
                      <i className="bi bi-eye"></i> Demo
                    </a>
                    <a
                      href="https://github.com/WadekarShubhangi/WearEase.git"
                      target="_blank"
                      className="btn text-color"
                    >
                      <i className="bi bi-code-slash"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-3">
              <div className="card h-100">
                <div className="project-img">
                  <img
                    src="https://media.istockphoto.com/id/2195941514/photo/3d-curved-arrow-with-focus-circles-and-check-marks-surrounded-by-gears-representing-process.jpg?s=2048x2048&w=is&k=20&c=ix5ZL7fn6Vjf1snyAveFQoS0lrMXXCFaJuMg25VOX9I="
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fs-3 ">Sales Trail</h5>
                  <p className="card-text text-color">
                   A full-stack sales lead management application where users can create, track, and manage leads. Features include agent assignment, tagging, comments, and reports with data visualization using Chart.js. Built for improving sales workflows and tracking performance.
                  </p>
                  <div className="mb-3">
                    <span className="badge bg-dark text-light me-1 mb-1">
                      React JS
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      Node JS
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      MongoDB
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      Express JS
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      Chart JS
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href="https://sales-trail-ccia.vercel.app/"
                      className="btn text-color"
                      target="_blank"
                    >
                      <i className="bi bi-eye"></i> Demo
                    </a>
                    <a
                      href="https://github.com/WadekarShubhangi/sales-trail.git"
                      className="btn text-color"
                      target="_blank"
                    >
                      <i className="bi bi-code-slash"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-3">
              <div className="card h-100">
                <div className="project-img">
                  <img
                    src="https://media.istockphoto.com/id/2158255780/photo/meeting-businessman-and-woman-with-paperwork-for-advice-planning-and-conversation-at-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=PGnt0HmSwJj8KL0tam1KdxLAC8hMHdFZFoAhWy9Ov4o="
                    className="card-img-top"
                    alt="..."
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title fs-3">Portfolio</h5>
                  <p className="card-text text-color">
                    Personal portfolio website showcasing projects, skills, and contact information. Built with React and Bootstrap, with responsive design and interactive UI elements.
                  </p>
                  <div className="mb-3">
                    <span className="badge bg-dark text-light me-1 mb-1">
                      React js
                    </span>
                    <span className="badge bg-dark text-light me-1 mb-1">
                      Bootstrap
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <a href="" className="btn text-color">
                      <i className="bi bi-eye"></i> Demo
                    </a>
                    <a href="#" className="btn text-color">
                      <i className="bi bi-code-slash"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="my-5" id="skills">
          <h2 className="py-2 title">Skills</h2>
          <p className="description-text">Technologies and tools I work with</p>
          <hr />

          <div className="row text-center">
            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-html5-plain colored"></i>
                </div>
                <p className="mb-0 text-white">HTML</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-css3-plain colored"></i>
                </div>
                <p className="mb-0 text-white">CSS</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-javascript-plain colored"></i>
                </div>
                <p className="mb-0 text-white">JavaScript</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-bootstrap-plain colored"></i>
                </div>
                <p className="mb-0 text-white">Bootstrap</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-react-original colored"></i>
                </div>
                <p className="mb-0 text-white">React JS</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-nodejs-plain colored"></i>
                </div>
                <p className="mb-0 text-white">Node JS</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-express-original"></i>
                </div>
                <p className="mb-0 text-white">Express JS</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-mongodb-plain colored"></i>
                </div>
                <p className="mb-0 text-white">MongoDB</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-github-original"></i>
                </div>
                <p className="mb-0 text-white">GitHub</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-git-plain colored"></i>
                </div>
                <p className="mb-0 text-white">Git</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-vscode-plain"></i>
                </div>
                <p className="mb-0 text-white">VS Code</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-vercel-original"></i>
                </div>
                <p className="mb-0 text-white">Vercel</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="devicon-postman-plain colored"></i>
                </div>
                <p className="mb-0 text-white">Postman</p>
              </div>
            </div>

            <div className="col-md-3 col-6 p-3">
              <div className="d-flex align-items-center mb-4 fs-5">
                <div className="me-3 text-white">
                  <i className="bi bi-person-wheelchair"></i>
                </div>
                <p className="mb-0 text-white">Accessibility</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience and Education */}
        <section className="" id="education">
          <h2 className="py-2 title">Experience And Education</h2>
          <p className="description-text">My Experience and Education.</p>
          <hr />

          {/* Experience */}
          <div>
            <div className="d-flex my-3 justify-content-center">
              <button className="btn btn-outline-info text-uppercase fs-5">
                Experience
              </button>
            </div>

            <div className="card shadow p-3 mb-5 rounded">
              <div className="card-body">
                <h5 className="card-title">
                  Frontend Developer - Technical Consultant
                </h5>
                <h6 className="card-subtitle mb-2 text-color">
                  Sep 2020 - Sep 2023
                </h6>
                <h6 className="card-subtitle mb-2 text-color">
                  Perficient Inc
                </h6>
                <p className="card-text">
                  Worked remotely as a frontend developer, Stacks used: Vue.js
                  (frontend), MongoDB, Node.js, Express.js, Firebase for
                  blogging A fully Authenticated Admin Panel is also created to
                  perform CRUD Operations Using Tailwind CSS to design the whole
                  website Worked independently to create engaging web content
                  and reusable components
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="d-flex my-3 justify-content-center">
              <button className="btn btn-outline-info text-uppercase fs-5">
                Education
              </button>
            </div>

            <div className="row">
              <div className="col-sm-6 col-12">
                <div className="card shadow p-3 mb-5 rounded">
                  <div className="card-body">
                    <h5 className="card-title">M.Sc (CS)</h5>
                    <h6 className="card-subtitle mb-2 text-color">
                      2017 - 2019
                    </h6>
                    <h6 className="card-subtitle mb-2 text-color">
                      SCSIT, Devi Ahilya Vishwavidhyalaya, Indore, MP
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="card shadow p-3 mb-5 rounded">
                  <div className="card-body">
                    <h5 className="card-title">B.Sc (IT)</h5>
                    <h6 className="card-subtitle mb-2 text-color">
                      2014 - 2017
                    </h6>
                    <h6 className="card-subtitle mb-2 text-color">
                      SRWC, Shreemati Nathibai Damodar Thackersey, Nagpur, MH
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="" id="contact">
          <h2 className="py-2 title">Connect</h2>
          <p className="description-text">Let's collaborate on something amazing together</p>
          <hr />
          <div className="row">
            <div className="col-md-6 col-6">
              <div className="card my-3 p-3">
                <h5 className="card-title"><i className="bi bi-envelope-fill"></i> Email</h5>
                <p className="card-text text-color"><a href="mailto:shubhangiwadekar1096@gmail.com" className="text-color text-decoration-none">shubhangiwadekar1096@gmail.com</a></p>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="card my-3 p-3">
                <h5 className="card-title"><i className="bi bi-linkedin"></i> LinkedIn</h5>
                <p className="card-text"><a href="https://www.linkedin.com/in/shubhangi-wadekar-69a7a2121/" target="_blank" className="text-color text-decoration-none">https://www.linkedin.com/in/shubhangi-wadekar-69a7a2121/</a></p>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="card my-3 px-4 py-3">
                <h5 className="card-title"><i className="bi bi-github"></i> GitHub</h5>
                <p className="card-text text-color"> <a href="https://github.com/WadekarShubhangi" target="_blank" className="text-color text-decoration-none">https://github.com/WadekarShubhangi</a></p>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="card my-3 px-4 py-3">
                <h5 className="card-title"><i className="bi bi-telephone-fill"></i> Contact No.</h5>
                <p className="card-text text-color"><a href="tel:+917507815152" className="text-color text-decoration-none">7507815152</a>
</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
