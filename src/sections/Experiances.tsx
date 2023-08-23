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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis, cupiditate.",
      ],
    },
    {
      role: "Backend Developer",
      duration: "May 2022 - Sep 2022",
      companyName: "Bon AI Solutions, Thiruchirappalli, Tamil Nadu, India.",
      contribution: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis, cupiditate.",
      ],
    },
    {
      role: "Software Engineer",
      duration: "Feb 2022 - April 2022",
      companyName: "Artifintel Private Limited, Chennai, Tamil Nadu, India.",
      contribution: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis, cupiditate.",
      ],
    },
    {
      role: "Software Engineer Trainee",
      duration: "Oct 2021 - Jan 2022",
      companyName: "Artifintel Private Limited, Chennai, Tamil Nadu, India.",
      contribution: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis, cupiditate.",
      ],
    },
    {
      role: "Software Engineer Intern",
      duration: "May 2021 - Sep 2021",
      companyName: "Artifintel Private Limited, Chennai, Tamil Nadu, India.",
      contribution: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis, cupiditate.",
      ],
    },
  ];
  return (
    <>
      <SectionHeader headerText={"Experience"} />
      <Container>
        {ExperianceCards.map((item, index) => {
          const cardSide = index % 2 == 0 ? "left" : "right";
          return (
            <div
              key={index}
              className={`timeline__container ${cardSide}`}
              // data-aos={`fade-${cardSide == "left" ? "right" : "left"}`}
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
