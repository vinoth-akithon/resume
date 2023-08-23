import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./sections/Skills";
import Awards from "./sections/Awards";
import Experience from "./sections/Experiances";
import ProfileAbout from "./sections/ProfileAbout";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container">
        <ProfileAbout />
      <hr style={{ marginTop: "20px" }} />
        <Experience/>
      <hr style={{ marginTop: "20px" }} />
        <Skills />
      <hr style={{ margin: "50px 0 20px 0" }} />
        <Awards />
    </div>
  );
}

export default App;
