const ExperienceAndEdu = () =>{
    return(
        <>
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
        </>
    )
}

export default ExperienceAndEdu