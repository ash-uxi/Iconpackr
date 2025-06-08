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
 * Pibottlesoapduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibottlesoapduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bottle soap icon",
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
      d="M18 15.9783C12 17.5862 11.7518 12.4367 6 14.4923V20.5C6 21.3284 6.67157 22 7.5 22L16.5 22C17.3284 22 18 21.3284 18 20.5V15.9783Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 8H15M9 8C7.34315 8 6 9.34315 6 11V15.75M9 8V6C9 5.44772 9.44772 5 10 5H12M15 8C16.6569 8 18 9.34315 18 11V15.75M15 8V6C15 5.44772 14.5523 5 14 5H12M12 2V5"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.5 2H16.4189C17.3631 2 18.2014 2.60421 18.5 3.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibottlesoapduostroke;
