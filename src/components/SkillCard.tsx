import styled from "styled-components";
import constants from "../constants";

interface SkillCard {
  skillImageUrl: string;
  cardColor: string;
  skillTitle: string;
  skillText: string[];
  className?: string
}

interface HeaderBackground {
  cardColor: string;
}

const SkillCardWraper = styled.div`
  max-width: 250px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:${constants.boxShadow};
  cursor: pointer;
  // transition: all 0.2s ease-in-out;
  // &:hover {
  //   transform: scale(1.1);
  // }
`;

const SkillHeader = styled.div<HeaderBackground>`
  height: 200px;
  border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
  display: grid;
  place-items: center;
  background-image: ${(props) => props.cardColor};
`;

const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
`;

const CardTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const SkillImage = styled.img`
  width: 100px;
  height: 100px;
`;

const CardText = styled.ul`
  font-size: 12px;
  margin-bottom: 20px;
  padding-left: 20px;
`;

function SkillCard({
  skillImageUrl,
  cardColor,
  skillTitle,
  skillText,
}: SkillCard) {
  return (
    <SkillCardWraper>
      <SkillHeader cardColor={cardColor}>
          <SkillImage src={skillImageUrl} alt="skill logo" />
      </SkillHeader>
      <SkillContent>
        <CardTitle>{skillTitle}</CardTitle>
        <CardText>
          {skillText.map((item, index) => (
            <li key={index} style={{marginBottom: "5px"}}>{item}</li>
          ))}
        </CardText>
      </SkillContent>
    </SkillCardWraper>
  );
}

export default SkillCard;
