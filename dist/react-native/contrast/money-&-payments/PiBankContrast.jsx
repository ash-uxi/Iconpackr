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
 * Pibankcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibankcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bank icon",
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
      d="M10.08 2.94c.688-.516 1.033-.775 1.41-.874a2 2 0 0 1 1.02 0c.377.1.722.358 1.41.874L22 9v1H2V9z"
      opacity={0.28}
    />
    <path d="M2 21h20M4 13v5m5-5v5m6-5v5m5-5v5m2-8H2V9l8.08-6.06c.688-.516 1.033-.775 1.41-.874a2 2 0 0 1 1.02 0c.377.1.722.358 1.41.874L22 9z" />
  </Svg>
);

export default Pibankcontrast;
