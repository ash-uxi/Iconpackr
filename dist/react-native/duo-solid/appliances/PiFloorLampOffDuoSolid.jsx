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
 * Pifloorlampoffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifloorlampoffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "floor lamp off icon",
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
    <path d="M12 21V10M9 21h6" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M9.829 2A3 3 0 0 0 6.99 4.027L5.054 9.676A1 1 0 0 0 6 11h12a1 1 0 0 0 .946-1.324l-1.937-5.649A3 3 0 0 0 14.171 2z"
    />
  </Svg>
);

export default Pifloorlampoffduosolid;
