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
 * Pispotifyduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispotifyduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spotify icon",
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
      d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15 22.15 17.606 22.15 12 17.606 1.85 12 1.85"
      opacity={0.28}
    />{" "}
    <path d="M15.05 15.876A10 10 0 0 0 10.95 15 10 10 0 0 0 8 15.443m8.246-2.32A12.95 12.95 0 0 0 10.951 12c-1.195 0-2.352.161-3.451.463m10-2.066A15.9 15.9 0 0 0 10.951 9C9.588 9 8.264 9.17 7 9.492" />
  </Svg>
);

export default Pispotifyduosolid;
