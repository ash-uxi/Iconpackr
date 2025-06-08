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
 * Pilistaigeneratedduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistaigeneratedduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list ai generated icon",
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
      d="M14 19a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2zM18.93 12.633a1 1 0 0 0-1.86 0c-.293.743-.566 1.19-.896 1.523s-.781.614-1.54.914a1 1 0 0 0 0 1.86c.759.3 1.21.582 1.54.914s.603.78.896 1.523a1 1 0 0 0 1.86 0c.293-.743.566-1.19.896-1.523s.781-.614 1.54-.914a1 1 0 0 0 0-1.86c-.759-.3-1.21-.582-1.54-.914s-.603-.78-.896-1.523"
    />{" "}
    <path d="M4 12h9.5M4 18h6M4 6h16" opacity={0.28} />
  </Svg>
);

export default Pilistaigeneratedduosolid;
