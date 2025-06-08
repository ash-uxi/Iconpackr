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
 * Pidumbbellsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidumbbellsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "dumbbell icon",
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
      d="M4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7V10H14V7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7V8C21.6569 8 23 9.34315 23 11C23 12.6569 21.6569 14 20 14V15C20 16.6569 18.6569 18 17 18C15.3431 18 14 16.6569 14 15V12H10V15C10 16.6569 8.65685 18 7 18C5.34315 18 4 16.6569 4 15V14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8V7ZM4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12V10ZM20 12C20.5523 12 21 11.5523 21 11C21 10.4477 20.5523 10 20 10V12Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pidumbbellsolid;
