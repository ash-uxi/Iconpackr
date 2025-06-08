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
 * Picoffeecup02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picoffeecup02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "coffee cup02 icon",
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
    <path d="M17.99 11H19a3 3 0 1 1 0 6h-2.487m1.477-6c.01.157.01.35.01.6v.753A7.96 7.96 0 0 1 16.513 17m1.477-6c-.012-.196-.038-.335-.099-.454a1 1 0 0 0-.437-.437C17.24 10 16.96 10 16.4 10H3.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 10.76 2 11.04 2 11.6v.753A8 8 0 0 0 16.513 17M6 6v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V4m3 2v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V4m3 2v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V4" />
    <path
      fill={color}
      d="M18 12.353V11.6c0-.25 0-.443-.01-.6-.012-.196-.038-.335-.099-.454a1 1 0 0 0-.437-.437C17.24 10 16.96 10 16.4 10H3.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 10.76 2 11.04 2 11.6v.753a8 8 0 0 0 16 0"
      opacity={0.28}
    />
  </Svg>
);

export default Picoffeecup02contrast;
