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
 * Piloginleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piloginleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "log in left icon",
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
    <path d="M11 4.528A6 6 0 0 1 21 9v6a6 6 0 0 1-10 4.472" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M13.789 8.2a1 1 0 0 0-1.595.9q.047.46.098.884c.04.35.08.686.11 1.016H3a1 1 0 1 0 0 2h9.401q-.045.493-.11 1.015-.05.424-.098.885a1 1 0 0 0 1.596.9 16 16 0 0 0 2.83-2.727 1.7 1.7 0 0 0 0-2.146A16 16 0 0 0 13.79 8.2"
    />
  </Svg>
);

export default Piloginleftduosolid;
