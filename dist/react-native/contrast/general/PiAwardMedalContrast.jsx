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
 * Piawardmedalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piawardmedalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "award medal icon",
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
    <path d="M16.365 14.472 18 22c-4.286-2.664-7.714-2.664-12 0l1.635-7.528m8.73 0a7 7 0 1 0-8.73 0m8.73 0A6.97 6.97 0 0 1 12 16a6.97 6.97 0 0 1-4.365-1.528" />
    <path
      fill={color}
      d="M19 9a6.99 6.99 0 0 1-2.635 5.472A6.97 6.97 0 0 1 12 16a6.97 6.97 0 0 1-4.365-1.528A7 7 0 1 1 19 9"
      opacity={0.28}
    />
  </Svg>
);

export default Piawardmedalcontrast;
