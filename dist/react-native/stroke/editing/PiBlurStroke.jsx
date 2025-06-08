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
 * Piblurstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piblurstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "blur icon",
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
      d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M15 20H15.01" stroke={color} strokeWidth="2" fill="none" />
    <path d="M15 4H15.01" stroke={color} strokeWidth="2" fill="none" />
    <path d="M20 15H20.01" stroke={color} strokeWidth="2" fill="none" />
    <path d="M20 9H20.01" stroke={color} strokeWidth="2" fill="none" />
    <path d="M4 15H4.01" stroke={color} strokeWidth="2" fill="none" />
    <path d="M4 9H4.01" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 16C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M9 20H9.01" stroke={color} strokeWidth="2" fill="none" />
    <path d="M9 4H9.01" stroke={color} strokeWidth="2" fill="none" />
  </Svg>
);

export default Piblurstroke;
