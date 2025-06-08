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
 * Pitickettokenduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitickettokenduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ticket token icon",
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
    <path d="M10 5v1.102m0 3.3v1m0 3.299v1M10 18v1" />{" "}
    <path
      fill={color || "#000"}
      d="M6 3a5 5 0 0 0-5 5v.4A1.6 1.6 0 0 0 2.6 10 1.4 1.4 0 0 1 4 11.4v1.2A1.4 1.4 0 0 1 2.6 14 1.6 1.6 0 0 0 1 15.6v.4a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-.4a1.6 1.6 0 0 0-1.6-1.6 1.4 1.4 0 0 1-1.4-1.4v-1.2a1.4 1.4 0 0 1 1.4-1.4A1.6 1.6 0 0 0 23 8.4V8a5 5 0 0 0-5-5z"
      opacity={0.28}
    />
  </Svg>
);

export default Pitickettokenduosolid;
