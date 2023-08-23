import ExperianceCard from "../components/ExperianceCard";
import SectionHeader from "../components/SectionHeader";
import degreeImage from "../assets/images/ic.webp";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: inset 0 0 10px rgba(11, 22, 63, 0.5),
    0 0 2px rgba(11, 22, 63, 0.5);
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  padding: 1rem;
  width: 150px;
  height: 150px;
  justify-self: center;
`;

function Education() {
  const educationdetails = {
    degree: "Bachlor of Engineering in Electrical and Electronics",
    duration: "Sep 2017 - Aug 2021",
    collegeName: "OASYS Institute of Technology, Thiruchirappalli, Tamil Nadu, India",

  }
  return (
    <>
      <SectionHeader headerText="Education" />
      <Container>
        <ImageContainer>
          <img src={degreeImage} alt="" width="100%" height="100%" />
        </ImageContainer>
        <ExperianceCard
          role={educationdetails.degree}
          duration={educationdetails.duration}
          companyName={educationdetails.collegeName}
          contribution={[]}
          style={{ margin: "10px", boxShadow: "none", paddingTop: 0 }}
          durationPosition="center"
        />
      </Container>
    </>
  );
}

export default Education;
