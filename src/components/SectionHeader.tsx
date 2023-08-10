import styled from "styled-components";
import constants from "../constants";

interface sectionHeader {
  headerText: string;
}

const SectionHeading = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  margin: 3rem 0;
  letter-spacing: 4px;
  display: inline-block;
  background-color: ${constants.primaryColor};
  color: ${constants.secondaryColor};
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  //   border-radius: 10px 0 0 10px;
  position: relative;
  &::after {
    clip-path: polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%, 0% 0%);
    content: "";
    position: absolute;
    width: 5rem;
    background-color: ${constants.primaryColor};
    top: 0;
    bottom: 0;
    left: 100%;
  }
`;

function SectionHeader({ headerText }: sectionHeader) {
  return (
    <SectionHeading>
      {headerText}
    </SectionHeading>
  );
}

export default SectionHeader;
