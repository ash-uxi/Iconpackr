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
 * Piarrowrightcircleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightcircleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right circle icon",
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
    <path d="M12.051 8a20.3 20.3 0 0 1 3.807 3.604A.63.63 0 0 1 16 12m-3.949 4a20.3 20.3 0 0 0 3.807-3.604A.63.63 0 0 0 16 12m0 0H8" />{" "}
    <path
      fill={color || "#000"}
      d="M22.15 12c0-5.606-4.544-10.15-10.15-10.15S1.85 6.394 1.85 12 6.394 22.15 12 22.15c5.605 0 10.15-4.544 10.15-10.15"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowrightcircleduosolid;
