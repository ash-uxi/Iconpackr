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
 * Piawardmedalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piawardmedalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "award medal icon",
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
    <path fill={color || "#000"} d="M12 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />{" "}
    <path
      d="M16.365 14.473 18 22c-4.286-2.664-7.714-2.664-12 0l1.635-7.527"
      opacity={0.28}
    />
  </Svg>
);

export default Piawardmedalduosolid;
