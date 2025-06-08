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
 * Picodeaiduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picodeaiduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "code ai icon",
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
      fill={color || "#000"}
      fillRule="evenodd"
      d="M13.897 8.633a1 1 0 0 0-1.861 0c-.293.743-.566 1.19-.896 1.523-.329.332-.78.614-1.54.914a1 1 0 0 0 0 1.86c.76.3 1.211.582 1.54.914.33.332.603.78.896 1.523a1.001 1.001 0 0 0 1.86 0c.293-.743.566-1.19.896-1.523s.781-.614 1.541-.914a1 1 0 0 0 0-1.86c-.76-.3-1.211-.582-1.54-.914-.33-.332-.603-.78-.896-1.523M8.967 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />{" "}
    <path
      d="M8.466 4.188c-1.657 0-3 1.194-3 2.667V9.52c0 1.473-1.343 2.667-3 2.667 1.657 0 3 1.194 3 2.667v2.666c0 1.473 1.343 2.667 3 2.667m8-16c1.657 0 3 1.194 3 2.667V9.52c0 1.473 1.343 2.667 3 2.667-1.657 0-3 1.194-3 2.667v2.666c0 1.473-1.343 2.667-3 2.667"
      opacity={0.28}
    />
  </Svg>
);

export default Picodeaiduosolid;
