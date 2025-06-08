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
 * Pitextquotesopenduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextquotesopenduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text quotes open icon",
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
      d="M14 13.9985C14 10.8159 15.5807 8.00242 17.9999 6.30041M4 13.9985C4 10.8159 5.58071 8.00242 7.99988 6.30041"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M14 13.9988C14 12.342 15.3432 10.9985 17 10.9985C18.6568 10.9985 20 12.3416 20 13.9985C20 15.6554 18.6568 16.9985 17 16.9985C15.3432 16.9985 14 15.6557 14 13.9988Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 13.9988C4 12.342 5.3431 10.9985 7 10.9985C8.6569 10.9985 10 12.3416 10 13.9985C10 15.6554 8.6569 16.9985 7 16.9985C5.3431 16.9985 4 15.6557 4 13.9988Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitextquotesopenduostroke;
