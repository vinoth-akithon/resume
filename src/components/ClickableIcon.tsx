
interface ClickableIconProps {
  redirectLink: string;
  iconSourceLink: string;
  title?: string;
  width?: string;
  height?: string;
  target?: string;
  container?: boolean;
}

function ClickableIcon({
  redirectLink,
  iconSourceLink,
  title = "",
  width = "20px",
  height = "20px",
  target = "_blank",
  container = false
}: ClickableIconProps) {
  return (
    <>
      <a
        className= {container ? "icon-container" : undefined}
        title={title}
        href={redirectLink}
        target={target}
      >
        <svg className="icon" style={{ width, height }}>
          <use xlinkHref={iconSourceLink}></use>
        </svg>
      </a>
    </>
  );
}

export default ClickableIcon;
