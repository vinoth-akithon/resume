import styled from "styled-components";

interface ExperianceCardProps {
  role: string;
  duration: string;
  companyName: string;
  contribution: string[];
}

const Container = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: inset 0 0 10px rgba(11, 22, 63, 0.5),
    0 0 2px rgba(11, 22, 63, 0.5);
`;

const Company = styled.h4`
  font-style: italic;
  font-size: 1.6rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Contribution = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.8rem;
  font-size: 1.6rem;
`;

const Role = styled.h3`
  font-size: 2.4rem;
  gap: 0.5rem 0;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    grid-template-columns: 1fr auto;
  }
`;

const Duration = styled.span`
  background-color: var(--color-primary);
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  justify-self: end;
  align-self: baseline;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

function ExperianceCard({
  role,
  duration,
  companyName,
  contribution,
}: ExperianceCardProps) {
  return (
    <Container>
      <Role className="grid grid--1x2">
        {role} <Duration>{duration}</Duration>
      </Role>
      <Company>{companyName}</Company>
      <Contribution>
        {contribution.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Contribution>
    </Container>
  );
}

export default ExperianceCard;
