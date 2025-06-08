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
 * Piacwaterstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacwaterstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac water icon",
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
      d="M18 8H16M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22ZM19.8 19.2C19.8 20.7464 18.5464 22 17 22C15.4536 22 14.2 20.7464 14.2 19.2C14.2 17.6536 16.3 15 17 15C17.7 15 19.8 17.6536 19.8 19.2Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piacwaterstroke;
