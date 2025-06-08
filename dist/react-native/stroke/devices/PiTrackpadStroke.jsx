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
 * Pitrackpadstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrackpadstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trackpad icon",
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
      d="M2 13H12M22 13H12M12 13V21"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="2"
      y="3"
      width="20"
      height="18"
      rx="4"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitrackpadstroke;
