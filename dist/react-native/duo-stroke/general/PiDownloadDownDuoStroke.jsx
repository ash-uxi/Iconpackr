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
 * Pidownloaddownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidownloaddownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "download down icon",
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
      d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9 12.1885C9.74024 13.1755 10.599 14.0668 11.5564 14.8426C11.6859 14.9475 11.843 15 12 15M15 12.1885C14.2598 13.1755 13.401 14.0668 12.4436 14.8426C12.3141 14.9475 12.157 15 12 15M12 15V4"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidownloaddownduostroke;
