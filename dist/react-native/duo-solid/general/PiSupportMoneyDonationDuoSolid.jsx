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
 * Pisupportmoneydonationduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisupportmoneydonationduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "support money donation icon",
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
      d="M13.5 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
    />{" "}
    <path
      d="M15.423 14h4.472c1.363 0 3.467 1.687 1.95 2.997C17.5 21 10.5 21 6 16.914M15.423 14q.194.236.334.514A1.027 1.027 0 0 1 14.838 16H10m5.423-2a2.74 2.74 0 0 0-2.116-1h-1.122a.8.8 0 0 1-.35-.083 10.47 10.47 0 0 0-5.839-1.04Q6 11.937 6 12v4.914m0 0V17"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M20.072 2.807a1 1 0 0 0-1.144 1.64 2.5 2.5 0 0 1-1.07 4.527 1 1 0 0 0 .284 1.98 4.5 4.5 0 0 0 1.93-8.147M4 9a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0v-5a3 3 0 0 0-3-3"
    />
  </Svg>
);

export default Pisupportmoneydonationduosolid;
