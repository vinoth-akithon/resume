interface ClickableIconProps {
  iconSourceLink: string;
  title?: string;
  width?: string;
  height?: string;
}

function ClickableIcon({
  iconSourceLink,
  title = "",
  width = "30px",
  height = "30px",
}: ClickableIconProps) {
  return (
    <>
      <span  title={title}>
        <svg className="icon" style={{ width, height }}>
          <use xlinkHref={iconSourceLink}></use>
        </svg>
      </span>
    </>
  );
}

export default ClickableIcon;
