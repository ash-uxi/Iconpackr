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
 * Pidownloaddowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidownloaddowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "download down icon",
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
      fill={color}
      d="M11.556 14.843A15 15 0 0 1 9 12.188a30 30 0 0 0 6 0 15 15 0 0 1-2.556 2.655.704.704 0 0 1-.888 0"
      opacity={0.28}
    />
    <path d="M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5m-9-2.661V4m0 8.339q-1.503 0-3-.15a15 15 0 0 0 2.556 2.654.704.704 0 0 0 .888 0A15 15 0 0 0 15 12.188q-1.498.15-3 .15" />
  </Svg>
);

export default Pidownloaddowncontrast;
