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
 * Picreditcardarrowrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picreditcardarrowrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "credit card arrow right icon",
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
    <path d="M19.59 22.573a12.9 12.9 0 0 0 2.275-2.191.6.6 0 0 0 .135-.38m-2.41-2.572c.846.634 1.61 1.37 2.275 2.191.09.111.135.246.135.38m0 0h-6M2 9h.006m0 0h19.988M2.006 9C2 9.413 2 9.876 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20H12M2.006 9c.018-1.35.096-2.16.43-2.816a4 4 0 0 1 1.748-1.748C5.04 4 6.16 4 8.4 4h7.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.334.655.412 1.466.43 2.816m0 0H22m-.006 0c.006.413.006.876.006 1.4v3.837M6 13h3" />
    <path
      fill={color}
      d="M2 10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 4 6.16 4 8.4 4h7.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C22 7.04 22 8.16 22 10.4v3.2c0 .537 0 1.01-.006 1.43h-.605A3 3 0 0 0 16.62 17H16A3 3 0 0 0 13 20H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 16.96 2 15.84 2 13.6z"
      opacity={0.28}
    />
  </Svg>
);

export default Picreditcardarrowrightcontrast;
