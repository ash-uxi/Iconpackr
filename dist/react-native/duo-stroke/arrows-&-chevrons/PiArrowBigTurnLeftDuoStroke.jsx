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
 * Piarrowbigturnleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigturnleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big turn left icon",
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
      d="M9.79883 5C7.34486 6.81482 5.14083 8.93491 3.24113 11.3066C3.07817 11.5101 2.99669 11.755 2.99669 12C2.99669 12.245 3.07817 12.4899 3.24113 12.6934C5.14083 15.0651 7.34486 17.1852 9.79883 19"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.79883 5C9.64458 6.33024 9.53444 7.6643 9.46842 9C17.0034 9 21.0034 11 21.0034 19C18.0034 15 14.0034 15 9.46842 15C9.53444 16.3357 9.64458 17.6698 9.79883 19"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowbigturnleftduostroke;
