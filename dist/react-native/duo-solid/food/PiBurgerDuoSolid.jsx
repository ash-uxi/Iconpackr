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
 * Piburgerduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piburgerduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "burger icon",
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
      <path d="M18.613 4.284C20.454 5.149 22 6.605 22 8.757 22 10.079 20.856 11 19.64 11H4.36C3.145 11 2 10.079 2 8.757c0-2.152 1.546-3.608 3.387-4.473C7.247 3.411 9.653 3 12 3s4.753.41 6.613 1.284M2 17.6A1.6 1.6 0 0 1 3.6 16h16.8a1.6 1.6 0 0 1 1.6 1.6 3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 17.6" />{" "}
    </g>{" "}
    <path d="M20.334 13.5c-.948.667-2.386.667-3.334 0-.947-.667-2.386-.667-3.333 0s-2.386.667-3.333 0-2.386-.667-3.334 0c-.947.667-2.386.667-3.333 0" />
  </Svg>
);

export default Piburgerduosolid;
