import Icon from "./Icon";

export default function NavBar(props) {
  return (
      <nav class="navbar sticky-top border-bottom shadow-sm bg-white">
        <div class="container-fluid justify-content-start">
          <div class="row align-items-start">
            <div class="col-md-12 pt-3">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    href="mailto:hello@kelvintobar.com"
                    aria-label="email"
                    class="btn btn-outline-secondary"
                  >
                    <Icon name="Email" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/kelvin-tobar/"
                    aria-label="linkedin"
                    class="btn btn-outline-secondary"
                  >
                    <Icon name="Linkedin" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://github.com/ktobar"
                    aria-label="github"
                    class="btn btn-outline-secondary"
                  >
                    <Icon name="Github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
