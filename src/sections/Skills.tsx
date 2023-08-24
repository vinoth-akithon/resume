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
import linuxSkill from "../assets/images/linux.webp";
import mongodbSkill from "../assets/images/mongodb.webp";
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
        "Proficient in writing efficient and clean Python code.",
        "Skilled in implementing algorithms and data structures in Python.",
        "Excellent in Object Oriented Programming paradigm.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
      skillImageUrl: javascriptSkill,
      skillTitle: "javascript",
      skillText: [
        "Proficient in writing modern JavaScript code for both front-end and back-end applications.",
        "Skilled in asynchronous programming, handling events, and working with APIs.",
      ],
    },
    {
      cardColor:
        "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);",
      skillImageUrl: typescriptSkill,
      skillTitle: "typescript",
      skillText: [
        "Proficient in writing type-safe and statically-typed code using TypeScript.",
        "Skilled in leveraging TypeScript's features for improved code quality and maintainability.",
      ],
    },
    {
      cardColor:
      "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);",
      skillImageUrl: awsSkill,
      skillTitle: "aws",
      skillText: [
        "Proficient in deploying applications on AWS using services like EC2, S3, and RDS.",
        "Experienced in setting up and managing scalable and reliable cloud infrastructures.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% );",
      skillImageUrl: flaskSkill,
      skillTitle: "flask",
      skillText: [
        "Experienced in creating RESTful APIs and integrating database systems.",
        "Skilled in routing, template rendering, and enhancing app functionality with extensions.",
      ],
    },
    {
      cardColor:
        "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);",
      skillImageUrl: mongodbSkill,
      skillTitle: "mongodb",
      skillText: [
        "Proficient in designing and implementing MongoDB database structures.",
        "Experienced in querying (aggregation) and indexing data efficiently using MongoDB.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 173.1deg,  rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3% );",
      skillImageUrl: apiSkill,
      skillTitle: "Rest API",
      skillText: [
        "Proficient in designing and developing RESTful APIs for web applications.",
        "Skilled in versioning, documentation, and best practices for building scalable APIs.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );",
      skillImageUrl: djangoSkill,
      skillTitle: "django",
      skillText: [
        "Experienced in building RESTful APIs, working with models, and ORM.",
        "Skilled in authentication, routing, and enhancing app functionality with third-party packages.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% );",
      skillImageUrl: htmlSkill,
      skillTitle: "html",
      skillText: [
        "Proficient in writing semantic and accessible HTML markup.",
        "Skilled in working with forms, multimedia elements, and optimizing page performance and best practices.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% );",
      skillImageUrl: cssSkill,
      skillTitle: "css",
      skillText: [
        "Proficient in styling web pages with CSS for a visually appealing and responsive design.",
        "Skilled in layout techniques, flexbox, and CSS grid for creating dynamic layouts.",
      ],
    },
    {
      cardColor:
        "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);",
      skillImageUrl: reactSkill,
      skillTitle: "react",
      skillText: [
        "Proficient in building dynamic and interactive user interfaces.",
        "Skilled in component-based architecture, routing, and integrating third-party libraries.",
      ],
    },
    {
      cardColor:
        "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
      skillImageUrl: nodeSkill,
      skillTitle: "node js",
      skillText: [
        "Proficient in building server-side applications using Node.js.",
        "Skilled in asynchronous programming, handling middleware, and working with databases.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 105.5deg,  rgba(31,212,248,1) 11%, rgba(218,15,183,1) 74.9% );",
      skillImageUrl: expressSkill,
      skillTitle: "express",
      skillText: [
        "Proficient in building web applications and APIs using Express.js framework.",
        "Experienced in routing, middleware, and handling HTTP requests and responses.",
      ],
    },
    
    {
      cardColor:
        "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);",
      skillImageUrl: sqlSkill,
      skillTitle: "sql",
      skillText: [
        "Proficient in designing and querying relational databases using SQL.",
        "Experienced in creating complex database queries and optimizing query performance.",
      ],
    },
    {
      cardColor:
        "linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);",
      skillImageUrl: dockerSkill,
      skillTitle: "docker",
      skillText: [
        "Proficient in containerization and using Docker to deploy applications.",
        "Experienced in creating Docker images, containers, and managing Docker networks.",
      ],
    },
    {
      cardColor:
        "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
      skillImageUrl: testingSkill,
      skillTitle: "Automation Testing",
      skillText: [
        "Proficient in writing unit tests and integration tests to ensure code quality.",
        "Skilled in test-driven development (TDD) to build reliable and maintainable code.",
      ],
    },
    {
      cardColor:
        "radial-gradient( circle 763px at 18.3% 24.1%,  rgba(255,249,137,1) 7.4%, rgba(226,183,40,1) 58.3% );",
      skillImageUrl: linuxSkill,
      skillTitle: "Bash",
      skillText: [
        "Proficient in working with Unix and Unix-like operating systems.",
        "Experienced in command-line navigation, scripting, cron and system administration.",
      ],
    },
    
    {
      cardColor:
        "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);",
      skillImageUrl: stripeSkill,
      skillTitle: "stripe",
      skillText: [
        "Proficient in integrating Stripe for online payment processing and subscription management.",
        "Experienced in setting up payment gateways, handling transactions, and managing customers.",
      ],
    },
    {
      cardColor:
        "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);",
      skillImageUrl: razorpaySkill,
      skillTitle: "razorpay",
      skillText: [
        "Proficient in integrating Razorpay for online payment processing and invoicing.",
        "Experienced in implementing secure payment flows and managing customers.",
      ],
    },
    {
      cardColor:
        "linear-gradient( 103.3deg,  rgba(252,225,208,1) 30%, rgba(255,173,214,1) 55.7%, rgba(162,186,245,1) 81.8% );",
      skillImageUrl: gitSkill,
      skillTitle: "git",
      skillText: [
        "Proficient in version control using Git and GitHub for collaborative software development.",
        "Experienced in branching, merging, and resolving merge conflicts and github pages.",
      ],
    },

    {
      cardColor:
        "radial-gradient( circle 780.6px at 10% 20%,  rgba(133,255,189,1) 0%, rgba(255,251,125,1) 90.7% );",
      skillImageUrl: arduinoSkill,
      skillTitle: "arduino",
      skillText: [
        "Experienced in programming microcontrollers, sensors, and actuators.",
        "Skilled in integrating Arduino with IoT platforms and creating interactive applications.",
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
          fade: true,
        },
      },
    ],
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
