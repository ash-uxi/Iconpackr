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
 * Pikeyleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key left icon",
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
    <path fill={color || "#000"} d="M18 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10" />{" "}
    <path d="M6 12H2v3m4-3h8m-8 0v2" opacity={0.28} />
  </Svg>
);

export default Pikeyleftduosolid;
