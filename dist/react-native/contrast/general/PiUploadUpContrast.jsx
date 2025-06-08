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
 * Piuploadupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuploadupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "upload up icon",
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
    <path d="M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5m-9-8.45V15m0-8.45c-1 0-2.006.162-3 .262a15 15 0 0 1 2.556-2.655.7.7 0 0 1 .888 0A15 15 0 0 1 15 6.812c-.994-.1-2-.262-3-.262" />
    <path
      fill={color}
      d="M9 6.812a15 15 0 0 1 2.556-2.655.7.7 0 0 1 .888 0A15 15 0 0 1 15 6.812c-.994-.1-2-.262-3-.262s-2.006.162-3 .262"
      opacity={0.28}
    />
  </Svg>
);

export default Piuploadupcontrast;
