import colours from "../colours"

type AccentCircleProps = {
  primary: boolean,
  size: string,
};

const AccentCircle = ({primary, size}: AccentCircleProps) => {
  const radius = (size === "lg") ? 30 : ((size === "md") ? 20 : 15);

  return <svg height={(radius + 5) * 2} width={(radius + 5) * 2} xmlns="http://www.w3.org/2000/svg">
    <circle r={radius} cx={radius + 5} cy={radius + 5} fill={primary ? colours.teal : colours.purple}/>
  </svg>
};

export default AccentCircle;
