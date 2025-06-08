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
 * Piuturndownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturndownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn down icon",
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
      d="M3.99 14.972a1 1 0 0 0-.882 1.585 21.8 21.8 0 0 0 3.856 4.074 1.64 1.64 0 0 0 2.072 0 21.8 21.8 0 0 0 3.856-4.074 1 1 0 0 0-.882-1.585l-2.32.17a23 23 0 0 1-3.38 0z"
    />{" "}
    <path d="M8 16.205V9a5 5 0 0 1 10 0v3" opacity={0.28} />
  </Svg>
);

export default Piuturndownduosolid;
