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
 * Pidatabasestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidatabasestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "database icon",
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
      d="M20 5.7V12M20 5.7C20 7.19117 16.4183 8.4 12 8.4C7.58172 8.4 4 7.19117 4 5.7M20 5.7C20 4.20883 16.4183 3 12 3C7.58172 3 4 4.20883 4 5.7M20 12V18.1312C20 19.7156 16.4183 21 12 21C7.58172 21 4 19.7156 4 18.1312V12M20 12C20 13.4912 16.4183 14.7 12 14.7C7.58172 14.7 4 13.4912 4 12M4 12V5.7M16 11H16.01M16 17H16.01"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidatabasestroke;
