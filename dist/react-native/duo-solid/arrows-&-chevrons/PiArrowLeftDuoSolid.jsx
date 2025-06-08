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
 * Piarrowleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left icon",
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
      d="M3 12c0-.432.144-.864.429-1.22a31.2 31.2 0 0 1 5.807-5.584A1 1 0 0 1 10.83 6v12a1 1 0 0 1-1.594.804 31.2 31.2 0 0 1-5.807-5.584A1.95 1.95 0 0 1 3 12"
    />{" "}
    <path d="M4 12h16" opacity={0.28} />
  </Svg>
);

export default Piarrowleftduosolid;
