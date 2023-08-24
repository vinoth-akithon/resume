import styled from "styled-components";
import ExperianceCard from "../components/ExperianceCard";
import SectionHeader from "../components/SectionHeader";

const Container = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: #b5b5b5;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  @media (max-width: 600px) {
    &::after {
      left: 4px;
    }
  }
`;

function Experience() {
  const ExperianceCards = [
    {
      role: "Backend Team Lead",
      duration: "Oct 2022 - Present",
      companyName: "Bon AI Solutions, Thiruchirappalli, Tamil Nadu, India.",
      contribution: [
        "Led and managed the backend team, ensuring efficient project execution.",
        "Collaborated with cross-functional teams to deliver high-quality solutions."
      ],
    },
    {
      role: "Backend Developer",
      duration: "May 2022 - Sep 2022",
      companyName: "Bon AI Solutions, Thiruchirappalli, Tamil Nadu, India.",
      contribution: [
        "Developed and optimized backend functionalities for web applications.",
        "Contributed to API development and database management."
      ],
    },
    {
      role: "Software Engineer",
      duration: "Feb 2022 - April 2022",
      companyName: "Artifintel Private Limited, Chennai, Tamil Nadu, India.",
      contribution: [
        "Implemented software solutions to meet project requirements.",
        "Collaborated with the team to troubleshoot and resolve issues."
      ],
    },
    {
      role: "Software Engineer Trainee",
      duration: "Oct 2021 - Jan 2022",
      companyName: "Artifintel Private Limited, Chennai, Tamil Nadu, India.",
      contribution: [
        "Gained hands-on experience in software development practices.",
        "Assisted in coding, testing, and debugging software modules."
      ],
    },
    {
      role: "Software Engineer Intern",
      duration: "Jun 2021 - Sep 2021",
      companyName: "Artifintel Private Limited, Chennai, Tamil Nadu, India.",
      contribution: [
        "Worked on various stages of software development life cycle.",
        "Supported the team in coding and testing of features."
      ],
    },
    {
      role: "Python Machine Learning Intern",
      duration: "May 2021 - May 2021",
      companyName: "Gateway Software Solutions, Gandhipuram, Tamil Nadu, India.",
      contribution: [
        "Gained insights into machine learning algorithms and techniques.",
      ],
    },
  ];
  return (
    <>
      <SectionHeader headerText={"Experiences"} />
      <Container>
        {ExperianceCards.map((item, index) => {
          const cardSide = index % 2 == 0 ? "left" : "right";
          return (
            <div
              key={index}
              className={`timeline__container ${cardSide}`}
              data-aos={`fade-top`}
              data-aos-duration="1000"
            >
              <ExperianceCard {...item} />
            </div>
          );
        })}
      </Container>
    </>
  );
}

export default Experience;