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
 * Piarrowupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow up icon",
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
      d="M11.406 4.21A30.2 30.2 0 0 0 6 9.83l6-.3 6 .3a30.2 30.2 0 0 0-5.406-5.62.95.95 0 0 0-1.188 0"
      opacity={0.28}
    />
    <path d="m12 9.53-6 .3a30.2 30.2 0 0 1 5.406-5.62.95.95 0 0 1 1.188 0A30.2 30.2 0 0 1 18 9.83zm0 0V20" />
  </Svg>
);

export default Piarrowupcontrast;
