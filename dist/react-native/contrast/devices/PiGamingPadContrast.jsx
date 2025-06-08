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
 * Pigamingpadcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigamingpadcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "gaming pad icon",
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
      d="M22 16.91v-5.243A6.667 6.667 0 0 0 15.333 5H8.667A6.667 6.667 0 0 0 2 11.667v5.243a3.09 3.09 0 0 0 5.854 1.382L8 18a3.62 3.62 0 0 1 3.236-2h1.528c1.37 0 2.623.774 3.236 2l.146.292A3.09 3.09 0 0 0 22 16.91"
      opacity={0.28}
    />
    <path d="M8 13v-2m0 0V9m0 2H6m2 0h2m5.01-2-.01.001M18.01 12l-.01.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.62 3.62 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667" />
  </Svg>
);

export default Pigamingpadcontrast;
