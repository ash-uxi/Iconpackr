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
 * Pidoorcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoorcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "door icon",
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
    <path d="M10 12H8M2 21h20" />
    <path
      fill={color}
      d="M5 17V7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 3 7.6 3 9 3h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 4.9 19 5.6 19 7v10c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.1 21 16.4 21 15 21H9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C5 19.1 5 18.4 5 17"
      opacity={0.28}
    />
    <path d="M5 21V7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 3 7.6 3 9 3h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 4.9 19 5.6 19 7v14" />
    <path d="M9 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
  </Svg>
);

export default Pidoorcontrast;
