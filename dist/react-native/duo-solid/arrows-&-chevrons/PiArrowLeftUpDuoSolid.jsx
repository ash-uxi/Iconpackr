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
 * Piarrowleftupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left up icon",
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
      d="M5.656 5.656a1.95 1.95 0 0 0-.559 1.166 31.2 31.2 0 0 0 .157 8.055 1 1 0 0 0 1.696.559l8.486-8.486a1 1 0 0 0-.56-1.696c-2.672-.4-5.38-.452-8.054-.157-.453.05-.86.253-1.166.56"
    />{" "}
    <path d="m6.363 6.363 12.728 12.728" opacity={0.28} />
  </Svg>
);

export default Piarrowleftupduosolid;
