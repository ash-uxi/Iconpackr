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
 * Pistrikethroughduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistrikethroughduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "strike through icon",
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
      d="M12 12C14.2712 12 17 12.4351 17 15.8679C17 20.9381 8.33063 21.3742 7.14564 17M7 8.13207C7 3.06192 15.6694 2.62579 16.8544 7"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path d="M21 12H3" stroke={color || "#000"} strokeWidth="2" fill="none" />
  </Svg>
);

export default Pistrikethroughduostroke;
