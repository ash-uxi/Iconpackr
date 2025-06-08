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
 * Pisearchbigzoominduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisearchbigzoominduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "search big zoom in icon",
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
    <path d="M11.5 14.5v-3m0 0v-3m0 3h-3m3 0h3" />{" "}
    <path
      fill={color || "#000"}
      d="M11.5 2a9.5 9.5 0 1 0 5.973 16.888l2.82 2.82a1 1 0 0 0 1.414-1.415l-2.82-2.82A9.5 9.5 0 0 0 11.5 2"
      opacity={0.28}
    />
  </Svg>
);

export default Pisearchbigzoominduosolid;
