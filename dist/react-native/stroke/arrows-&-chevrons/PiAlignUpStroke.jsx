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
 * Pialignupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align up icon",
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
      d="M16 12.0309C14.9414 10.5767 13.7046 9.2706 12.3211 8.14486C12.2025 8.04828 12.0596 8 11.9167 8M7.83333 12.0309C8.89198 10.5767 10.1287 9.2706 11.5122 8.14486C11.6309 8.04828 11.7738 8 11.9167 8M11.9167 8L11.9167 20M19 4H5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialignupstroke;
