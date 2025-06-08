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
 * Piarrowrightupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right up icon",
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
    <path d="M17.637 6.363 4.909 19.091" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M18.344 5.656c.306.306.509.713.559 1.166a31.2 31.2 0 0 1-.157 8.055 1 1 0 0 1-1.696.559L8.564 6.95a1 1 0 0 1 .56-1.696c2.672-.4 5.38-.452 8.054-.157.453.05.86.253 1.166.56"
    />
  </Svg>
);

export default Piarrowrightupduosolid;
