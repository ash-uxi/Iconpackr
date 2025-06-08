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
 * Piuserplusduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserplusduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user plus icon",
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
      d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12V14H15C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H17V18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18V16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H19V12Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M2 19C2 16.2386 4.23858 14 7 14H12.1707C12.0602 14.3128 12 14.6494 12 15C12 16.6569 13.3431 18 15 18C15 19.6569 16.3431 21 18 21C18.5722 21 19.1069 20.8398 19.5619 20.5619C19.0349 21.4243 18.0847 22 17 22H5C3.34315 22 2 20.6569 2 19Z"
      fill={color || "#000"}
      opacity={0.28}
    />
  </Svg>
);

export default Piuserplusduosolid;
