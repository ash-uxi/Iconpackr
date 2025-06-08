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
 * Pigaugeleftupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigaugeleftupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "gauge left up icon",
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
      fill={color || "#000"}
      fillRule="evenodd"
      d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.605 22.15 12 17.606 1.85 12 1.85"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="m7.996 7.997 4.623 3.468a.833.833 0 0 1 .088 1.243.833.833 0 0 1-1.242-.088z" />
  </Svg>
);

export default Pigaugeleftupduosolid;
