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
 * Pimappin02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimappin02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "map pin02 icon",
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
    <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0 0v8" />
    <path fill={color} d="M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0" opacity={0.28} />
  </Svg>
);

export default Pimappin02contrast;
