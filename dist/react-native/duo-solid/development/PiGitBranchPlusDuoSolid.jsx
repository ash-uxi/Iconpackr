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
 * Pigitbranchplusduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitbranchplusduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git branch plus icon",
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
      d="M14 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0M19 15a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2zM2 18.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
    />{" "}
    <path d="M6 15.5v-1m0 0V3m0 11.5a9 9 0 0 1 9-9" opacity={0.28} />
  </Svg>
);

export default Pigitbranchplusduosolid;
