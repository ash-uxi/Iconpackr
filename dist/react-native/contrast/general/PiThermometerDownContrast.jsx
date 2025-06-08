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
 * Pithermometerdowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithermometerdowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "thermometer down icon",
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
    <path d="M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7" />
    <path
      fill={color}
      d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z"
      opacity={0.28}
    />
    <path d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0zM7.572 10.019c-.634.846-1.37 1.61-2.19 2.275a.6.6 0 0 1-.381.135m-2.572-2.41c.635.846 1.371 1.61 2.192 2.275.11.09.245.135.38.135m0 0V6" />
  </Svg>
);

export default Pithermometerdowncontrast;
