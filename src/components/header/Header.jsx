import './Header.css'

const Header = () => {
  return (
    <>
      <header className="py-1 border-bottom  sticky-top z-3" data-bs-theme="dark">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand fw-semibold fs-3" href="index.html">
             <i class="bi bi-code"></i> Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto">
                <a className="nav-link fw-normal" href="#home">Home</a>
                <a className="nav-link fw-normal" href="#projects">Projects</a>
                <a className="nav-link fw-normal" href="#skills">Skills</a>
                <a className="nav-link fw-normal" href="#education">Education</a>
                <a className="nav-link fw-normal" href="#contact">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
