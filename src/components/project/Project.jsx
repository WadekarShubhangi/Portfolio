const Project = () => {
    return(
        <>
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
                    <a href="https://portfolio-five-virid-90.vercel.app/" className="btn text-color">
                      <i className="bi bi-eye"></i> Demo
                    </a>
                    <a href="https://github.com/WadekarShubhangi/Portfolio.git" className="btn text-color">
                      <i className="bi bi-code-slash"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
export default Project;