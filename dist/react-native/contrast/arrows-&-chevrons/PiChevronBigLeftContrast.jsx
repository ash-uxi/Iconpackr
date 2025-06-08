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
 * Pichevronbigleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronbigleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron big left icon",
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
      d="M9.183 12.51A30.6 30.6 0 0 0 15 18a72 72 0 0 1 0-12 30.6 30.6 0 0 0-5.817 5.49.8.8 0 0 0 0 1.02"
      opacity={0.28}
    />
    <path d="M9.183 12.51A30.6 30.6 0 0 0 15 18a72 72 0 0 1 0-12 30.6 30.6 0 0 0-5.817 5.49.8.8 0 0 0 0 1.02" />
  </Svg>
);

export default Pichevronbigleftcontrast;
