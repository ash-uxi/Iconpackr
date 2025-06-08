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
 * Piuseruser01contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseruser01contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user user01 icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 15H7a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6" />
    </g>
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 15H7a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6" />
  </Svg>
);

export default Piuseruser01contrast;
