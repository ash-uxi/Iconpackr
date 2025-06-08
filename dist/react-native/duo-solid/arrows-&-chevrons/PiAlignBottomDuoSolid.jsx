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
 * Pialignbottomduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignbottomduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align bottom icon",
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
      d="M13 4a1 1 0 1 0-2 0v7.124a50 50 0 0 1-3.003-.152 1 1 0 0 0-.886 1.59 21.8 21.8 0 0 0 3.853 4.069 1.64 1.64 0 0 0 2.072 0 21.8 21.8 0 0 0 3.852-4.069 1 1 0 0 0-.886-1.59q-1.499.122-3.002.152z"
    />{" "}
    <path d="M5 20h14" opacity={0.28} />
  </Svg>
);

export default Pialignbottomduosolid;
