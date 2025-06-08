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
 * Piacheatstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacheatstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac heat icon",
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
      d="M18 8H16M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22ZM17.2367 15C18.9127 16.5325 19.8157 17.6013 19.8157 19.4211C19.8157 20.8108 18.64 22 17.2367 22C15.8334 22 14.6578 20.8108 14.6578 19.4211C14.6578 18.9963 14.8173 18.5759 15.0262 18.3158C16.9332 19.6308 18.5055 17.1874 17.2367 15Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piacheatstroke;
