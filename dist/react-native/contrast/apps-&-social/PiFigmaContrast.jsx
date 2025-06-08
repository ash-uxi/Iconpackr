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
 * Pifigmacontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifigmacontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "figma icon",
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7a3.5 3.5 0 1 1 0 7H12v10.5A3.5 3.5 0 1 1 8.5 16a3.5 3.5 0 1 1 0-7A3.5 3.5 0 0 1 5 5.5" />
      <path d="M12 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0" />
    </g>
    <path d="M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0v3.5A3.5 3.5 0 1 1 8.5 16m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
  </Svg>
);

export default Pifigmacontrast;
