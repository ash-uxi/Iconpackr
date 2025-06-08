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
 * Piplanetringcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplanetringcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "planet ring icon",
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
    <path d="M18.34 7.12c2.432-.813 4.11-1.051 4.38-.512.497.987-3.9 4.2-9.821 7.179s-11.123 4.592-11.62 3.605c-.27-.54.92-1.744 3.022-3.212m14.038-7.06A8 8 0 0 0 4.3 14.18m14.04-7.06A8 8 0 1 1 4.3 14.18" />
    <path fill={color} d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0" opacity={0.28} />
  </Svg>
);

export default Piplanetringcontrast;
