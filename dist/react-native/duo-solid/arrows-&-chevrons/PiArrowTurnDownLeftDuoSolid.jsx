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
 * Piarrowturndownleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturndownleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn down left icon",
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
      d="M8.351 15H12c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 11.2 20 9.8 20 7V4"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M9.844 10.17a1 1 0 0 0-1.58-.974 26.2 26.2 0 0 0-4.87 4.684 1.79 1.79 0 0 0 0 2.24 26.2 26.2 0 0 0 4.87 4.684 1 1 0 0 0 1.58-.973A49 49 0 0 1 9.548 18a23 23 0 0 1 0-6c.058-.443.134-.889.296-1.83"
    />
  </Svg>
);

export default Piarrowturndownleftduosolid;
