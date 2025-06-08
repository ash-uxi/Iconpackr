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
 * Piarrowturnleftupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnleftupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn left up icon",
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
      d="M13.83 10.844a1 1 0 0 0 .974-1.58 26.2 26.2 0 0 0-4.684-4.87 1.79 1.79 0 0 0-2.24 0 26.2 26.2 0 0 0-4.684 4.87 1 1 0 0 0 .973 1.58A49 49 0 0 1 6 10.548a23 23 0 0 1 6 0c.443.058.889.134 1.83.296"
    />{" "}
    <path
      d="M9 9.352V13c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C12.8 21 14.2 21 17 21h3"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowturnleftupduosolid;
