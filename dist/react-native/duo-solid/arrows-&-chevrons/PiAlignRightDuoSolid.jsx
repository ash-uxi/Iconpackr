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
 * Pialignrightduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignrightduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align right icon",
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
    <path d="M21 5v14" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M5 13a1 1 0 1 1 0-2h7.124a50 50 0 0 0-.152-3.003 1 1 0 0 1 1.59-.886 21.8 21.8 0 0 1 4.069 3.853 1.64 1.64 0 0 1 0 2.072 21.8 21.8 0 0 1-4.069 3.853 1 1 0 0 1-1.59-.886q.122-1.5.152-3.003z"
    />
  </Svg>
);

export default Pialignrightduosolid;
