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
 * Piburgercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piburgercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "burger icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M21 8.757c0-6.342-18-6.342-18 0C3 9.443 3.61 10 4.36 10h15.28c.75 0 1.36-.557 1.36-1.243M5.4 20A2.4 2.4 0 0 1 3 17.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6 2.4 2.4 0 0 1-2.4 2.4z" />
    </g>
    <path d="M20.333 13.5c-.947.667-2.385.667-3.333 0-.947-.667-2.386-.667-3.333 0s-2.386.667-3.334 0c-.947-.667-2.385-.667-3.333 0-.947.667-2.386.667-3.333 0M4.36 10h15.278C20.391 10 21 9.443 21 8.757c0-6.342-18-6.342-18 0C3 9.443 3.61 10 4.36 10M3.6 17h16.8a.6.6 0 0 1 .6.6 2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 17.6a.6.6 0 0 1 .6-.6" />
  </Svg>
);

export default Piburgercontrast;
