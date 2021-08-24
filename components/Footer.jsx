import Icon from "./comps/Icon";

export default function Footer(props) {
  return (
    <footer className="footer border-top shadow-sm">
      <div className="container">
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <span className="text-muted">© 2021 Kelvin Tobar</span>
          </div>
          <div className="col-8">
            <ul className="nav list-inline justify-content-end">
              <li className="list-inline-item">
                <a
                  href="mailto:hello@kelvintobar.com"
                  aria-label="email"
                  className="btn text-mute"
                >
                  <Icon name="Email" title=" " />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/kelvin-tobar/"
                  aria-label="linkedin"
                  className="btn text-mute"
                >
                  <Icon name="Linkedin" title=" " />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/ktobar"
                  aria-label="github"
                  className="btn text-mute"
                >
                  <Icon name="Github" title=" " />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
