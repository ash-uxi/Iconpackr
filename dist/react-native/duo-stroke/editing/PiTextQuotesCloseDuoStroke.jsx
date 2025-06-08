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
 * Pitextquotescloseduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextquotescloseduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text quotes close icon",
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
      d="M10 10C10 13.1827 8.41929 15.9961 6.00012 17.6981M20 10C20 13.1827 18.4193 15.9961 16.0001 17.6981"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M10 9.99969C10 11.6565 8.65685 13 7 13C5.34315 13 4 11.6569 4 10C4 8.34315 5.34315 7 7 7C8.65685 7 10 8.34284 10 9.99969Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 9.99969C20 11.6565 18.6569 13 17 13C15.3431 13 14 11.6569 14 10C14 8.34315 15.3431 7 17 7C18.6569 7 20 8.34284 20 9.99969Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitextquotescloseduostroke;
