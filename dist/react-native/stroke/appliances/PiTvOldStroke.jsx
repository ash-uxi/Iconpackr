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
 * Pitvoldstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitvoldstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "tv old icon",
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
      d="M15.0001 18H15.0101M18.0001 18H18.0101M6.12012 2L12.0001 5L18.0001 2"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M17 8H7C6.44772 8 6 8.44772 6 9V14C6 14.5523 6.44772 15 7 15H17C17.5523 15 18 14.5523 18 14V9C18 8.44772 17.5523 8 17 8Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18 5H6C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitvoldstroke;
