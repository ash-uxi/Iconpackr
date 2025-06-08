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
 * Pialignleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align left icon",
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
      d="M20 13a1 1 0 1 0 0-2h-7.124q.03-1.503.152-3.003a1 1 0 0 0-1.59-.886 21.8 21.8 0 0 0-4.069 3.853 1.64 1.64 0 0 0 0 2.072 21.8 21.8 0 0 0 4.069 3.853 1 1 0 0 0 1.59-.886q-.122-1.5-.152-3.003z"
    />{" "}
    <path d="M4 5v14" opacity={0.28} />
  </Svg>
);

export default Pialignleftduosolid;
