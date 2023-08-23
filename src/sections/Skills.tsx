import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../components/SectionHeader";
import SkillCard from "../components/SkillCard";
import pythonSkill from "../assets/images/python.webp";
import javascriptSkill from "../assets/images/javascript.webp";
import htmlSkill from "../assets/images/html.webp";
import cssSkill from "../assets/images/css.webp";
import nodeSkill from "../assets/images/node.webp";
import apiSkill from "../assets/images/api.webp";
import arduinoSkill from "../assets/images/arduino.webp";
import awsSkill from "../assets/images/aws.webp";
import djangoSkill from "../assets/images/django.webp";
import dockerSkill from "../assets/images/docker.webp";
import expressSkill from "../assets/images/express.webp";
import flaskSkill from "../assets/images/flask.webp";
import gitSkill from "../assets/images/git.webp";
import jsonSkill from "../assets/images/json.webp";
import jwtSkill from "../assets/images/jwt.webp";
import linuxSkill from "../assets/images/linux.webp";
import mongodbSkill from "../assets/images/mongodb.webp";
import postmanSkill from "../assets/images/postman.webp";
import razorpaySkill from "../assets/images/razorpay.webp";
import reactSkill from "../assets/images/react.webp";
import stripeSkill from "../assets/images/stripe.webp";
import sqlSkill from "../assets/images/sql.webp";
import testingSkill from "../assets/images/testing.webp";
import typescriptSkill from "../assets/images/typescript.webp";




function Skills() {
  const skillCards = [
    {
      cardColor:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );",
      skillImageUrl: pythonSkill,
      skillTitle: "python",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
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
      cardColor:
        "linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% );",
      skillImageUrl: htmlSkill,
      skillTitle: "html",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% );",
      skillImageUrl: cssSkill,
      skillTitle: "css",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 58.2deg,  rgba(40,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7% );",
      skillImageUrl: nodeSkill,
      skillTitle: "node js",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },

    {
      cardColor:
        "linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% );",
      skillImageUrl: sqlSkill,
      skillTitle: "sql",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(68,36,164,1) 3.7%, rgba(84,212,228,1) 92.7% );",
      skillImageUrl: dockerSkill,
      skillTitle: "docker",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 91deg,  rgba(72,154,78,1) 5.2%, rgba(251,206,70,1) 95.9% );",
      skillImageUrl: testingSkill,
      skillTitle: "Automation Testing",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(237,3,32,0.87) 20.8%, rgba(242,121,1,0.84) 74.4% );",
      skillImageUrl: awsSkill,
      skillTitle: "aws",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle 763px at 18.3% 24.1%,  rgba(255,249,137,1) 7.4%, rgba(226,183,40,1) 58.3% );",
      skillImageUrl: linuxSkill,
      skillTitle: "Bash Scripting",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 173.1deg,  rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3% );",
      skillImageUrl: apiSkill,
      skillTitle: "Rest API",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 129.1deg,  rgba(243,199,83,1) 26.8%, rgba(18,235,207,1) 114.1% );",
      skillImageUrl: typescriptSkill,
      skillTitle: "typescript",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% );",
      skillImageUrl: mongodbSkill,
      skillTitle: "mongodb",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% );",
      skillImageUrl: flaskSkill,
      skillTitle: "flask",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );",
      skillImageUrl: djangoSkill,
      skillTitle: "django",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },


    {
      cardColor:
        "radial-gradient( circle farthest-corner at 7.2% 13.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% );",
      skillImageUrl: jwtSkill,
      skillTitle: "jwt",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 178.9deg,  rgba(176,57,105,1) 5.1%, rgba(229,113,159,1) 109.3% );",
      skillImageUrl: stripeSkill,
      skillTitle: "stripe",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle 941px at 2.6% 6.8%,  rgba(124,74,228,0.81) 15.9%, rgba(249,208,40,0.70) 88.6% );",
      skillImageUrl: razorpaySkill,
      skillTitle: "razorpay",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% );",
      skillImageUrl: postmanSkill,
      skillTitle: "postman",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 89.9deg,  rgba(255,243,110,1) 16.9%, rgba(30,204,214,1) 55.1%, rgba(5,54,154,1) 90.7% );",
      skillImageUrl: reactSkill,
      skillTitle: "react",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 103.3deg,  rgba(252,225,208,1) 30%, rgba(255,173,214,1) 55.7%, rgba(162,186,245,1) 81.8% );",
      skillImageUrl: gitSkill,
      skillTitle: "git",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle 674px at 18.3% 77%,  rgba(139,186,244,1) 3.4%, rgba(15,51,92,1) 56.6% );",
      skillImageUrl: jsonSkill,
      skillTitle: "json",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle 780.6px at 10% 20%,  rgba(133,255,189,1) 0%, rgba(255,251,125,1) 90.7% );",
      skillImageUrl: arduinoSkill,
      skillTitle: "arduino",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 105.5deg,  rgba(31,212,248,1) 11%, rgba(218,15,183,1) 74.9% );",
      skillImageUrl: expressSkill,
      skillTitle: "express",
      skillText: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    }
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
              cardColor={card.cardColor}
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
