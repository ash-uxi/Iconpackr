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
 * Pivercelcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivercelcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "vercel icon",
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
      d="M11.138 3.466a1 1 0 0 1 1.724 0l8.251 14.027A1 1 0 0 1 20.252 19H3.747a1 1 0 0 1-.862-1.507z"
      opacity={0.28}
    />
    <path d="M11.138 3.465a1 1 0 0 1 1.724 0l8.251 14.028A1 1 0 0 1 20.252 19H3.748a1 1 0 0 1-.862-1.507z" />
  </Svg>
);

export default Pivercelcontrast;
