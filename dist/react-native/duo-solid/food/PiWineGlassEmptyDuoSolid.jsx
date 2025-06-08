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
 * Piwineglassemptyduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwineglassemptyduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wine glass empty icon",
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
    <path d="M12 13v9m0 0h4m-4 0H8" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M7.302 1a1 1 0 0 0-.868.502A11 11 0 0 0 5 6.89C5 10.767 7.8 14 12 14s7-3.233 7-7.111c0-1.914-.535-3.82-1.434-5.387A1 1 0 0 0 16.698 1z"
    />
  </Svg>
);

export default Piwineglassemptyduosolid;
