import ClickableIcon from "./components/ClickableIcon";
// import StaticIcon from "./components/StaticIcon";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from './assets/images/python.png'
import contactIcons from './assets/icons/sprite1.svg'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="container">
      <section className="profile-about grid grid--1x2">
        <div className="profile" data-aos="flip-left" data-aos-duration="2000">
          <div className="profile__image-container">
            <img src={profileImg} alt="python" />
          </div>
          <div className="profile__content-container">
            <h1 className="profile__content-name">VINOTH KUMAR M</h1>
            <h2 className="profile__content-role">Python Backend Developer</h2>
            <div className="profile__content-contact">
              <ClickableIcon
                redirectLink="https://www.google.com"
                iconSourceLink={`${contactIcons}#linkedin`}
                container={true}
              />
              <ClickableIcon
                redirectLink="https://www.google.com"
                iconSourceLink={`${contactIcons}#github`}
                container={true}
              />
              <ClickableIcon
                redirectLink="https://www.google.com"
                iconSourceLink={`${contactIcons}#whatsapp`}
                container={true}
              />
              <ClickableIcon
                redirectLink="https://www.google.com"
                iconSourceLink={`${contactIcons}#mail`}
                container={true}
              />
            </div>
          </div>
        </div>
        <div className="about">
          <h2 className="section__heading">
            <span className="banner banner--right-cliped">About Me</span>
          </h2>
          <ul className="about__content" data-aos="fade-left" data-aos-duration="1000">
            <li className="test">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae earum nulla ea repellendus accusantium assumenda?
              Sequi ut animi consequatur fugiat?
            </li>
            <li className="test">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae earum nulla ea repellendus accusantium assumenda?
              Sequi ut animi consequatur fugiat?
            </li>
            <li className="test">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae earum nulla ea repellendus accusantium assumenda?
              Sequi ut animi consequatur fugiat?
            </li>
            <li className="test">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae earum nulla ea repellendus accusantium assumenda?
              Sequi ut animi consequatur fugiat?
            </li>
          </ul>
        </div>
      </section>
      <hr style={{ marginTop: "20px" }} />

      <section className="experience">
        <h2 className="section__heading">
          <span className="banner banner--right-cliped">Experience</span>
        </h2>
        <div className="timeline">
          <div className="timeline__container left" data-aos="fade-right">
            <div className="content experiance-card">
              <h3 className="role grid grid--1x2">
                Backend Team Lead <span>Oct 2022 - Present</span>
              </h3>
              <h4 className="company-name">
                Bon AI Solutions, Thiruchirappalli, Tamil Nadu, India.
              </h4>
              <ul className="contribution">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, cupiditate.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline__container right" data-aos="fade-left">
            <div className="content experiance-card">
              <h3 className="role grid grid--1x2">
                Backend Developer<span>May 2022 - Sep 2022</span>
              </h3>
              <h4 className="company-name">
                Bon AI Solutions, Thiruchirappalli, Tamil Nadu, India.
              </h4>
              <ul className="contribution">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, cupiditate.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline__container left"  data-aos="fade-right">
            <div className="content experiance-card">
              <h3 className="role grid grid--1x2">
                Software Engineer<span>Feb 2022 - April 2022</span>
              </h3>
              <h4 className="company-name">
                Artifintel Private Limited, Chennai, Tamil Nadu, India.
              </h4>
              <ul className="contribution">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, cupiditate.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline__container right"  data-aos="fade-left">
            <div className="content experiance-card">
              <h3 className="role grid grid--1x2">
                Software Engineer Trainee<span>Oct 2021 - Jan 2022</span>
              </h3>
              <h4 className="company-name">
                Artifintel Private Limited, Chennai, Tamil Nadu, India.
              </h4>
              <ul className="contribution">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, cupiditate.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline__container left" data-aos="fade-right">
            <div className="content experiance-card">
              <h3 className="role grid grid--1x2">
                Software Engineer Trainee<span>May 2021 - Sep 2021</span>
              </h3>
              <h4 className="company-name">
                Artifintel Private Limited, Chennai, Tamil Nadu, India.
              </h4>
              <ul className="contribution">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, cupiditate.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ marginTop: "20px" }} />

      <section className="skils">
        <h2 className="section__heading">
          <span className="banner banner--right-cliped">Technical Skill</span>
        </h2>
      </section>
    </div>
  );
}

export default App;
