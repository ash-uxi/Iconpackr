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
 * Pisearchbigduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisearchbigduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "search big icon",
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
      d="M11.5 2a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
    />{" "}
    <path d="M17.51 17.51 21 21" opacity={0.28} />
  </Svg>
);

export default Pisearchbigduosolid;
