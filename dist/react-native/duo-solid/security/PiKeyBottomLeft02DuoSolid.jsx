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
 * Pikeybottomleft02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeybottomleft02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key bottom left02 icon",
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
      d="M11.063 10.61a1 1 0 0 1-.24-.39 5.5 5.5 0 1 1 3.457 3.458 1 1 0 0 1-.389-.24l-1.745 1.744h-1.62a.5.5 0 0 0-.5.5v1.621l-2.122 2.122H5.075v-2.829z"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="m11.44 10.232-6.365 6.364v2.829h2.83l2.12-2.122v-1.621a.5.5 0 0 1 .5-.5h1.621l2.122-2.121" />{" "}
    <path
      strokeWidth="2.2"
      d="M17.45 8.464 16.036 7.05a1.25 1.25 0 0 1 1.414 1.414"
    />
  </Svg>
);

export default Pikeybottomleft02duosolid;
