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
 * Piswaparrowverticalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaparrowverticalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap arrow vertical icon",
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
      <path d="M15.604 20.86A20.2 20.2 0 0 1 12 17.113l2.223.165a24 24 0 0 0 3.554 0L20 17.113a20.2 20.2 0 0 1-3.604 3.747.63.63 0 0 1-.792 0M4 6.887A20.2 20.2 0 0 1 7.604 3.14a.63.63 0 0 1 .792 0A20.2 20.2 0 0 1 12 6.887l-2.223-.165a24 24 0 0 0-3.554 0z" />
    </g>
    <path d="M16 17.344V7m0 10.344q-.89 0-1.777-.066L12 17.113a20.2 20.2 0 0 0 3.604 3.747.63.63 0 0 0 .792 0A20.2 20.2 0 0 0 20 17.113l-2.223.165q-.888.066-1.777.066M8 6.656V17M8 6.656q-.89 0-1.777.066L4 6.887A20.2 20.2 0 0 1 7.604 3.14a.63.63 0 0 1 .792 0A20.2 20.2 0 0 1 12 6.887l-2.223-.165A24 24 0 0 0 8 6.656" />
  </Svg>
);

export default Piswaparrowverticalcontrast;
