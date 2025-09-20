const Contact = () => {
    return(
        <>
         <section className="" id="contact">
          <h2 className="py-2 title">Connect</h2>
          <p className="description-text">
            Let's collaborate on something amazing together
          </p>
          <hr />
          <div className="row">
            <div className="col-md-6 col-6">
              <div className="card my-3 p-3">
                <h5 className="card-title">
                  <i className="bi bi-envelope-fill"></i> Email
                </h5>
                <p className="card-text text-color">
                  <a
                    href="mailto:shubhangiwadekar1096@gmail.com"
                    className="text-color text-decoration-none"
                  >
                    shubhangiwadekar1096@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="card my-3 p-3">
                <h5 className="card-title">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </h5>
                <p className="card-text">
                  <a
                    href="https://www.linkedin.com/in/shubhangi-wadekar-69a7a2121/"
                    target="_blank"
                    className="text-color text-decoration-none"
                  >
                    https://www.linkedin.com/in/shubhangi-wadekar-69a7a2121/
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="card my-3 px-4 py-3">
                <h5 className="card-title">
                  <i className="bi bi-github"></i> GitHub
                </h5>
                <p className="card-text text-color">
                  {" "}
                  <a
                    href="https://github.com/WadekarShubhangi"
                    target="_blank"
                    className="text-color text-decoration-none"
                  >
                    https://github.com/WadekarShubhangi
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="card my-3 px-4 py-3">
                <h5 className="card-title">
                  <i className="bi bi-telephone-fill"></i> Contact No.
                </h5>
                <p className="card-text text-color">
                  <a
                    href="tel:+917507815152"
                    className="text-color text-decoration-none"
                  >
                    7507815152
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Contact