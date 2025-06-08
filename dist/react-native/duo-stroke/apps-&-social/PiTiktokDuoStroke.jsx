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
 * Pitiktokduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitiktokduostroke = ({
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
      d="M13.9888 2L14.8385 3.91194C15.6954 5.83992 17.4632 7.2087 19.5443 7.55556"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M13.989 2V17.5556C13.989 20.0102 11.9991 22 9.54454 22C7.08994 22 5.1001 20.0102 5.1001 17.5556C5.1001 15.101 7.08994 13.1111 9.54454 13.1111"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pitiktokduostroke;
