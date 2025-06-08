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
 * Piswaparrowhorizontalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaparrowhorizontalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap arrow horizontal icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M3.14 15.604A20.2 20.2 0 0 1 6.887 12l-.165 2.223a24 24 0 0 0 0 3.554L6.887 20a20.2 20.2 0 0 1-3.747-3.604.63.63 0 0 1 0-.792M17.113 4a20.2 20.2 0 0 1 3.747 3.604.63.63 0 0 1 0 .792A20.2 20.2 0 0 1 17.113 12l.165-2.223a24 24 0 0 0 0-3.554z" />
    </g>
    <path d="M6.656 16H17M6.656 16q0-.89.066-1.777L6.887 12a20.2 20.2 0 0 0-3.747 3.604.63.63 0 0 0 0 .792A20.2 20.2 0 0 0 6.887 20l-.165-2.223A24 24 0 0 1 6.656 16m10.688-8H7m10.344 0q0-.89-.066-1.777L17.113 4a20.2 20.2 0 0 1 3.747 3.604.63.63 0 0 1 0 .792A20.2 20.2 0 0 1 17.113 12l.165-2.223q.066-.888.066-1.777" />
  </Svg>
);

export default Piswaparrowhorizontalcontrast;
