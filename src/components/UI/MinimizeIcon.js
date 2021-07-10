const MinimizeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="currentColor"
      className={`bi bi-dash-lg ${props.className}`}
      viewBox="0 0 16 16"
    >
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
    </svg>
  );
};
export default MinimizeIcon;
