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
 * Piremoteappletvcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piremoteappletvcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "remote apple tv icon",
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
    <path d="M14 15v3m0-6v.01M10 12v.01M10 15v.01M10 18v.01M14 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
    <path
      fill={color}
      d="M15 2H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"
      opacity={0.28}
    />
    <path d="M15 2H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3" />
  </Svg>
);

export default Piremoteappletvcontrast;
