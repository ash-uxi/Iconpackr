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
 * Pitimeroffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitimeroffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "timer off icon",
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
    <g fill={color || "#000"} opacity={0.28}>
      {" "}
      <path d="M10 1a1 1 0 0 0 0 2h1v2.055A9 9 0 0 0 4.611 19.14a1 1 0 0 0 1.528.135L17.275 8.14a1 1 0 0 0-.135-1.528A8.96 8.96 0 0 0 13 5.055V3h1a1 1 0 1 0 0-2zM20.08 10.03a1 1 0 0 0-1.605-.265l-10.71 10.71a1 1 0 0 0 .265 1.604A9 9 0 0 0 20.08 10.03" />{" "}
    </g>{" "}
    <path d="M22 2 2 22" />
  </Svg>
);

export default Pitimeroffduosolid;
