import pythonLogo from "../assets/images/python.webp";

interface SingleLogoProps {
  src: string;
  width: string;
  height: string;
}
function SingleLogo(props: SingleLogoProps) {
  return (
    <div>
      <img {...props} />
    </div>
  );
}

function LogoAnimation() {
    [...Array(5).keys()].map(() => pythonLogo)
  return (
    <>
      <div className="leaf">
        { [...Array(5).keys()].map(() => pythonLogo).map((item, index) => (
          <SingleLogo key={index} src={item} height="30px" width="30px" />
        ))}
      </div>
      <div className="leaf leaf2">
        { [...Array(5).keys()].map(() => pythonLogo).map((item, index) => (
          <SingleLogo key={index} src={item} height="30px" width="30px" />
        ))}
      </div>
    </>
  );
}

export default LogoAnimation;
