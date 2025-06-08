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
 * Piarrowloopduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowloopduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow loop icon",
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
      d="M15.925 12.562a1 1 0 0 1 1.055.484l.47.818.238.384q.374.564.847 1.044l.17.166c.4.38.847.714 1.33.991l.819.47.13.09a1 1 0 0 1-.487 1.767c-1.14.163-2.293.202-3.44.117l-.49-.043a1.7 1.7 0 0 1-.977-.44l-.107-.11a1.7 1.7 0 0 1-.414-.83l-.02-.138a16 16 0 0 1 .074-3.93l.034-.154c.108-.349.401-.616.768-.686M3.51 5.216a16 16 0 0 1 3.93-.074l.159.024c.312.063.594.21.819.418l.108.108.085.102c.162.21.276.458.327.728l.02.137.043.491c.085 1.147.046 2.3-.117 3.44a1 1 0 0 1-1.857.356l-.467-.812a7 7 0 0 0-.785-1.102l-.305-.33a7 7 0 0 0-1.255-1.007l-.198-.12-.87-.506a1 1 0 0 1 .363-1.853"
    />{" "}
    <path
      d="M6.182 8C3.018 11.788 2.411 16.553 4.93 19.07c1.832 1.832 4.854 2.01 7.823.752m5.071-3.828c3.16-3.788 3.765-8.549 1.248-11.066-1.832-1.832-4.854-2.01-7.823-.752"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowloopduosolid;
