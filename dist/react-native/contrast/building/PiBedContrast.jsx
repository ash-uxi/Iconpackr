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
 * Pibedcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibedcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bed icon",
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
    <path d="M12 6v5" />
    <path
      fill={color}
      d="M3 13.5A2.5 2.5 0 0 1 5.5 11h13a2.5 2.5 0 0 1 2.5 2.5V18H3z"
      opacity={0.28}
    />
    <path d="M3 18h18M3 20v-6.5A2.5 2.5 0 0 1 5.5 11h13a2.5 2.5 0 0 1 2.5 2.5V20M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
  </Svg>
);

export default Pibedcontrast;
