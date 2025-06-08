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
 * Pialignverticalcenterduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignverticalcenterduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align vertical center icon",
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
    <path d="M5 12h14" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M8.005 17.414a1 1 0 0 1 .161-.65 17.4 17.4 0 0 1 2.863-3.384c.264-.24.607-.38.971-.38s.707.14.97.38a17.4 17.4 0 0 1 2.864 3.384 1 1 0 0 1-.932 1.547A30 30 0 0 0 13 18.185V21a1 1 0 1 1-2 0v-2.815q-.953.033-1.902.126a1 1 0 0 1-1.093-.897M9.098 5.689a1 1 0 0 0-.932 1.547 17.4 17.4 0 0 0 2.863 3.384c.264.24.607.38.971.38s.707-.14.97-.38a17.4 17.4 0 0 0 2.864-3.384 1 1 0 0 0-.932-1.547q-.95.093-1.902.126V3a1 1 0 1 0-2 0v2.815a30 30 0 0 1-1.902-.126"
    />
  </Svg>
);

export default Pialignverticalcenterduosolid;
