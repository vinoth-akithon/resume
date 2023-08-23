import SectionHeader from "../components/SectionHeader";
import AwardCard from "../components/AwardCard";

function Awards() {
  const AwardLists = [
    {
      videoSource: "https://www.youtube.com/embed/BgOLFt8keJM",
      highLights: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        
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
