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
 * Pidangerskullduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidangerskullduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "danger skull icon",
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
    <path d="M10.3 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />{" "}
    <path
      fill={color || "#000"}
      d="M12 2a8 8 0 0 0-8 8v4.419c0 1.374.88 2.595 2.184 3.03.487.162.816.618.816 1.132v.094A3.325 3.325 0 0 0 10.325 22h3.35A3.325 3.325 0 0 0 17 18.675v-.094c0-.514.329-.97.816-1.132A3.19 3.19 0 0 0 20 14.419V10a8 8 0 0 0-8-8"
      opacity={0.28}
    />{" "}
    <path d="M15.7 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </Svg>
);

export default Pidangerskullduosolid;
