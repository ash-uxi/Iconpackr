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
 * Pitroubleshootduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitroubleshootduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "troubleshoot icon",
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
    <path d="M18.364 5.637 14.83 9.169m0 5.663 3.533 3.533m-9.196-3.532-3.532 3.532m0-12.728 3.532 3.532" />{" "}
    <path
      fill={color || "#000"}
      d="M4.929 4.929A9.97 9.97 0 0 1 12 2a9.97 9.97 0 0 1 7.071 2.929A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.929 7.071A9.97 9.97 0 0 1 12 22a9.97 9.97 0 0 1-7.071-2.929A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.929-7.071m4.95 4.95A3 3 0 0 0 9 12c0 .828.337 1.58.879 2.121A3 3 0 0 0 12 15c.828 0 1.58-.337 2.121-.879A3 3 0 0 0 15 12c0-.828-.337-1.58-.879-2.121A3 3 0 0 0 12 9c-.828 0-1.58.337-2.121.879"
      opacity={0.28}
    />
  </Svg>
);

export default Pitroubleshootduosolid;
