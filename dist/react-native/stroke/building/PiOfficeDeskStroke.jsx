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
 * Piofficedeskstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piofficedeskstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "office desk icon",
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
    <path d="M16 13H18" stroke={color} strokeWidth="2" fill="none" />
    <path d="M16 9H18" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M21 5V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H16.2C15.0799 19 14.5198 19 14.092 18.782C13.7157 18.5903 13.4097 18.2843 13.218 17.908C13 17.4802 13 16.9201 13 15.8V9M21 5H13M21 5H22M3 5H13M3 5H2M3 5V9M13 5V9M3 19V9M3 9H13"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piofficedeskstroke;
