import styled from "styled-components";
import profileImg from "../assets/images/python.png";
import contactIcons from "../assets/icons/sprite1.svg";
import ClickableIcon from "../components/ClickableIcon";
import SectionHeader from "../components/SectionHeader";
import pythonLogo from "../assets/icons/python.svg";

const Container = styled.div`
  gap: 4rem;
`;

const ImageContainer = styled.div`
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-top: 2rem;
`;

const ProfileContentContainer = styled.div`
  text-align: center;
`;
const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const AboutContainer = styled.div`
  text-align: justify;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const AboutContentContainer = styled.ul`
  list-style-type: none;
  font-weight: 500;
  font-size: 1.5rem;
`;

const AboutContent = styled.li`
  position: relative;
  padding-left: 2.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 700;
  opacity: 0.85;

  @media (min-width: 1024px) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    // background-image: ${pythonLogo};
    background-image: url(${pythonLogo});
    background-repeat: no-repeat;
    margin-right: 10px;
  }
`;

function ProfileAbout() {
  const contacts = [
    {
      redirectLink: "https://www.linkedin.com/in/vinoth-kumar-m-892132209/",
      iconSourceLink: `${contactIcons}#linkedin`,
      container: true,
    },
    {
      redirectLink: "https://github.com/vinoth-akithon",
      iconSourceLink: `${contactIcons}#github`,
      container: true,
    },
    {
      redirectLink: "https://wa.me/+918610863313",
      iconSourceLink: `${contactIcons}#whatsapp`,
      container: true,
    },
    {
      redirectLink:
        "mailto:vinoth.akithon@gmail.com?subject=Hello&body=Hi%20Vinoth,%0D%0AI%20hope%20you%20are%20doing%20well.",
      iconSourceLink: `${contactIcons}#mail`,
      container: true,
    },
    {
      redirectLink: "https://maps.app.goo.gl/dB31ewjxkTV35rf16",
      iconSourceLink: `${contactIcons}#location`,
      container: true,
    },
  ];
  const aboutContent = [
    "Experienced backend developer with over 2 years in Python, Flask, and Django.",
    "Skilled in MongoDB and AWS for robust database management and scalable app hosting.",
    "Able to design software apps using various patterns, prioritizing performance, modularity, scalabilitya and industry standards.",
    "Proficient in algorithms for effective problem-solving.",
    "Dedicated to delivering high-quality results and contributing effectively to dynamic teams.",
    "Solid grasp of front-end tech, agile, payment gateways and various software developement tools.",
    "Eager learner adaptable to emerging tech.",
  ];

  return (
    <Container className="grid grid--1x2">
      <ProfileContainer data-aos="flip-left" data-aos-duration="2000">
        <ImageContainer className="profile__image-container">
          <img src={profileImg} alt="" width="100%" />
        </ImageContainer>
        <ProfileContentContainer className="profile__content-container">
          <Name className="profile__content-name">VINOTH KUMAR M</Name>
          <Role className="profile__content-role">
            Python Backend Developer
          </Role>
          <Contacts>
            {contacts.map((item, index) => (
              <ClickableIcon key={index} {...item} />
            ))}
          </Contacts>
        </ProfileContentContainer>
      </ProfileContainer>
      <AboutContainer className="about">
        <SectionHeader headerText={"About Me"} />
        <AboutContentContainer data-aos="fade-left" data-aos-duration="1000">
          {aboutContent.map((item, index) => (
            <AboutContent key={index}>{item}</AboutContent>
          ))}
        </AboutContentContainer>
      </AboutContainer>
    </Container>
  );
}

export default ProfileAbout;
