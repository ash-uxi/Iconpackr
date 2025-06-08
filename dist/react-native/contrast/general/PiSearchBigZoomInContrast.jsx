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
 * Pisearchbigzoomincontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisearchbigzoomincontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "search big zoom in icon",
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
    <path d="M17.51 17.51A8.5 8.5 0 1 0 5.49 5.49a8.5 8.5 0 0 0 12.02 12.02m0 0L21 21m-9.5-6.5v-3m0 0v-3m0 3h-3m3 0h3" />
    <path
      fill={color}
      d="M20 11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pisearchbigzoomincontrast;
