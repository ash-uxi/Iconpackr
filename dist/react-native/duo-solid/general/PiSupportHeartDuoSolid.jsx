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
 * Pisupportheartduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisupportheartduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "support heart icon",
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
      d="M1 12a3 3 0 1 1 6 0v5a3 3 0 1 1-6 0zM14.806 2.858c.475-.27.998-.364 1.47-.358 1.492.02 3.167 1.162 3.167 3.024 0 1.64-1.115 2.909-2.042 3.679a9 9 0 0 1-1.392.947 6 6 0 0 1-.561.27c-.082.034-.17.066-.255.092-.063.018-.211.06-.383.06s-.32-.042-.384-.06a3 3 0 0 1-.255-.091 6 6 0 0 1-.561-.271 9 9 0 0 1-1.393-.947c-.926-.77-2.041-2.038-2.041-3.679 0-1.852 1.665-3.024 3.18-3.024.452 0 .973.09 1.45.358"
    />{" "}
    <path
      d="M15.423 14h4.472c1.363 0 3.467 1.687 1.95 2.997C17.5 21 10.5 21 6 16.914M15.423 14q.194.236.334.514A1.027 1.027 0 0 1 14.838 16H10m5.423-2a2.74 2.74 0 0 0-2.116-1h-1.122a.8.8 0 0 1-.35-.083 10.47 10.47 0 0 0-5.839-1.04Q6 11.937 6 12v4.914m0 0V17"
      opacity={0.28}
    />
  </Svg>
);

export default Pisupportheartduosolid;
