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
 * Pistethoscopecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistethoscopecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "stethoscope icon",
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
    <path d="M10.5 3.012a2.5 2.5 0 0 1 2.5 2.5v1.684c0 1.82-.638 3.581-1.803 4.979l-.245.295A3.82 3.82 0 0 1 8 13.852M5.5 3.012a2.5 2.5 0 0 0-2.5 2.5v1.684c0 1.82.638 3.581 1.803 4.979l.245.295A3.82 3.82 0 0 0 8 13.852m11 .16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 0v1.5a5.5 5.5 0 1 1-11 0v-1.66" />
    <path
      fill={color}
      d="M21.5 11.512a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pistethoscopecontrast;
