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
 * Pilandlinephonecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilandlinephonecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "landline phone icon",
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
    <path d="M10 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9M13 14h1M13 17h1" />
    <path d="M13 7h5v4h-5zM17 14h1M17 17h1M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v13A2.5 2.5 0 0 1 7.5 21h-2A2.5 2.5 0 0 1 3 18.5z" />
    <path
      fill={color}
      d="M7.5 3A2.5 2.5 0 0 1 10 5.5V4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9v-1.5A2.5 2.5 0 0 1 7.5 21h-2A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3z"
      opacity={0.28}
    />
  </Svg>
);

export default Pilandlinephonecontrast;
