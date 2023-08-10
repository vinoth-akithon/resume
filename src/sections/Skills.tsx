import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import SkillCard from "../components/SkillCard";
import pythonSkill from "../assets/images/python.webp";
import javascriptSkill from "../assets/images/javascript.webp";
import htmlSkill from "../assets/images/html.webp";
import cssSkill from "../assets/images/css.webp";
import nodeSkill from "../assets/images/node.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Skills() {
  const skillCards = [
    {
      backgroundColor:
        "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
      skillImageUrl: pythonSkill,
      skillTitle: "python",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      backgroundColor:
        "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
      skillImageUrl: javascriptSkill,
      skillTitle: "javascript",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      backgroundColor:
        "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
      skillImageUrl: htmlSkill,
      skillTitle: "html",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      backgroundColor:
        "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
      skillImageUrl: cssSkill,
      skillTitle: "css",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      backgroundColor:
        "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
      skillImageUrl: nodeSkill,
      skillTitle: "node js",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
  ];
  const settings = {
    adaptiveHeight: true,
    swipeToSlide: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3, // Show 3 cards at a time on web view
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Show 1 card at a time on mobile
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 card at a time on mobile
          fade: true
        },
      },
    ]
  };

  return (
    <>
      <SectionHeader headerText={"Skills"} />
      <div className="carousel-container">
        <Slider {...settings}>
          {skillCards.map((card, index) => (
            <SkillCard
              key={index}
              skillImageUrl={card.skillImageUrl}
              backgroundColor={card.backgroundColor}
              skillTitle={card.skillTitle}
              skillText={card.skillText}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Skills;
