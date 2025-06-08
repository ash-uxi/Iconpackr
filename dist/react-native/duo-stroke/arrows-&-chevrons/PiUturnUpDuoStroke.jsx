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
 * Piuturnupduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnupduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn up icon",
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
      d="M16 4V15C16 17.7614 13.7614 20 11 20C8.23858 20 6 17.7614 6 15V12"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M20.0832 8.03089C19.0245 6.57669 17.7878 5.2706 16.4043 4.14485C16.2856 4.04828 16.1427 4 15.9998 4C15.8569 4 15.7141 4.04828 15.5954 4.14485C14.2119 5.2706 12.9752 6.57669 11.9165 8.03089"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuturnupduostroke;
