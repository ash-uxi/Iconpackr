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
 * Piarrowleftcircleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftcircleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left circle icon",
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
      d="M1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.606 22.15 12 17.606 1.85 12 1.85 1.85 6.394 1.85 12"
      opacity={0.28}
    />{" "}
    <path d="M11.949 16a20.3 20.3 0 0 1-3.807-3.604A.63.63 0 0 1 8 12m3.949-4a20.3 20.3 0 0 0-3.807 3.604A.63.63 0 0 0 8 12m0 0h8" />
  </Svg>
);

export default Piarrowleftcircleduosolid;
