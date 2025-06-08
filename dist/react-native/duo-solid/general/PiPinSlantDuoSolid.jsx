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
 * Pipinslantduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipinslantduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pin slant icon",
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
      d="M15.788 3.082a2.6 2.6 0 0 0-3.877.644L9.714 7.317a.47.47 0 0 1-.268.217.94.94 0 0 1-.504-.004 5.54 5.54 0 0 0-5.246 1.461 1.504 1.504 0 0 0-.14 1.967c1.343 1.79 2.79 3.505 4.386 5.1 1.596 1.596 3.31 3.044 5.1 4.387.6.449 1.438.39 1.967-.14a5.54 5.54 0 0 0 1.461-5.246.94.94 0 0 1-.003-.504.47.47 0 0 1 .216-.269l3.592-2.196a2.6 2.6 0 0 0 .644-3.877 39 39 0 0 0-5.131-5.131"
    />{" "}
    <path d="m8.65 15.35-5.168 5.168" opacity={0.28} />
  </Svg>
);

export default Pipinslantduosolid;
