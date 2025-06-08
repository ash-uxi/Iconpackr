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
 * Pieyeoncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieyeoncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "eye on icon",
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
    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path
      fill={color}
      d="M21 12c0 2-3.5 7-9 7s-9-5-9-7 3.5-7 9-7 9 5 9 7"
      opacity={0.28}
    />
    <path d="M21 12c0 2-3.5 7-9 7s-9-5-9-7 3.5-7 9-7 9 5 9 7" />
  </Svg>
);

export default Pieyeoncontrast;
