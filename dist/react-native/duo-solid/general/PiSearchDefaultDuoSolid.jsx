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
 * Pisearchdefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisearchdefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "search default icon",
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
    <path fill={color || "#000"} d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />{" "}
    <path d="M14.95 14.95 21 21" opacity={0.28} />
  </Svg>
);

export default Pisearchdefaultduosolid;
