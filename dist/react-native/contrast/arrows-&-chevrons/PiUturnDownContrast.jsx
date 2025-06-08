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
 * Piuturndowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturndowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn down icon",
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
      d="M7.596 19.855a20.8 20.8 0 0 1-3.68-3.886l2.32.17a24 24 0 0 0 3.528 0l2.32-.17a20.8 20.8 0 0 1-3.68 3.886.64.64 0 0 1-.808 0"
      opacity={0.28}
    />
    <path d="M8 16.205V9a5 5 0 0 1 10 0v3M8 16.205a24 24 0 0 1-1.764-.065l-2.32-.17a20.8 20.8 0 0 0 3.68 3.885.64.64 0 0 0 .809 0 20.8 20.8 0 0 0 3.678-3.886l-2.32.171A24 24 0 0 1 8 16.205" />
  </Svg>
);

export default Piuturndowncontrast;
