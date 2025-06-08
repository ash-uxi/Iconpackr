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
 * Piarrowdowncircleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowdowncircleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow down circle icon",
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
      d="M12 22.15c5.606 0 10.15-4.544 10.15-10.15S17.606 1.85 12 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15"
      opacity={0.28}
    />{" "}
    <path d="M16 12.051a20.3 20.3 0 0 1-3.604 3.807A.63.63 0 0 1 12 16m-4-3.949a20.3 20.3 0 0 0 3.604 3.807A.63.63 0 0 0 12 16m0 0V8" />
  </Svg>
);

export default Piarrowdowncircleduosolid;
