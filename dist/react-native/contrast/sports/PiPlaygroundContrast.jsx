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
 * Piplaygroundcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaygroundcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "playground icon",
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
      fill={color}
      d="M2 16V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3"
      opacity={0.28}
    />
    <path d="M2 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2m20-6h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m-10 0v4m0-4a3 3 0 1 1 0-6m0 6a3 3 0 1 0 0-6m0 0V5M2 8v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3" />
  </Svg>
);

export default Piplaygroundcontrast;
