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
 * Piuserloveheartcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserloveheartcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user love heart icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 21.32c.4 0 4-1.945 4-4.667 0-1.361-1.2-2.316-2.4-2.333-.6-.009-1.2.194-1.6.777-.4-.583-1.01-.777-1.6-.777-1.2 0-2.4.972-2.4 2.333 0 2.722 3.6 4.666 4 4.666M8 15h2.188v.237A5.3 5.3 0 0 0 10 16.653c0 1.508.544 2.777 1.227 3.779V21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4" />
    </g>
    <path d="M10.402 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h1.215M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m1 14.32c-.4 0-4-1.945-4-4.667 0-1.361 1.2-2.333 2.4-2.333.59 0 1.2.194 1.6.777.4-.583 1-.786 1.6-.777 1.2.016 2.4.972 2.4 2.333 0 2.722-3.6 4.666-4 4.666" />
  </Svg>
);

export default Piuserloveheartcontrast;
