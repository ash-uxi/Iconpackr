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
 * Pispotifycontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispotifycontrast = ({
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
    <path d="M15.05 15.876A10 10 0 0 0 10.95 15a10 10 0 0 0-2.95.443m8.245-2.32A12.95 12.95 0 0 0 10.952 12c-1.195 0-2.353.161-3.452.463m10-2.066A15.9 15.9 0 0 0 10.951 9c-1.363 0-2.687.17-3.95.492m5 11.658a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3" />
    <path
      fill={color}
      d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pispotifycontrast;
