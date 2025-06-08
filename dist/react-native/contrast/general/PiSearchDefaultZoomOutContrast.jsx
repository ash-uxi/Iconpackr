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
 * Pisearchdefaultzoomoutcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisearchdefaultzoomoutcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "search default zoom out icon",
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
    <path d="M14.95 14.95a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9m0 0L21 21M7.001 10h6" />
    <path
      fill={color}
      d="M17 10a6.98 6.98 0 0 1-2.05 4.95A7 7 0 1 1 17 10"
      opacity={0.28}
    />
  </Svg>
);

export default Pisearchdefaultzoomoutcontrast;
