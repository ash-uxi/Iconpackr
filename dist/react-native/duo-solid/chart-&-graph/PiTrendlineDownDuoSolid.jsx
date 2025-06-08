import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Pitrendlinedownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrendlinedownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trendline down icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      d="m2 7.148.73.937a21.8 21.8 0 0 0 6.61 5.664c.316.176.715.08.916-.222l3.212-4.818a.64.64 0 0 1 .926-.15 20 20 0 0 1 4.848 5.45"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M22.512 11.316a1 1 0 0 1 .479.978 18.3 18.3 0 0 1-1.188 4.632 1.476 1.476 0 0 1-1.578.911 18.3 18.3 0 0 1-4.606-1.287 1 1 0 0 1-.03-1.826l1.274-.595a22.7 22.7 0 0 0 3.41-1.968l1.152-.806a1 1 0 0 1 1.087-.039"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pitrendlinedownduosolid;
