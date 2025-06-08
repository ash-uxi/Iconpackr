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
 * Piresolutionqualityhqcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piresolutionqualityhqcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "resolution quality hq icon",
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
      d="M17 4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4"
      opacity={0.28}
    />
    <path d="M6.754 8.75v3.5m0 0h3.5m-3.5 0v3m3.5-3v-3.5m0 3.5v3m5.168-.923v1.531M7 4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m6.754 6.298a1.75 1.75 0 1 1 3.5 0v2.28a1.75 1.75 0 0 1-3.5 0z" />
  </Svg>
);

export default Piresolutionqualityhqcontrast;
