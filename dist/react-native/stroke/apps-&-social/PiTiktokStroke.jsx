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
 * Pitiktokstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitiktokstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "tiktok icon",
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
      d="M19.5445 7.55556C17.4634 7.2087 15.6956 5.83992 14.8387 3.91194L13.989 2V17.5556C13.989 20.0102 11.9991 22 9.54454 22C7.08994 22 5.1001 20.0102 5.1001 17.5556C5.1001 15.101 7.08994 13.1111 9.54454 13.1111"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitiktokstroke;
