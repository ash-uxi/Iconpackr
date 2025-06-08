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
 * Pikeyrightduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyrightduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key right icon",
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
    <path d="M18 12h4v3m-4-3h-8m8 0v2" opacity={0.28} />{" "}
    <path fill={color || "#000"} d="M6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7" />
  </Svg>
);

export default Pikeyrightduosolid;
