import styled from "styled-components";
import constants from "../constants";
import pythonIcon from "../assets/icons/python.svg";

const AwardCardContainer = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: ${constants.boxShadow};
  padding: 2rem 0;
`;

const IFrame = styled.iframe`
  width: 95%;
  min-height: 300px;
  display: block;
  margin: 0 auto;
  border-radius: 2rem 2rem 0 0;
`;

const HighlightContainer = styled.ul`
  width: 95%;
  margin: 3rem auto;
  list-style-type: none;
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.95
`;

const HighLight = styled.li`
  position: relative;
  padding-left: 3rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  &::before {
    content: ""; 
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%); 
    width: 20px; 
    height: 20px; 
    background-image: url(${pythonIcon}); 
    background-repeat: no-repeat; 
    margin-right: 10px;
`;

type AwardCardDetails = {
  videoSource: string;
  highLights: string[];
};

interface AwardCardProps {
  details: AwardCardDetails;
}

function AwardCard({ details }: AwardCardProps) {
  const { videoSource, highLights } = details;

  return (
    <AwardCardContainer data-aos="zoom-in">
      <IFrame
        src={videoSource}
        title="Outstanding Performance Award"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <HighlightContainer>
        {highLights.map((item, index) => (
          <HighLight key={index}>{item}</HighLight>
        ))}
      </HighlightContainer>
    </AwardCardContainer>
  );
}

export default AwardCard;
