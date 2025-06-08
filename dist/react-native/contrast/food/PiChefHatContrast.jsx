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
 * Pichefhatcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichefhatcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chef hat icon",
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
    <path d="M10 17h4m-4 0v-3m0 3H7m7 0v-5m0 5h3m0 0v1.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H9.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C7 19.861 7 19.441 7 18.6V17m10 0v-2.027a4.5 4.5 0 1 0-1.116-8.931 4.002 4.002 0 0 0-7.768 0A4.5 4.5 0 1 0 7 14.972V17" />
    <path
      fill={color}
      d="M15.885 6.042a4.002 4.002 0 0 0-7.77 0A4.5 4.5 0 1 0 7 14.972V21h10.001v-6.027a4.5 4.5 0 1 0-1.116-8.931"
      opacity={0.28}
    />
  </Svg>
);

export default Pichefhatcontrast;
