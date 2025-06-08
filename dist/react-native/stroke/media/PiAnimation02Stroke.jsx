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
 * Pianimation02stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pianimation02stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "animation02 icon",
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
      d="M2 14C4.76142 14 7 16.2386 7 19V18C7 14.373 9.14554 11.247 12.2367 9.82218M19 11C17.3431 11 16 9.65685 16 8C16 6.34315 17.3431 5 19 5C20.6569 5 22 6.34315 22 8C22 9.65685 20.6569 11 19 11Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pianimation02stroke;
