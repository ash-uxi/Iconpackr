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
 * Pifilesettingscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifilesettingscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file settings icon",
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
    <path d="M11.343 22H10.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 18.96 4 17.84 4 15.6V8.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 2 8.16 2 10.4 2h1.949c.787 0 1.258 0 1.651.058m6 8.474v-.881c0-.787 0-1.257-.058-1.651M14 2.058V3.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 8 17.12 8 18.8 8h1.142M14 2.058q.143.02.277.053c.408.098.798.26 1.156.478.404.248.75.594 1.442 1.286l1.25 1.25c.692.692 1.038 1.038 1.286 1.442a4 4 0 0 1 .479 1.156q.031.134.052.277M18 18h.01M18 14l1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z" />
    <path
      fill={color}
      d="M4.436 19.816C4 18.96 4 17.84 4 15.6V8.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 2 8.16 2 10.4 2h1.949c.787 0 1.258 0 1.651.058q.143.02.277.053c.408.098.798.26 1.156.478.404.248.75.594 1.442 1.286l1.25 1.25c.692.692 1.038 1.038 1.286 1.442a4 4 0 0 1 .479 1.156q.031.134.052.277c.058.394.058.864.058 1.651v1.752h-.496a3 3 0 0 0-3.603.454l-.317.31-.444.005a3 3 0 0 0-2.968 2.968l-.005.444-.31.317a3 3 0 0 0 0 4.198l.31.317.005.444q.005.434.125.83V22H10.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748"
      opacity={0.28}
    />
  </Svg>
);

export default Pifilesettingscontrast;
