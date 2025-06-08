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
 * Pialarmpluscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialarmpluscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "alarm plus icon",
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
      d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      opacity={0.28}
    />
    <path d="M5 3 2 6m17-3 3 3M12 16v-3m0 0v-3m0 3H9m3 0h3m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
  </Svg>
);

export default Pialarmpluscontrast;
