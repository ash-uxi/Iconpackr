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
 * Pianimation02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pianimation02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "animation02 icon",
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
    <path fill={color || "#000"} d="M19 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />{" "}
    <path d="M2 14a5 5 0 0 1 5 5v-1a9 9 0 0 1 5.237-8.178" opacity={0.28} />
  </Svg>
);

export default Pianimation02duosolid;
