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
 * Piarrowturnupleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnupleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn up left icon",
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
    <path d="M8.351 9H12c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 12.8 20 14.2 20 17v3M8.351 9a24 24 0 0 1 .205-3.13c.062-.468.142-.935.303-1.87a25.2 25.2 0 0 0-4.684 4.505.79.79 0 0 0 0 .99A25.2 25.2 0 0 0 8.859 14c-.16-.935-.241-1.402-.303-1.87A24 24 0 0 1 8.351 9" />
    <path
      fill={color}
      d="M8.859 4a25.2 25.2 0 0 0-4.684 4.505.79.79 0 0 0 0 .99A25.2 25.2 0 0 0 8.859 14c-.16-.935-.241-1.402-.303-1.87a24 24 0 0 1 0-6.26c.062-.468.142-.935.303-1.87"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowturnupleftcontrast;
