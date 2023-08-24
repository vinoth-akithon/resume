import SectionHeader from "../components/SectionHeader";
import AwardCard from "../components/AwardCard";

function Awards() {
  const AwardLists = [
    {
      videoSource: "https://www.youtube.com/embed/BgOLFt8keJM",
      highLights: [
        "Honored with the Outstanding Performance Award from Bon AI Solutions for demonstrating exemplary dedication, innovation, and contributions to the team and projects.",
        "This award recognizes my consistent commitment to excellence, problem-solving skills, and positive impact on the organization's success.",
        
    ],
    },
  ];
  return (
    <>
      <SectionHeader headerText={"awards"} />
      {AwardLists.map((item, index) => (
        <AwardCard key={index} details={item} />
      ))}
    </>
  );
}

export default Awards;
